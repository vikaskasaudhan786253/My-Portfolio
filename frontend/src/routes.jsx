import { createBrowserRouter } from "react-router";
import { PortfolioPage } from "./pages/portfolio-page";
import { LandingPage } from "./pages/landing-page";
import { LoginPage } from "./pages/login-page";
import { RegisterPage } from "./pages/register-page";
import { DashboardLayout } from "./layouts/dashboard-layout";
import { DashboardPage } from "./pages/dashboard-page";
import { PeoplePage } from "./pages/people-page";
import { TransactionsPage } from "./pages/transactions-page";
import { ReportsPage } from "./pages/reports-page";
import { ProfilePage } from "./pages/profile-page";
import { SettingsPage } from "./pages/settings-page";
export const router = createBrowserRouter([
    {
        path: "/",
        Component: PortfolioPage,
    },
    {
        path: "/debtbook",
        Component: LandingPage,
    },
    {
        path: "/login",
        Component: LoginPage,
    },
    {
        path: "/register",
        Component: RegisterPage,
    },
    {
        path: "/app",
        Component: DashboardLayout,
        children: [
            {
                index: true,
                Component: DashboardPage,
            },
            {
                path: "people",
                Component: PeoplePage,
            },
            {
                path: "transactions",
                Component: TransactionsPage,
            },
            {
                path: "reports",
                Component: ReportsPage,
            },
            {
                path: "profile",
                Component: ProfilePage,
            },
            {
                path: "settings",
                Component: SettingsPage,
            },
        ],
    },
]);
