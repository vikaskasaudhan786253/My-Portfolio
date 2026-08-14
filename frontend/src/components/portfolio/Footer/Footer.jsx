import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Github, Linkedin, Mail, Menu, X, Sun, Moon, ExternalLink, Download, Award, Code2, Cpu, Database, Phone, MapPin, Send, ArrowUp, Brain, CheckCircle2, Star, Zap, BarChart3, Layers, BookOpen, TrendingUp } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from "recharts";
import { NAV_LINKS, SKILL_CATEGORIES, PROJECTS, ML_JOURNEY, DSA_ALGO_TAGS, DSA_DS_TAGS, DSA_BAR_DATA, CERTS, EXPERIENCE, ACHIEVEMENTS, TOP_LANGS, BLOGS, TESTIMONIALS, CONTRIBS, CONTRIB_COLORS, CONTRIB_COLORS_LIGHT, CODE_LINES } from "../../../data/portfolio-data.js";
import { Reveal, SectionHeader, GradientText, Card } from "../common/PortfolioCommon.jsx";

export function Footer({scrollTo}) {
  return (
    <footer
  className="
    py-12

    bg-slate-50
    dark:bg-[#060d1f]

    border-t
    border-slate-200
    dark:border-white/5
  "
>
  <div className="max-w-6xl mx-auto px-6">

    {/* =========================
        FOOTER MAIN CONTENT
    ========================== */}

    <div
      className="
        grid
        sm:grid-cols-3
        gap-8
        mb-8
      "
    >

      {/* =========================
          BRAND / ABOUT
      ========================== */}

      <div>

        <div
          className="
            text-xl
            font-bold
            mb-3
          "
          style={{
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="
              text-xl
              font-bold
              cursor-pointer
            "
            style={{
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            <GradientText>
              &lt;Vikas /&gt;
            </GradientText>
          </button>
        </div>

        <p
          className="
            text-slate-600
            dark:text-slate-500
            text-sm
            leading-relaxed
          "
        >
          CSE student building practical AI/ML solutions with
          Machine Learning, Data Science, Deep Learning, and
          Generative AI.
        </p>

      </div>

      {/* =========================
          QUICK LINKS
      ========================== */}

      <div>

        <h5
          className="
            text-slate-800
            dark:text-slate-300
            font-semibold
            text-sm
            mb-3
          "
        >
          Quick Links
        </h5>

        <div className="grid grid-cols-2 gap-2">

          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="
                text-slate-600
                dark:text-slate-500

                hover:text-blue-600
                dark:hover:text-slate-300

                text-sm
                text-left
                transition-colors
                cursor-pointer
              "
            >
              {link.label}
            </button>
          ))}

        </div>

      </div>

      {/* =========================
          SOCIAL / CONNECT
      ========================== */}

      <div>

        <h5
          className="
            text-slate-800
            dark:text-slate-300
            font-semibold
            text-sm
            mb-3
          "
        >
          Connect
        </h5>

        <div className="flex flex-wrap gap-3">

          {/* GitHub */}
          <a
            href="https://github.com/vikaskasaudhan786253"
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-xs
              px-3
              py-1.5

              bg-slate-100
              dark:bg-white/5

              hover:bg-slate-200
              dark:hover:bg-white/10

              border
              border-slate-200
              dark:border-white/10

              text-slate-600
              dark:text-slate-400

              hover:text-blue-600
              dark:hover:text-white

              rounded-lg
              transition-colors
            "
          >
            GitHub
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/vikas-kasaudhan-55b706326/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-xs
              px-3
              py-1.5

              bg-slate-100
              dark:bg-white/5

              hover:bg-slate-200
              dark:hover:bg-white/10

              border
              border-slate-200
              dark:border-white/10

              text-slate-600
              dark:text-slate-400

              hover:text-blue-600
              dark:hover:text-white

              rounded-lg
              transition-colors
            "
          >
            LinkedIn
          </a>

          {/* LeetCode */}
          <a
            href="https://leetcode.com/u/Vikaskasaudhan/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-xs
              px-3
              py-1.5

              bg-slate-100
              dark:bg-white/5

              hover:bg-slate-200
              dark:hover:bg-white/10

              border
              border-slate-200
              dark:border-white/10

              text-slate-600
              dark:text-slate-400

              hover:text-blue-600
              dark:hover:text-white

              rounded-lg
              transition-colors
            "
          >
            LeetCode
          </a>

          {/* Kaggle */}
          <a
            href="https://www.kaggle.com/vikaskasaudhan"
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-xs
              px-3
              py-1.5

              bg-slate-100
              dark:bg-white/5

              hover:bg-slate-200
              dark:hover:bg-white/10

              border
              border-slate-200
              dark:border-white/10

              text-slate-600
              dark:text-slate-400

              hover:text-blue-600
              dark:hover:text-white

              rounded-lg
              transition-colors
            "
          >
            Kaggle
          </a>

          {/* Email */}
          <a
            href="mailto:vikaskasaudhan542@gmail.com"
            className="
              text-xs
              px-3
              py-1.5

              bg-slate-100
              dark:bg-white/5

              hover:bg-slate-200
              dark:hover:bg-white/10

              border
              border-slate-200
              dark:border-white/10

              text-slate-600
              dark:text-slate-400

              hover:text-blue-600
              dark:hover:text-white

              rounded-lg
              transition-colors
            "
          >
            Email
          </a>

        </div>

      </div>

    </div>

    {/* =========================
        COPYRIGHT + BACK TO TOP
    ========================== */}

    <div
      className="
        border-t
        border-slate-200
        dark:border-white/5

        pt-6

        flex
        flex-col
        sm:flex-row
        items-center
        justify-between
        gap-4
      "
    >

      {/* Copyright */}

      <p
        className="
          text-slate-500
          dark:text-slate-600
          text-sm
        "
      >
        © 2026 Vikas Kasaudhan. Crafted with ❤️ and lots of Python.
      </p>

      {/* Back To Top */}

      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="
          flex
          items-center
          gap-2

          px-4
          py-2

          bg-slate-100
          dark:bg-white/5

          hover:bg-slate-200
          dark:hover:bg-white/10

          border
          border-slate-200
          dark:border-white/10

          text-slate-600
          dark:text-slate-400

          hover:text-blue-600
          dark:hover:text-white

          rounded-xl
          text-sm

          transition-all
          cursor-pointer
        "
      >
        <ArrowUp className="w-4 h-4" />

        Back to Top
      </button>

    </div>

  </div>
</footer>
  );
}
