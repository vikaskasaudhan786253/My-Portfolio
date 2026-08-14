import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Github, Linkedin, Mail, Menu, X, Sun, Moon, ExternalLink, Download, Award, Code2, Cpu, Database, Phone, MapPin, Send, ArrowUp, Brain, CheckCircle2, Star, Zap, BarChart3, Layers, BookOpen, TrendingUp } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from "recharts";
import { NAV_LINKS, SKILL_CATEGORIES, PROJECTS, ML_JOURNEY, DSA_ALGO_TAGS, DSA_DS_TAGS, DSA_BAR_DATA, CERTS, EXPERIENCE, ACHIEVEMENTS, TOP_LANGS, BLOGS, TESTIMONIALS, CONTRIBS, CONTRIB_COLORS, CONTRIB_COLORS_LIGHT, CODE_LINES } from "../../../data/portfolio-data.js";
import { Reveal, SectionHeader, GradientText, Card } from "../common/PortfolioCommon.jsx";

export function Certifications() {
  return (
    <section
  id="certifications"
  className="py-24 bg-white dark:bg-slate-900"
>
  <div className="max-w-6xl mx-auto px-6">

    {/* Section Header */}
    <Reveal>
      <SectionHeader
        badge="Credentials"
        title="Certifications"
        subtitle="Industry-recognized certificates from leading platforms and institutions."
      />
    </Reveal>

    {/* Certifications Grid */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

      {CERTS.map((certification, index) => (
        <Reveal
          key={certification.title}
          delay={index * 80}
        >
          <Card
            className="
              p-5
              flex
              gap-4
              hover:-translate-y-1
              transition-transform
            "
          >

            {/* Certification Icon */}
            <div className="text-3xl flex-shrink-0">
              {certification.icon}
            </div>

            {/* Certification Information */}
            <div>

              {/* Certificate Name */}
              <h4
                className="
                  font-bold
                  text-slate-900
                  dark:text-white
                  text-sm
                  leading-snug
                "
                style={{
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                {certification.title}
              </h4>

              {/* Organization */}
              <p
                className="
                  text-xs
                  text-slate-500
                  dark:text-slate-400
                  mt-1
                "
              >
                {certification.org}
              </p>

              {/* Year */}
              <span
                className="
                  inline-block
                  mt-2
                  text-xs
                  px-2
                  py-0.5
                  bg-green-50
                  dark:bg-green-900/30
                  text-green-700
                  dark:text-green-400
                  rounded-md
                "
              >
                ✓ {certification.year}
              </span>

            </div>

          </Card>
        </Reveal>
      ))}

    </div>

  </div>
</section>
  );
}
