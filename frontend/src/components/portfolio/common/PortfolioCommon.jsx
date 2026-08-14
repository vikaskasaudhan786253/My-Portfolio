import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
import { Github, Linkedin, Mail, Menu, X, Sun, Moon, ExternalLink, Download, Award, Code2, Cpu, Database, Phone, MapPin, Send, ArrowUp, Brain, CheckCircle2, Star, Zap, BarChart3, Layers, BookOpen, TrendingUp, } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, PieChart, Pie, } from "recharts";

export function useReveal(threshold = 0.1) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) {
                setVisible(true);
                obs.disconnect();
            }
        }, { threshold });
        if (ref.current)
            obs.observe(ref.current);
        return () => obs.disconnect();
    }, [threshold]);
    return { ref, visible };
}
// ─── HELPERS ───────────────────────────────────────────────────────────────
export function Reveal({ children, delay = 0, className = "" }) {
    const { ref, visible } = useReveal();
    return (_jsx("div", { ref: ref, style: { transitionDelay: `${delay}ms` }, className: `transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`, children: children }));
}
export function SectionHeader({ badge, title, subtitle }) {
    return (_jsxs("div", { className: "text-center mb-16", children: [_jsx("span", { className: "inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400 rounded-full text-sm font-medium tracking-wide mb-4", children: badge }), _jsx("h2", { className: "text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4", style: { fontFamily: "'Poppins', sans-serif" }, children: title }), _jsx("p", { className: "text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-base leading-relaxed", children: subtitle })] }));
}
export function GradientText({ children, className = "" }) {
    return (_jsx("span", { className: `bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent ${className}`, children: children }));
}
export function Card({ children, className = "" }) {
    return (_jsx("div", { className: `bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 ${className}`, children: children }));
}
