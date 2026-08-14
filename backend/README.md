# Portfolio Dashboard Backend

Flask REST API for the React + Vite frontend.

## Requirements

- Python 3.10+
- pip

## Setup

```powershell
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

The API runs at:

- http://localhost:5000
- http://localhost:5000/api/health

SQLite database:

`backend/portfolio_dashboard.db`

The database is created automatically on first startup.

## API

### People

- GET `/api/people`
- GET `/api/people/<id>`
- POST `/api/people`
- PUT `/api/people/<id>`
- DELETE `/api/people/<id>`

### Transactions

- GET `/api/transactions`
- GET `/api/transactions?person_id=<id>`
- POST `/api/transactions`
- DELETE `/api/transactions/<id>`

### Dashboard

- GET `/api/dashboard`
