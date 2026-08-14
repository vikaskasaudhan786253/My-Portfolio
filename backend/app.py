from datetime import datetime
import sqlite3
from pathlib import Path

from flask import Flask, jsonify, request
from flask_cors import CORS

BASE_DIR = Path(__file__).resolve().parent
DB_PATH = BASE_DIR / "portfolio_dashboard.db"

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})


def get_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA foreign_keys = ON")
    return conn


def init_db():
    conn = get_db()
    conn.executescript(
        """
        CREATE TABLE IF NOT EXISTS people (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT DEFAULT '',
            phone TEXT DEFAULT '',
            created_at TEXT NOT NULL
        );

        CREATE TABLE IF NOT EXISTS transactions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            person_id INTEGER NOT NULL,
            type TEXT NOT NULL CHECK(type IN ('given', 'received', 'borrowed')),
            amount REAL NOT NULL CHECK(amount > 0),
            description TEXT DEFAULT '',
            category TEXT DEFAULT 'General',
            status TEXT NOT NULL DEFAULT 'completed'
                CHECK(status IN ('completed', 'pending')),
            date TEXT NOT NULL,
            created_at TEXT NOT NULL,
            FOREIGN KEY(person_id) REFERENCES people(id) ON DELETE CASCADE
        );
        """
    )
    conn.commit()
    conn.close()


def person_to_dict(row):
    return {
        "_id": row["id"],
        "name": row["name"],
        "email": row["email"] or "",
        "phone": row["phone"] or "",
        "balance": round(row["balance"] or 0, 2),
        "transaction_count": row["transaction_count"] or 0,
        "created_at": row["created_at"],
    }


def transaction_to_dict(row):
    return {
        "_id": row["id"],
        "person_id": row["person_id"],
        "person_name": row["person_name"],
        "type": row["type"],
        "amount": float(row["amount"]),
        "description": row["description"] or "",
        "category": row["category"] or "General",
        "status": row["status"],
        "date": row["date"],
        "created_at": row["created_at"],
    }


@app.get("/api/health")
def health():
    return jsonify({"status": "ok", "message": "Portfolio Dashboard API is running"})


@app.get("/api/people")
def list_people():
    conn = get_db()
    rows = conn.execute(
        """
        SELECT
            p.*,
            COALESCE(
                SUM(
                    CASE
                        WHEN t.type IN ('given', 'received') THEN t.amount
                        WHEN t.type = 'borrowed' THEN -t.amount
                        ELSE 0
                    END
                ), 0
            ) AS balance,
            COUNT(t.id) AS transaction_count
        FROM people p
        LEFT JOIN transactions t ON t.person_id = p.id
        GROUP BY p.id
        ORDER BY p.id DESC
        """
    ).fetchall()
    conn.close()
    return jsonify([person_to_dict(row) for row in rows])


@app.get("/api/people/<int:person_id>")
def get_person(person_id):
    conn = get_db()
    row = conn.execute(
        """
        SELECT
            p.*,
            COALESCE(
                SUM(
                    CASE
                        WHEN t.type IN ('given', 'received') THEN t.amount
                        WHEN t.type = 'borrowed' THEN -t.amount
                        ELSE 0
                    END
                ), 0
            ) AS balance,
            COUNT(t.id) AS transaction_count
        FROM people p
        LEFT JOIN transactions t ON t.person_id = p.id
        WHERE p.id = ?
        GROUP BY p.id
        """,
        (person_id,),
    ).fetchone()
    conn.close()

    if not row:
        return jsonify({"error": "Person not found"}), 404

    return jsonify(person_to_dict(row))


@app.post("/api/people")
def create_person():
    data = request.get_json(silent=True) or {}
    name = str(data.get("name", "")).strip()

    if not name:
        return jsonify({"error": "Name is required"}), 400

    now = datetime.utcnow().isoformat()
    conn = get_db()

    cur = conn.execute(
        """
        INSERT INTO people (name, email, phone, created_at)
        VALUES (?, ?, ?, ?)
        """,
        (
            name,
            str(data.get("email", "")).strip(),
            str(data.get("phone", "")).strip(),
            now,
        ),
    )
    person_id = cur.lastrowid

    # The frontend allows optional initial entries when creating a person.
    entries = data.get("entries") or []
    for entry in entries:
        try:
            amount = float(entry.get("amount", 0))
        except (TypeError, ValueError):
            amount = 0

        if amount <= 0:
            continue

        tx_type = entry.get("type", "given")
        if tx_type not in {"given", "borrowed"}:
            tx_type = "given"

        conn.execute(
            """
            INSERT INTO transactions
            (person_id, type, amount, description, category, status, date, created_at)
            VALUES (?, ?, ?, ?, ?, 'completed', ?, ?)
            """,
            (
                person_id,
                tx_type,
                amount,
                str(entry.get("description", "")).strip(),
                str(entry.get("category", "General")).strip() or "General",
                str(entry.get("date", datetime.utcnow().date().isoformat())),
                now,
            ),
        )

    conn.commit()
    conn.close()
    return get_person(person_id), 201


@app.put("/api/people/<int:person_id>")
def update_person(person_id):
    data = request.get_json(silent=True) or {}
    name = str(data.get("name", "")).strip()

    if not name:
        return jsonify({"error": "Name is required"}), 400

    conn = get_db()
    cur = conn.execute(
        """
        UPDATE people
        SET name = ?, email = ?, phone = ?
        WHERE id = ?
        """,
        (
            name,
            str(data.get("email", "")).strip(),
            str(data.get("phone", "")).strip(),
            person_id,
        ),
    )
    conn.commit()
    conn.close()

    if cur.rowcount == 0:
        return jsonify({"error": "Person not found"}), 404

    return get_person(person_id)


@app.delete("/api/people/<int:person_id>")
def delete_person(person_id):
    conn = get_db()
    cur = conn.execute("DELETE FROM people WHERE id = ?", (person_id,))
    conn.commit()
    conn.close()

    if cur.rowcount == 0:
        return jsonify({"error": "Person not found"}), 404

    return jsonify({"message": "Person deleted"})


@app.get("/api/transactions")
def list_transactions():
    person_id = request.args.get("person_id", type=int)

    conn = get_db()
    query = """
        SELECT
            t.*,
            p.name AS person_name
        FROM transactions t
        JOIN people p ON p.id = t.person_id
    """
    params = []

    if person_id:
        query += " WHERE t.person_id = ?"
        params.append(person_id)

    query += " ORDER BY date DESC, t.id DESC"

    rows = conn.execute(query, params).fetchall()
    conn.close()

    return jsonify([transaction_to_dict(row) for row in rows])


@app.post("/api/transactions")
def create_transaction():
    data = request.get_json(silent=True) or {}

    person_id = data.get("person_id")
    tx_type = data.get("type", "given")

    if not person_id:
        return jsonify({"error": "person_id is required"}), 400

    if tx_type not in {"given", "received", "borrowed"}:
        return jsonify({"error": "Invalid transaction type"}), 400

    try:
        person_id = int(person_id)
        amount = float(data.get("amount", 0))
    except (TypeError, ValueError):
        return jsonify({"error": "Invalid person_id or amount"}), 400

    if amount <= 0:
        return jsonify({"error": "Amount must be greater than zero"}), 400

    date = str(data.get("date") or datetime.utcnow().date().isoformat())
    status = data.get("status", "completed")
    if status not in {"completed", "pending"}:
        status = "completed"

    conn = get_db()

    person = conn.execute(
        "SELECT id FROM people WHERE id = ?", (person_id,)
    ).fetchone()
    if not person:
        conn.close()
        return jsonify({"error": "Person not found"}), 404

    cur = conn.execute(
        """
        INSERT INTO transactions
        (person_id, type, amount, description, category, status, date, created_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        """,
        (
            person_id,
            tx_type,
            amount,
            str(data.get("description", "")).strip(),
            str(data.get("category", "General")).strip() or "General",
            status,
            date,
            datetime.utcnow().isoformat(),
        ),
    )
    tx_id = cur.lastrowid
    conn.commit()

    row = conn.execute(
        """
        SELECT t.*, p.name AS person_name
        FROM transactions t
        JOIN people p ON p.id = t.person_id
        WHERE t.id = ?
        """,
        (tx_id,),
    ).fetchone()
    conn.close()

    return jsonify(transaction_to_dict(row)), 201


@app.delete("/api/transactions/<int:transaction_id>")
def delete_transaction(transaction_id):
    conn = get_db()
    cur = conn.execute(
        "DELETE FROM transactions WHERE id = ?", (transaction_id,)
    )
    conn.commit()
    conn.close()

    if cur.rowcount == 0:
        return jsonify({"error": "Transaction not found"}), 404

    return jsonify({"message": "Transaction deleted"})


@app.get("/api/dashboard")
def dashboard():
    conn = get_db()

    totals = conn.execute(
        """
        SELECT
            COALESCE(SUM(CASE WHEN type = 'given' THEN amount ELSE 0 END), 0) AS total_given,
            COALESCE(SUM(CASE WHEN type = 'borrowed' THEN amount ELSE 0 END), 0) AS total_borrowed,
            COALESCE(SUM(CASE WHEN type = 'received' THEN amount ELSE 0 END), 0) AS total_received
        FROM transactions
        """
    ).fetchone()

    # Receivables = money lent but not yet offset by received payments.
    pending_receivables = max(
        float(totals["total_given"]) - float(totals["total_received"]), 0
    )
    pending_payables = float(totals["total_borrowed"])

    people_count = conn.execute(
        "SELECT COUNT(*) AS count FROM people"
    ).fetchone()["count"]

    monthly_rows = conn.execute(
        """
        SELECT
            substr(date, 1, 7) AS month,
            SUM(CASE WHEN type = 'given' THEN amount ELSE 0 END) AS given,
            SUM(CASE WHEN type = 'borrowed' THEN amount ELSE 0 END) AS borrowed,
            SUM(CASE WHEN type = 'received' THEN amount ELSE 0 END) AS received
        FROM transactions
        GROUP BY substr(date, 1, 7)
        ORDER BY month
        LIMIT 12
        """
    ).fetchall()

    recent_rows = conn.execute(
        """
        SELECT t.*, p.name AS person_name
        FROM transactions t
        JOIN people p ON p.id = t.person_id
        ORDER BY t.date DESC, t.id DESC
        LIMIT 10
        """
    ).fetchall()

    conn.close()

    return jsonify(
        {
            "total_given": float(totals["total_given"]),
            "total_borrowed": float(totals["total_borrowed"]),
            "pending_receivables": pending_receivables,
            "pending_payables": pending_payables,
            "people_count": people_count,
            "monthly_data": [
                {
                    "month": row["month"],
                    "given": float(row["given"] or 0),
                    "borrowed": float(row["borrowed"] or 0),
                    "received": float(row["received"] or 0),
                }
                for row in monthly_rows
            ],
            "recent_activity": [
                transaction_to_dict(row) for row in recent_rows
            ],
        }
    )


@app.errorhandler(404)
def not_found(_):
    return jsonify({"error": "Route not found"}), 404


@app.errorhandler(500)
def server_error(_):
    return jsonify({"error": "Internal server error"}), 500


if __name__ == "__main__":
    init_db()
    app.run(host="0.0.0.0", port=5000, debug=True)
