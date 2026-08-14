import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Github, Linkedin, Mail, Menu, X, Sun, Moon, ExternalLink, Download, Award, Code2, Cpu, Database, Phone, MapPin, Send, ArrowUp, Brain, CheckCircle2, Star, Zap, BarChart3, Layers, BookOpen, TrendingUp } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from "recharts";
import { NAV_LINKS, SKILL_CATEGORIES, PROJECTS, ML_JOURNEY, DSA_ALGO_TAGS, DSA_DS_TAGS, DSA_BAR_DATA, CERTS, EXPERIENCE, ACHIEVEMENTS, TOP_LANGS, BLOGS, TESTIMONIALS, CONTRIBS, CONTRIB_COLORS, CONTRIB_COLORS_LIGHT, CODE_LINES } from "../../../data/portfolio-data.js";
import { Reveal, SectionHeader, GradientText, Card } from "../common/PortfolioCommon.jsx";

export function Projects() {
  return (
    <section
  id="projects"
  className="py-24 bg-white dark:bg-slate-900"
>
  <div className="max-w-6xl mx-auto px-6">

    {/* Section Header */}
    <Reveal>
      <SectionHeader
        badge="Portfolio"
        title="Featured Projects"
        subtitle="Real-world ML and full-stack projects built to solve meaningful problems."
      />
    </Reveal>

    {/* Projects Grid */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {PROJECTS.map((project, index) => (
        <Reveal
          key={project.title}
          delay={index * 70}
        >
          <div
            className="
              group
              bg-white
              dark:bg-slate-800
              border
              border-slate-100
              dark:border-slate-700
              rounded-2xl
              overflow-hidden
              hover:shadow-xl
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >

            {/* =========================
                PROJECT IMAGE
            ========================== */}

            <div
              className="
                relative
                h-44
                overflow-hidden
                bg-slate-100
                dark:bg-slate-700
              "
            >

              <img
                src={`https://images.unsplash.com/${project.image}?w=500&h=220&fit=crop&auto=format`}
                alt={project.title}
                className="
                  w-full
                  h-full
                  object-cover
                  group-hover:scale-105
                  transition-transform
                  duration-500
                "
              />

              {/* Image Gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(
                    to top,
                    ${project.accent}aa,
                    transparent
                  )`,
                }}
              />

              {/* Featured Badge */}
              {project.featured && (
                <div
                  className="
                    absolute
                    top-3
                    right-3
                    px-2
                    py-1
                    bg-yellow-400
                    text-yellow-900
                    text-xs
                    font-bold
                    rounded-lg
                    flex
                    items-center
                    gap-1
                  "
                >
                  <Star className="w-3 h-3" />

                  Featured
                </div>
              )}

            </div>

            {/* =========================
                PROJECT CONTENT
            ========================== */}

            <div className="p-5">

              {/* Project Title */}
              <h3
                className="
                  font-bold
                  text-slate-900
                  dark:text-white
                  mb-2
                  leading-snug
                "
                style={{
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                {project.title}
              </h3>

              {/* Project Description */}
              <p
                className="
                  text-sm
                  text-slate-500
                  dark:text-slate-400
                  mb-4
                  leading-relaxed
                  line-clamp-3
                "
              >
                {project.desc}
              </p>

              {/* =========================
                  TECHNOLOGIES
              ========================== */}

              <div
                className="
                  flex
                  flex-wrap
                  gap-1.5
                  mb-4
                "
              >
                {project.tech.map((technology) => (
                  <span
                    key={technology}
                    className="
                      px-2
                      py-0.5
                      bg-slate-100
                      dark:bg-slate-700
                      text-slate-600
                      dark:text-slate-300
                      rounded-md
                      text-xs
                    "
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* =========================
                  PROJECT BUTTONS
              ========================== */}

              <div className="flex gap-2">

                {/* GitHub / Code */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex-1
                    flex
                    items-center
                    justify-center
                    gap-1.5
                    py-2
                    border
                    border-slate-200
                    dark:border-slate-600
                    text-slate-700
                    dark:text-slate-300
                    rounded-xl
                    text-xs
                    font-medium
                    hover:border-blue-400
                    transition-colors
                  "
                >
                  <Github className="w-3.5 h-3.5" />

                  Code
                </a>

                {/* Live Demo */}
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex-1
                    flex
                    items-center
                    justify-center
                    gap-1.5
                    py-2
                    bg-gradient-to-r
                    from-blue-600
                    to-violet-600
                    text-white
                    rounded-xl
                    text-xs
                    font-medium
                    hover:shadow-md
                    transition-all
                  "
                >
                  <ExternalLink className="w-3.5 h-3.5" />

                  Live
                </a>

              </div>

            </div>

          </div>
        </Reveal>
      ))}

    </div>

  </div>
</section>
  );
}
