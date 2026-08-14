# Portfolio Dashboard — React + JavaScript + Vite

This is the JavaScript/JSX version of the uploaded Portfolio Dashboard frontend.

## Stack
- React 18
- JavaScript + JSX
- Vite
- Tailwind CSS v4
- React Router
- Lucide React
- Recharts
- Radix UI components
- Sonner

## Run

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite.

For production:

```bash
npm run build
npm run preview
```

## Important
- All `.ts` / `.tsx` source files were converted to `.js` / `.jsx`.
- `src/main.tsx` became `src/main.jsx`.
- `vite.config.ts` became `vite.config.js`.
- The Tailwind source glob was updated for JavaScript/JSX.
- The frontend API helper still points to `http://localhost:5000/api`. If you connect a backend, update `src/app/lib/api.js`.
- The original backend/Supabase implementation is not included because this package is frontend-only.
