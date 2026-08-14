# Portfolio Dashboard — React + JavaScript + Vite + Flask

Full-stack project with separate `frontend` and `backend` folders.

## Folder structure

```text
Portfolio_Dashboard_Fullstack/
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   ├── layouts/
│   │   │   ├── lib/
│   │   │   ├── pages/
│   │   │   ├── App.jsx
│   │   │   └── routes.jsx
│   │   └── styles/
│   ├── package.json
│   ├── vite.config.js
│   └── ...
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   └── .env.example
└── README.md
```

## 1. Start backend

Open PowerShell:

```powershell
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

Backend:

```text
http://localhost:5000
```

Test:

```text
http://localhost:5000/api/health
```

## 2. Start frontend

Open another PowerShell:

```powershell
cd frontend
npm install
copy .env.example .env
npm run dev
```

Vite will show the local frontend URL, normally:

```text
http://localhost:5173
```

## Important

Do not run `npm install` from the root folder. Run it inside `frontend`.

Do not run Flask commands inside `frontend`. Run them inside `backend`.

The frontend is React + JavaScript + JSX + Vite. There are no TypeScript `.ts`/`.tsx` application files.

The backend is Flask + SQLite and provides the API expected by the frontend.
