const BASE = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

async function request(path, options = {}) {
    const res = await fetch(`${BASE}${path}`, {
        headers: {
            "Content-Type": "application/json",
            ...(options.headers || {}),
        },
        ...options,
    });

    if (!res.ok) {
        const err = await res.json().catch(() => ({ error: "Request failed" }));
        throw new Error(err.error || "Request failed");
    }

    return res.status === 204 ? null : res.json();
}

export const api = {
    people: {
        list: () => request("/people"),
        get: (id) => request(`/people/${id}`),
        create: (data) =>
            request("/people", {
                method: "POST",
                body: JSON.stringify(data),
            }),
        update: (id, data) =>
            request(`/people/${id}`, {
                method: "PUT",
                body: JSON.stringify(data),
            }),
        delete: (id) =>
            request(`/people/${id}`, {
                method: "DELETE",
            }),
    },

    transactions: {
        list: (personId) =>
            request(`/transactions${personId ? `?person_id=${personId}` : ""}`),
        create: (data) =>
            request("/transactions", {
                method: "POST",
                body: JSON.stringify(data),
            }),
        delete: (id) =>
            request(`/transactions/${id}`, {
                method: "DELETE",
            }),
    },

    dashboard: {
        stats: () => request("/dashboard"),
    },
};
