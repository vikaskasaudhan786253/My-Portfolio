import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Github, Linkedin, Mail, Menu, X, Sun, Moon, ExternalLink, Download, Award, Code2, Cpu, Database, Phone, MapPin, Send, ArrowUp, Brain, CheckCircle2, Star, Zap, BarChart3, Layers, BookOpen, TrendingUp } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from "recharts";
import { NAV_LINKS, SKILL_CATEGORIES, PROJECTS, ML_JOURNEY, DSA_ALGO_TAGS, DSA_DS_TAGS, DSA_BAR_DATA, CERTS, EXPERIENCE, ACHIEVEMENTS, TOP_LANGS, BLOGS, TESTIMONIALS, CONTRIBS, CONTRIB_COLORS, CONTRIB_COLORS_LIGHT, CODE_LINES } from "../../../data/portfolio-data.js";
import { Reveal, SectionHeader, GradientText, Card } from "../common/PortfolioCommon.jsx";

export function Header({isDark, setIsDark, menuOpen, setMenuOpen, scrolled, scrollTo}) {
  return (
    <header
  className={`
    fixed
    top-0
    left-0
    right-0
    z-50
    transition-all
    duration-300
    ${
      scrolled
        ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50 shadow-sm"
        : ""
    }
  `}
>
  <nav
    className="
      max-w-6xl
      mx-auto
      px-6
      h-16
      flex
      items-center
      justify-between
    "
  >

    {/* =========================
        LOGO
    ========================== */}

    <button
      onClick={() => scrollTo("#hero")}
      className="text-xl font-bold cursor-pointer"
      style={{
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <GradientText>
        &lt;Vikas /&gt;
      </GradientText>
    </button>

    {/* =========================
        DESKTOP NAVIGATION
    ========================== */}

    <div className="hidden lg:flex items-center gap-1">
      {NAV_LINKS.map((link) => (
        <button
          key={link.label}
          onClick={() => scrollTo(link.href)}
          className="
            px-3
            py-1.5
            text-sm
            text-slate-600
            dark:text-slate-300
            hover:text-blue-600
            dark:hover:text-blue-400
            hover:bg-blue-50
            dark:hover:bg-blue-900/30
            rounded-lg
            transition-colors
            cursor-pointer
          "
        >
          {link.label}
        </button>
      ))}
    </div>

    {/* =========================
        RIGHT SIDE ACTIONS
    ========================== */}

    <div className="flex items-center gap-3">

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setIsDark(!isDark)}
        className="
          p-2
          rounded-xl
          bg-slate-100
          dark:bg-slate-800
          text-slate-600
          dark:text-slate-300
          hover:bg-slate-200
          dark:hover:bg-slate-700
          transition-colors
          cursor-pointer
        "
        aria-label="Toggle dark mode"
      >
        {isDark ? (
          <Sun className="w-4 h-4" />
        ) : (
          <Moon className="w-4 h-4" />
        )}
      </button>

      {/* Hire Me */}
      <button
        onClick={() => scrollTo("#contact")}
        className="
          hidden
          sm:flex
          items-center
          gap-1.5
          px-4
          py-2
          bg-gradient-to-r
          from-blue-600
          to-violet-600
          text-white
          text-sm
          rounded-xl
          hover:shadow-lg
          hover:shadow-blue-500/25
          transition-all
          cursor-pointer
        "
      >
        <Mail className="w-3.5 h-3.5" />

        Hire Me
      </button>

      {/* Mobile Menu Button */}
      <button
        className="
          lg:hidden
          p-2
          rounded-xl
          bg-slate-100
          dark:bg-slate-800
          cursor-pointer
        "
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? (
          <X className="w-5 h-5" />
        ) : (
          <Menu className="w-5 h-5" />
        )}
      </button>

    </div>

  </nav>

  {/* =========================
      MOBILE NAVIGATION
  ========================== */}

  {menuOpen && (
    <div
      className="
        lg:hidden
        bg-white
        dark:bg-slate-900
        border-b
        border-slate-200
        dark:border-slate-700
        px-6
        py-4
        grid
        grid-cols-3
        gap-2
      "
    >
      {NAV_LINKS.map((link) => (
        <button
          key={link.label}
          onClick={() => scrollTo(link.href)}
          className="
            py-2
            text-sm
            text-slate-700
            dark:text-slate-300
            hover:text-blue-600
            rounded-lg
            text-center
            cursor-pointer
          "
        >
          {link.label}
        </button>
      ))}
    </div>
  )}

</header>
  );
}
