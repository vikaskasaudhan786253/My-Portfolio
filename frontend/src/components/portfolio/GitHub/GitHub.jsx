import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Github, Linkedin, Mail, Menu, X, Sun, Moon, ExternalLink, Download, Award, Code2, Cpu, Database, Phone, MapPin, Send, ArrowUp, Brain, CheckCircle2, Star, Zap, BarChart3, Layers, BookOpen, TrendingUp } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from "recharts";
import { NAV_LINKS, SKILL_CATEGORIES, PROJECTS, ML_JOURNEY, DSA_ALGO_TAGS, DSA_DS_TAGS, DSA_BAR_DATA, CERTS, EXPERIENCE, ACHIEVEMENTS, TOP_LANGS, BLOGS, TESTIMONIALS, CONTRIBS, CONTRIB_COLORS, CONTRIB_COLORS_LIGHT, CODE_LINES } from "../../../data/portfolio-data.js";
import { Reveal, SectionHeader, GradientText, Card } from "../common/PortfolioCommon.jsx";

export function GitHub() {
  return (
    <section
  id="github"
  className="
    py-24

    bg-gradient-to-br
    from-slate-50
    via-white
    to-slate-100

    dark:from-[#0f172a]
    dark:via-[#0f1729]
    dark:to-[#12082a]

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

      bg-[radial-gradient(ellipse_at_top_right,#6366f110_0%,transparent_60%)]

      dark:bg-[radial-gradient(ellipse_at_top_right,#6366f120_0%,transparent_60%)]
    "
  />

  <div className="relative max-w-6xl mx-auto px-6">

    {/* =========================
        SECTION HEADER
    ========================== */}

    <Reveal>
      <SectionHeader
        badge="Open Source"
        title="GitHub Activity"
        subtitle="Consistent contributions, clean repositories, and active community involvement."
      />
    </Reveal>

    {/* =========================
        GITHUB STATISTICS
    ========================== */}

    <Reveal delay={100}>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">

        {[
          {
            label: "Repositories",
            value: "42",
            icon: <BookOpen className="w-4 h-4" />,
          },
          {
            label: "Total Stars",
            value: "128",
            icon: <Star className="w-4 h-4" />,
          },
          {
            label: "Contributions",
            value: "1,240",
            icon: <CheckCircle2 className="w-4 h-4" />,
          },
          {
            label: "Followers",
            value: "85",
            icon: <Award className="w-4 h-4" />,
          },
        ].map((stat) => (
          <div
            key={stat.label}
            className="
              bg-slate-100/80
              dark:bg-white/5

              backdrop-blur-sm

              border
              border-slate-200
              dark:border-white/10

              rounded-2xl
              p-5
              text-center
            "
          >
            {/* Icon */}
            <div
              className="
                flex
                justify-center
                text-blue-600
                dark:text-blue-400
                mb-2
              "
            >
              {stat.icon}
            </div>

            {/* Value */}
            <div
              className="
                text-2xl
                font-black
                text-slate-900
                dark:text-white
              "
              style={{
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              {stat.value}
            </div>

            {/* Label */}
            <div
              className="
                text-xs
                text-slate-500
                dark:text-slate-400
                mt-1
              "
            >
              {stat.label}
            </div>
          </div>
        ))}

      </div>
    </Reveal>

    {/* =========================
        GRAPH + LANGUAGES
    ========================== */}

    <div className="grid lg:grid-cols-3 gap-6">

      {/* =========================
          CONTRIBUTION GRAPH
      ========================== */}

      <Reveal
        className="lg:col-span-2"
        delay={150}
      >
        <div
          className="
            bg-slate-100/80
            dark:bg-white/5

            backdrop-blur-sm

            border
            border-slate-200
            dark:border-white/10

            rounded-2xl
            p-5
          "
        >

          <h4
            className="
              text-slate-900
              dark:text-white
              font-bold
              text-sm
              mb-4
            "
          >
            Contribution Graph — Last 52 Weeks
          </h4>

          {/* Contribution Grid */}
          <div className="flex gap-1 overflow-x-auto">

            {CONTRIBS.map((week, weekIndex) => (
              <div
                key={weekIndex}
                className="flex flex-col gap-1"
              >
                {week.map((day, dayIndex) => (
                  <div
                    key={dayIndex}
                    title={`${day} contributions`}
                    className="w-3 h-3 rounded-sm"
                    style={{
                      backgroundColor: CONTRIB_COLORS[day],
                    }}
                  />
                ))}
              </div>
            ))}

          </div>

          {/* Contribution Legend */}
          <div
            className="
              flex
              items-center
              gap-2
              mt-4
              text-xs
              text-slate-500
              dark:text-slate-400
            "
          >
            <span>Less</span>

            {CONTRIB_COLORS.map((color) => (
              <div
                key={color}
                className="w-3 h-3 rounded-sm"
                style={{
                  backgroundColor: color,
                }}
              />
            ))}

            <span>More</span>
          </div>

        </div>
      </Reveal>

      {/* =========================
          TOP LANGUAGES
      ========================== */}

      <Reveal delay={200}>
        <div
          className="
            bg-slate-100/80
            dark:bg-white/5

            backdrop-blur-sm

            border
            border-slate-200
            dark:border-white/10

            rounded-2xl
            p-5
          "
        >

          <h4
            className="
              text-slate-900
              dark:text-white
              font-bold
              text-sm
              mb-4
            "
          >
            Top Languages
          </h4>

          {/* Donut Chart */}
          <ResponsiveContainer
            width="100%"
            height={140}
          >
            <PieChart>

              <Pie
                data={TOP_LANGS}
                cx="50%"
                cy="50%"
                innerRadius={35}
                outerRadius={60}
                paddingAngle={3}
                dataKey="value"
              >
                {TOP_LANGS.map((language) => (
                  <Cell
                    key={language.name}
                    fill={language.color}
                  />
                ))}
              </Pie>

              <Tooltip
                contentStyle={{
                  background: "#1e293b",
                  border: "none",
                  borderRadius: "8px",
                  color: "#f1f5f9",
                  fontSize: 11,
                }}
              />

            </PieChart>
          </ResponsiveContainer>

          {/* Language List */}
          <div className="space-y-1.5 mt-2">

            {TOP_LANGS.map((language) => (
              <div
                key={language.name}
                className="
                  flex
                  items-center
                  justify-between
                  text-xs
                "
              >

                <div className="flex items-center gap-2">

                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{
                      backgroundColor: language.color,
                    }}
                  />

                  <span
                    className="
                      text-slate-700
                      dark:text-slate-300
                    "
                  >
                    {language.name}
                  </span>

                </div>

                <span
                  className="
                    text-slate-500
                    dark:text-slate-400
                  "
                >
                  {language.value}%
                </span>

              </div>
            ))}

          </div>

        </div>
      </Reveal>

    </div>

    {/* =========================
        FEATURED REPOSITORIES
    ========================== */}

    <Reveal delay={250}>
      <div
        className="
          grid
          sm:grid-cols-2
          lg:grid-cols-3
          gap-4
          mt-6
        "
      >

        {[
          {
            name: "heart-disease-ml",
            desc: "ML pipeline achieving 94.2% accuracy on clinical data",
            lang: "Python",
            stars: 34,
          },
          {
            name: "digital-debt-book",
            desc: "Full-stack debt management with Flask + React + MongoDB",
            lang: "JavaScript",
            stars: 28,
          },
          {
            name: "dsa-solutions-cpp",
            desc: "450+ DSA solutions in C++ with time/space analysis",
            lang: "C++",
            stars: 21,
          },
        ].map((repo) => (
          <a
            key={repo.name}
            href="#"
            className="
              bg-slate-100/80
              dark:bg-white/5

              hover:bg-slate-200/80
              dark:hover:bg-white/10

              border
              border-slate-200
              dark:border-white/10

              rounded-2xl
              p-4

              transition-all
              group
            "
          >

            {/* Repository Header */}
            <div
              className="
                flex
                items-start
                justify-between
                mb-2
              "
            >

              <BookOpen
                className="
                  w-4
                  h-4
                  text-blue-600
                  dark:text-blue-400
                  group-hover:text-blue-500
                  dark:group-hover:text-blue-300
                "
              />

              <div
                className="
                  flex
                  items-center
                  gap-1
                  text-slate-500
                  dark:text-slate-400
                  text-xs
                "
              >
                <Star className="w-3 h-3" />

                {repo.stars}
              </div>

            </div>

            {/* Repository Name */}
            <h5
              className="
                text-slate-900
                dark:text-white
                text-sm
                font-semibold
                mb-1
              "
            >
              {repo.name}
            </h5>

            {/* Repository Description */}
            <p
              className="
                text-slate-500
                dark:text-slate-400
                text-xs
                leading-relaxed
                mb-3
              "
            >
              {repo.desc}
            </p>

            {/* Language */}
            <span
              className="
                text-xs
                px-2
                py-0.5

                bg-blue-100
                dark:bg-blue-500/20

                text-blue-700
                dark:text-blue-300

                rounded-full
              "
            >
              {repo.lang}
            </span>

          </a>
        ))}

      </div>
    </Reveal>

  </div>
</section>
  );
}
