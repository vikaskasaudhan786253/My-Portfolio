# Portfolio Dashboard — DigitalDebtbook-style Structure

This version reorganizes the existing Portfolio Dashboard codebase to follow the component/folder organization style used by DigitalDebtbook.

## UI preservation

The existing portfolio UI was kept unchanged. The refactor is structural:
- same section markup
- same Tailwind classes
- same colors
- same spacing
- same animations
- same interactions
- same page content

## Frontend structure

```text
frontend/
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── routes.jsx
    ├── components/
    │   ├── ui/
    │   └── portfolio/
    │       ├── common/
    │       │   └── PortfolioCommon.jsx
    │       ├── Header/Header.jsx
    │       ├── Hero/Hero.jsx
    │       ├── About/About.jsx
    │       ├── Skills/Skills.jsx
    │       ├── Projects/Projects.jsx
    │       ├── Journey/Journey.jsx
    │       ├── DSA/DSA.jsx
    │       ├── Certifications/Certifications.jsx
    │       ├── Experience/Experience.jsx
    │       ├── Achievements/Achievements.jsx
    │       ├── GitHub/GitHub.jsx
    │       ├── Blogs/Blogs.jsx
    │       ├── Testimonials/Testimonials.jsx
    │       ├── Contact/Contact.jsx
    │       └── Footer/Footer.jsx
    ├── data/
    │   └── portfolio-data.js
    ├── pages/
    │   ├── portfolio-page.jsx
    │   ├── dashboard-page.jsx
    │   ├── landing-page.jsx
    │   ├── login-page.jsx
    │   ├── register-page.jsx
    │   ├── people-page.jsx
    │   ├── transactions-page.jsx
    │   ├── reports-page.jsx
    │   ├── profile-page.jsx
    │   └── settings-page.jsx
    ├── layouts/
    ├── lib/
    └── styles/
```

## Run

```powershell
cd frontend
npm install
npm run dev
```

The Flask backend remains under `backend/`.
