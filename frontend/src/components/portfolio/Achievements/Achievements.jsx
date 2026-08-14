import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Github, Linkedin, Mail, Menu, X, Sun, Moon, ExternalLink, Download, Award, Code2, Cpu, Database, Phone, MapPin, Send, ArrowUp, Brain, CheckCircle2, Star, Zap, BarChart3, Layers, BookOpen, TrendingUp } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from "recharts";
import { NAV_LINKS, SKILL_CATEGORIES, PROJECTS, ML_JOURNEY, DSA_ALGO_TAGS, DSA_DS_TAGS, DSA_BAR_DATA, CERTS, EXPERIENCE, ACHIEVEMENTS, TOP_LANGS, BLOGS, TESTIMONIALS, CONTRIBS, CONTRIB_COLORS, CONTRIB_COLORS_LIGHT, CODE_LINES } from "../../../data/portfolio-data.js";
import { Reveal, SectionHeader, GradientText, Card } from "../common/PortfolioCommon.jsx";

export function Achievements() {
  return (
    _jsx("section", { id: "achievements", className: "py-24 bg-white dark:bg-slate-900", children: _jsxs("div", { className: "max-w-6xl mx-auto px-6", children: [_jsx(Reveal, { children: _jsx(SectionHeader, { badge: "Wins", title: "Achievements", subtitle: "Milestones earned through consistency, competition, and dedication." }) }), _jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: ACHIEVEMENTS.map((a, i) => (_jsx(Reveal, { delay: i * 70, children: _jsx(Card, { className: "p-5 hover:-translate-y-1 transition-transform", children: _jsxs("div", { className: "flex items-start gap-4", children: [_jsx("div", { className: "text-3xl", children: a.icon }), _jsxs("div", { children: [_jsx("h4", { className: "font-bold text-slate-900 dark:text-white text-sm", style: { fontFamily: "'Poppins', sans-serif" }, children: a.title }), _jsx("p", { className: "text-xs text-slate-500 dark:text-slate-400 mt-1", children: a.desc })] })] }) }) }, a.title))) })] }) })
  );
}
