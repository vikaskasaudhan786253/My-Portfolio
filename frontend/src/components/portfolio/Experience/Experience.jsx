import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Github, Linkedin, Mail, Menu, X, Sun, Moon, ExternalLink, Download, Award, Code2, Cpu, Database, Phone, MapPin, Send, ArrowUp, Brain, CheckCircle2, Star, Zap, BarChart3, Layers, BookOpen, TrendingUp } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from "recharts";
import { NAV_LINKS, SKILL_CATEGORIES, PROJECTS, ML_JOURNEY, DSA_ALGO_TAGS, DSA_DS_TAGS, DSA_BAR_DATA, CERTS, EXPERIENCE, ACHIEVEMENTS, TOP_LANGS, BLOGS, TESTIMONIALS, CONTRIBS, CONTRIB_COLORS, CONTRIB_COLORS_LIGHT, CODE_LINES } from "../../../data/portfolio-data.js";
import { Reveal, SectionHeader, GradientText, Card } from "../common/PortfolioCommon.jsx";

export function Experience() {
  return (
    _jsx("section", { id: "experience", className: "py-24 bg-slate-50 dark:bg-[#0a0f1e]", children: _jsxs("div", { className: "max-w-6xl mx-auto px-6", children: [_jsx(Reveal, { children: _jsx(SectionHeader, { badge: "Background", title: "Experience", subtitle: "Internships, open source contributions, hackathons, and academic roles." }) }), _jsx("div", { className: "max-w-2xl mx-auto space-y-0", children: EXPERIENCE.map((exp, i) => {
                                        const typeIcon = { intern: "💼", open: "🔧", hack: "⚡", academic: "🎓" };
                                        const typeColor = {
                                            intern: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
                                            open: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300",
                                            hack: "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300",
                                            academic: "bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300",
                                        };
                                        return (_jsx(Reveal, { delay: i * 100, children: _jsxs("div", { className: "relative pl-8 pb-10 border-l-2 border-slate-200 dark:border-slate-700 last:border-l-0", children: [_jsx("div", { className: "absolute -left-[9px] top-1 w-4 h-4 bg-blue-600 rounded-full border-2 border-white dark:border-[#0a0f1e]" }), _jsxs(Card, { className: "p-5", children: [_jsxs("div", { className: "flex items-start justify-between gap-2 mb-2", children: [_jsx("h4", { className: "font-bold text-slate-900 dark:text-white text-sm leading-snug", style: { fontFamily: "'Poppins', sans-serif" }, children: exp.role }), _jsx("span", { className: `text-xs px-2 py-0.5 rounded-full flex-shrink-0 ${typeColor[exp.type]}`, children: typeIcon[exp.type] })] }), _jsx("p", { className: "text-xs text-blue-600 dark:text-blue-400 font-medium mb-1", children: exp.org }), _jsx("p", { className: "text-xs text-slate-400 mb-3", children: exp.period }), _jsx("p", { className: "text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-3", children: exp.desc }), _jsx("div", { className: "flex flex-wrap gap-1.5", children: exp.tech.map((t) => _jsx("span", { className: "text-xs px-2 py-0.5 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-md", children: t }, t)) })] })] }) }, exp.role));
                                    }) })] }) })
  );
}
