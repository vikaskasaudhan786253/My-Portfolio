import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Github, Linkedin, Mail, Menu, X, Sun, Moon, ExternalLink, Download, Award, Code2, Cpu, Database, Phone, MapPin, Send, ArrowUp, Brain, CheckCircle2, Star, Zap, BarChart3, Layers, BookOpen, TrendingUp } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from "recharts";
import { NAV_LINKS, SKILL_CATEGORIES, PROJECTS, ML_JOURNEY, DSA_ALGO_TAGS, DSA_DS_TAGS, DSA_BAR_DATA, CERTS, EXPERIENCE, ACHIEVEMENTS, TOP_LANGS, BLOGS, TESTIMONIALS, CONTRIBS, CONTRIB_COLORS, CONTRIB_COLORS_LIGHT, CODE_LINES } from "../../../data/portfolio-data.js";
import { Reveal, SectionHeader, GradientText, Card } from "../common/PortfolioCommon.jsx";

export function Journey() {
  return (
    <section
  id="journey"
  className="
    py-24

    bg-gradient-to-br
    from-slate-50
    via-white
    to-slate-100

    dark:from-[#0f172a]
    dark:via-[#1e1b4b]
    dark:to-[#0f172a]

    relative
    overflow-hidden
  "
>
  {/* =========================
      BACKGROUND GLOW
  ========================== */}

  <div
    className="
      absolute
      inset-0

      bg-[radial-gradient(ellipse_at_center,#3b82f610_0%,transparent_70%)]

      dark:bg-[radial-gradient(ellipse_at_center,#3b82f620_0%,transparent_70%)]
    "
  />

  <div className="relative max-w-6xl mx-auto px-6">

    {/* =========================
        SECTION HEADER
    ========================== */}

    <Reveal>
      <SectionHeader
        badge="Roadmap"
        title="My ML Journey"
        subtitle="From programming fundamentals to machine learning, deep learning, and generative AI."
      />
    </Reveal>

    {/* =========================
        JOURNEY TIMELINE
    ========================== */}

    <div
      className="
        overflow-x-auto
        pb-6
        scrollbar-thin
        scrollbar-thumb-slate-400
        dark:scrollbar-thumb-slate-500
      "
    >
      <div className="flex items-center gap-0 min-w-max mx-auto">

        {ML_JOURNEY.map((step, index) => (
          <div
            key={step.title}
            className="flex items-center"
          >

            {/* =========================
                JOURNEY STEP
            ========================== */}

            <Reveal delay={index * 100}>
              <div className="flex flex-col items-center w-32">

                {/* =========================
                    ICON
                ========================== */}

                <div
                  className={`
                    w-14
                    h-14
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    text-2xl
                    mb-3
                    shadow-lg
                    transition-all

                    ${
                      step.done
                        ? `
                          bg-gradient-to-br
                          from-blue-500
                          to-violet-600
                          shadow-blue-500/30
                        `
                        : step.active
                        ? `
                          bg-gradient-to-br
                          from-amber-400
                          to-orange-500
                          shadow-amber-500/30
                          animate-pulse
                        `
                        : `
                          bg-slate-200
                          border
                          border-slate-300

                          dark:bg-slate-700/60
                          dark:border-slate-600
                        `
                    }
                  `}
                >
                  {step.icon}
                </div>

                {/* =========================
                    TITLE
                ========================== */}

                <span
                  className="
                    text-xs
                    font-bold
                    text-slate-900
                    dark:text-white
                    text-center
                    leading-tight
                  "
                >
                  {step.title}
                </span>

                {/* =========================
                    DESCRIPTION
                ========================== */}

                <span
                  className="
                    text-xs
                    text-slate-500
                    dark:text-slate-400
                    text-center
                    mt-0.5
                  "
                >
                  {step.sub}
                </span>

                {/* =========================
                    STATUS
                ========================== */}

                <span
                  className={`
                    text-xs
                    mt-1.5
                    px-2
                    py-0.5
                    rounded-full

                    ${
                      step.done
                        ? `
                          bg-green-100
                          text-green-700

                          dark:bg-green-500/20
                          dark:text-green-400
                        `
                        : step.active
                        ? `
                          bg-amber-100
                          text-amber-700

                          dark:bg-amber-500/20
                          dark:text-amber-400
                        `
                        : `
                          bg-slate-200
                          text-slate-500

                          dark:bg-slate-700/50
                          dark:text-slate-500
                        `
                    }
                  `}
                >
                  {step.done
                    ? "✓ Done"
                    : step.active
                    ? "In Progress"
                    : step.year}
                </span>

              </div>
            </Reveal>

            {/* =========================
                CONNECTOR
            ========================== */}

            {index < ML_JOURNEY.length - 1 && (
              <div
                className={`
                  w-12
                  h-0.5
                  mx-1

                  ${
                    step.done
                      ? `
                        bg-gradient-to-r
                        from-blue-500
                        to-violet-500
                      `
                      : `
                        bg-slate-300
                        dark:bg-slate-700
                      `
                  }
                `}
              />
            )}

          </div>
        ))}

      </div>
    </div>

  </div>
</section>
  );
}
