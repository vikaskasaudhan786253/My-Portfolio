import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router";
import { LayoutDashboard, Users, Receipt, FileText, User, Settings, LogOut, Search, Bell, Menu, X, BookOpen, Home, } from "lucide-react";
export function DashboardLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogout = () => {
        // Mock logout
        navigate("/");
    };
    const navItems = [
        { path: "/app", icon: LayoutDashboard, label: "Dashboard", exact: true },
        { path: "/app/people", icon: Users, label: "People" },
        { path: "/app/transactions", icon: Receipt, label: "Transactions" },
        { path: "/app/reports", icon: FileText, label: "Reports" },
        { path: "/app/profile", icon: User, label: "Profile" },
        { path: "/app/settings", icon: Settings, label: "Settings" },
    ];
    const isActive = (path, exact) => {
        if (exact) {
            return location.pathname === path;
        }
        return location.pathname.startsWith(path);
    };
    return (_jsxs("div", { className: "min-h-screen bg-gray-50", children: [_jsx("div", { className: "lg:hidden sticky top-0 z-40 bg-white border-b border-gray-200", children: _jsxs("div", { className: "flex items-center justify-between px-4 h-16", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("div", { className: "w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center", children: _jsx(BookOpen, { className: "w-5 h-5 text-white" }) }), _jsx("span", { className: "text-xl font-semibold text-gray-900", children: "DebtBook" })] }), _jsx("button", { onClick: () => setSidebarOpen(!sidebarOpen), className: "p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg", children: sidebarOpen ? _jsx(X, { className: "w-6 h-6" }) : _jsx(Menu, { className: "w-6 h-6" }) })] }) }), sidebarOpen && (_jsx("div", { className: "fixed inset-0 bg-black/50 z-40 lg:hidden", onClick: () => setSidebarOpen(false) })), _jsx("aside", { className: `fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 z-50 transform transition-transform duration-300 lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`, children: _jsxs("div", { className: "flex flex-col h-full", children: [_jsxs("div", { className: "hidden lg:flex items-center gap-2 px-6 h-16 border-b border-gray-200", children: [_jsx("div", { className: "w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center", children: _jsx(BookOpen, { className: "w-5 h-5 text-white" }) }), _jsx("span", { className: "text-xl font-semibold text-gray-900", children: "DebtBook" })] }), _jsx("nav", { className: "flex-1 px-4 py-6 space-y-1 overflow-y-auto", children: navItems.map((item) => {
                                const Icon = item.icon;
                                const active = isActive(item.path, item.exact);
                                return (_jsxs(Link, { to: item.path, onClick: () => setSidebarOpen(false), className: `flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors ${active
                                        ? "bg-blue-50 text-blue-600"
                                        : "text-gray-700 hover:bg-gray-100"}`, children: [_jsx(Icon, { className: "w-5 h-5" }), _jsx("span", { className: "font-medium", children: item.label })] }, item.path));
                            }) }), _jsx("div", { className: "p-4 border-t border-gray-200", children: _jsxs("button", { onClick: handleLogout, className: "flex items-center gap-3 px-3 py-2.5 w-full text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-xl transition-colors", children: [_jsx(LogOut, { className: "w-5 h-5" }), _jsx("span", { className: "font-medium", children: "Logout" })] }) })] }) }), _jsxs("div", { className: "lg:pl-64", children: [_jsx("header", { className: "sticky top-0 z-30 bg-white border-b border-gray-200 hidden lg:block", children: _jsxs("div", { className: "flex items-center justify-between px-8 h-16", children: [_jsx("div", { className: "flex-1 max-w-xl", children: _jsxs("div", { className: "relative", children: [_jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" }), _jsx("input", { type: "text", placeholder: "Search...", className: "w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" })] }) }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsxs("button", { className: "relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-colors", children: [_jsx(Bell, { className: "w-5 h-5" }), _jsx("span", { className: "absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" })] }), _jsxs("div", { className: "flex items-center gap-3 pl-4 border-l border-gray-200", children: [_jsxs("div", { className: "text-right", children: [_jsx("div", { className: "text-sm font-medium text-gray-900", children: "John Doe" }), _jsx("div", { className: "text-xs text-gray-500", children: "john@example.com" })] }), _jsx("div", { className: "w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-medium", children: "JD" })] })] })] }) }), _jsx("main", { className: "p-4 sm:p-6 lg:p-8", children: _jsx(Outlet, {}) })] }), _jsx("nav", { className: "lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-30", children: _jsxs("div", { className: "grid grid-cols-5 gap-1 px-2 py-2", children: [_jsxs(Link, { to: "/app", className: `flex flex-col items-center gap-1 py-2 rounded-lg transition-colors ${isActive("/app", true)
                                ? "text-blue-600 bg-blue-50"
                                : "text-gray-600"}`, children: [_jsx(Home, { className: "w-5 h-5" }), _jsx("span", { className: "text-xs font-medium", children: "Home" })] }), _jsxs(Link, { to: "/app/people", className: `flex flex-col items-center gap-1 py-2 rounded-lg transition-colors ${isActive("/app/people")
                                ? "text-blue-600 bg-blue-50"
                                : "text-gray-600"}`, children: [_jsx(Users, { className: "w-5 h-5" }), _jsx("span", { className: "text-xs font-medium", children: "People" })] }), _jsxs(Link, { to: "/app/transactions", className: `flex flex-col items-center gap-1 py-2 rounded-lg transition-colors ${isActive("/app/transactions")
                                ? "text-blue-600 bg-blue-50"
                                : "text-gray-600"}`, children: [_jsx(Receipt, { className: "w-5 h-5" }), _jsx("span", { className: "text-xs font-medium", children: "Transactions" })] }), _jsxs(Link, { to: "/app/reports", className: `flex flex-col items-center gap-1 py-2 rounded-lg transition-colors ${isActive("/app/reports")
                                ? "text-blue-600 bg-blue-50"
                                : "text-gray-600"}`, children: [_jsx(FileText, { className: "w-5 h-5" }), _jsx("span", { className: "text-xs font-medium", children: "Reports" })] }), _jsxs(Link, { to: "/app/profile", className: `flex flex-col items-center gap-1 py-2 rounded-lg transition-colors ${isActive("/app/profile")
                                ? "text-blue-600 bg-blue-50"
                                : "text-gray-600"}`, children: [_jsx(User, { className: "w-5 h-5" }), _jsx("span", { className: "text-xs font-medium", children: "Profile" })] })] }) }), _jsx("div", { className: "lg:hidden h-20" })] }));
}
