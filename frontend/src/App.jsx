import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { RouterProvider } from 'react-router';
import { router } from './routes';
import { Toaster } from 'sonner';
export default function App() {
    return (_jsxs(_Fragment, { children: [_jsx(RouterProvider, { router: router }), _jsx(Toaster, { position: "top-right", richColors: true })] }));
}
