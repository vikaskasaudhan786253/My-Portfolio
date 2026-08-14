import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Github, Linkedin, Mail, Menu, X, Sun, Moon, ExternalLink, Download, Award, Code2, Cpu, Database, Phone, MapPin, Send, ArrowUp, Brain, CheckCircle2, Star, Zap, BarChart3, Layers, BookOpen, TrendingUp } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from "recharts";
import { NAV_LINKS, SKILL_CATEGORIES, PROJECTS, ML_JOURNEY, DSA_ALGO_TAGS, DSA_DS_TAGS, DSA_BAR_DATA, CERTS, EXPERIENCE, ACHIEVEMENTS, TOP_LANGS, BLOGS, TESTIMONIALS, CONTRIBS, CONTRIB_COLORS, CONTRIB_COLORS_LIGHT, CODE_LINES } from "../../../data/portfolio-data.js";
import { Reveal, SectionHeader, GradientText, Card } from "../common/PortfolioCommon.jsx";

export function Skills({activeSkillTab, setActiveSkillTab, skillsAnimate, skillsRef}) {
  return (
    <section
  id="skills"
  className="py-24 bg-slate-50 dark:bg-[#0a0f1e]"
>
  <div className="max-w-6xl mx-auto px-6">

    {/* Section Header */}
    <Reveal>
      <SectionHeader
        badge="Technical Stack"
        title="Technical Skills"
        subtitle="A practical overview of the technologies and tools I use to build AI/ML solutions and software applications."
      />
    </Reveal>

    {/* Skill Category Tabs */}
    <div className="flex flex-wrap justify-center gap-2 mb-10">
      {Object.keys(SKILL_CATEGORIES).map((category) => (
        <button
          key={category}
          onClick={() => {
            setActiveSkillTab(category);

            setSkillsAnimate(false);

            setTimeout(() => {
              setSkillsAnimate(true);
            }, 50);
          }}
          className={`
            px-5 py-2
            rounded-full
            text-sm
            font-medium
            transition-all

            ${
              activeSkillTab === category
                ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-500/25"
                : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-blue-400"
            }
          `}
        >
          {category}
        </button>
      ))}
    </div>

    {/* Skills List */}
    <div
      ref={skillsRef}
      className="max-w-2xl mx-auto space-y-5"
    >
      {SKILL_CATEGORIES[activeSkillTab].map((skill, index) => (
        <Reveal
          key={skill.name}
          delay={index * 60}
        >
          <div>

            {/* Skill Name + Percentage */}
            <div className="flex items-center justify-between mb-2">

              {/* Skill Name */}
              <div className="flex items-center gap-2">

                <span
                  className="
                    text-sm
                    font-semibold
                    text-slate-800
                    dark:text-slate-200
                  "
                >
                  {skill.name}
                </span>

                {/* Optional Skill Tag */}
                {skill.tag && (
                  <span
                    className="
                      text-xs
                      px-2
                      py-0.5
                      bg-amber-100
                      dark:bg-amber-900/30
                      text-amber-700
                      dark:text-amber-400
                      rounded-full
                    "
                  >
                    {skill.tag}
                  </span>
                )}

              </div>

              {/* Skill Level */}
              <span
                className="
                  text-sm
                  font-bold
                  text-blue-600
                  dark:text-blue-400
                "
              >
                {skill.level}%
              </span>

            </div>

            {/* Progress Bar */}
            <div
              className="
                h-2.5
                bg-slate-200
                dark:bg-slate-700
                rounded-full
                overflow-hidden
              "
            >
              <div
                className="
                  h-full
                  bg-gradient-to-r
                  from-blue-500
                  to-violet-500
                  rounded-full
                  transition-all
                  duration-1000
                  ease-out
                "
                style={{
                  width: skillsAnimate
                    ? `${skill.level}%`
                    : "0%",
                }}
              />
            </div>

          </div>
        </Reveal>
      ))}
    </div>

  </div>
</section>
  );
}
