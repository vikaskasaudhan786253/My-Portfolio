import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Github, Linkedin, Mail, Menu, X, Sun, Moon, ExternalLink, Download, Award, Code2, Cpu, Database, Phone, MapPin, Send, ArrowUp, Brain, CheckCircle2, Star, Zap, BarChart3, Layers, BookOpen, TrendingUp } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from "recharts";
import { NAV_LINKS, SKILL_CATEGORIES, PROJECTS, ML_JOURNEY, DSA_ALGO_TAGS, DSA_DS_TAGS, DSA_BAR_DATA, CERTS, EXPERIENCE, ACHIEVEMENTS, TOP_LANGS, BLOGS, TESTIMONIALS, CONTRIBS, CONTRIB_COLORS, CONTRIB_COLORS_LIGHT, CODE_LINES } from "../../../data/portfolio-data.js";
import { Reveal, SectionHeader, GradientText, Card } from "../common/PortfolioCommon.jsx";

import vikasPhoto from "./vikas.jpg";
import Vikas_Resume from "./Vikas_Kasaudhan_Resume.pdf";

export function Hero({scrollTo}) {
  return (
    <section
  id="hero"
  className="
    relative
    min-h-screen
    flex
    items-center
    overflow-hidden
    pt-16
  "
>
  {/* =====================================================
      HERO BACKGROUND
  ====================================================== */}

  <div
    className="
      absolute
      inset-0

      bg-gradient-to-br
      from-slate-50
      via-blue-50/30
      to-violet-50/30

      dark:from-[#0a0f1e]
      dark:via-[#0d1535]
      dark:to-[#0a0f1e]
    "
  />

  {/* Blue Glow */}

  <div
    className="
      absolute
      top-20
      right-0
      w-[500px]
      h-[500px]

      bg-blue-400/10
      dark:bg-blue-500/5

      rounded-full
      blur-3xl
    "
  />

  {/* Violet Glow */}

  <div
    className="
      absolute
      bottom-20
      left-0
      w-[400px]
      h-[400px]

      bg-violet-400/10
      dark:bg-violet-500/5

      rounded-full
      blur-3xl
    "
  />


  {/* =====================================================
      HERO CONTAINER
  ====================================================== */}

  <div
    className="
      relative
      max-w-6xl
      mx-auto
      px-6
      py-20

      grid
      lg:grid-cols-2

      gap-12
      items-center
    "
  >

    {/* ===================================================
        LEFT SIDE
    ==================================================== */}

    <div className="space-y-6">

      {/* =================================================
          AVAILABILITY BADGE
      ================================================== */}

      <div
        className="
          inline-flex
          items-center
          gap-2

          px-4
          py-2

          bg-blue-50
          dark:bg-blue-900/30

          border
          border-blue-200
          dark:border-blue-800

          rounded-full

          text-sm
          text-blue-700
          dark:text-blue-400
        "
      >
        <span
          className="
            w-2
            h-2
            bg-green-500
            rounded-full
            animate-pulse
          "
        />

        Available for Internships & Projects
      </div>


     {/* =========================
    PROFILE INTRO
========================= */}

<div className="flex items-center gap-4">

  {/* VK Logo */}

  <div className="relative">

    <div
      className="
        w-20
        h-20
        rounded-2xl

        bg-gradient-to-br
        from-blue-500
        via-violet-500
        to-purple-600

        flex
        items-center
        justify-center

        text-white
        text-2xl
        font-bold

        shadow-xl
        shadow-blue-500/30
      "
      style={{
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      VK
    </div>

    {/* Green Status */}

    <div
      className="
        absolute
        -bottom-1
        -right-1

        w-6
        h-6

        bg-green-500
        rounded-full

        border-2
        border-white
        dark:border-slate-900

        flex
        items-center
        justify-center
      "
    >
      <span className="text-xs text-white">
        ✓
      </span>
    </div>

  </div>


  {/* Name — RIGHT OF VK */}

  <div>
    <p
      className="
        text-sm
        text-slate-500
        dark:text-slate-400
      "
    >
      Hello, I'm
    </p>

    <p
      className="
        text-lg
        font-semibold
        text-slate-900
        dark:text-white
      "
    >
      Vikas Kasaudhan
    </p>
  </div>

</div>


      {/* =================================================
          MAIN HEADING
      ================================================== */}

      <h1
        className="
          text-4xl
          sm:text-5xl
          lg:text-6xl

          font-black

          leading-[1.1]
        "
        style={{
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        Building

        <br />

        <GradientText>
          Intelligent
        </GradientText>

        <br />

        Systems
      </h1>


      {/* =================================================
          DESCRIPTION
      ================================================== */}

      <p
        className="
          text-base

          text-slate-500
          dark:text-slate-400

          leading-relaxed

          max-w-md
        "
      >
        B.Tech CSE student exploring{" "}

        <strong
          className="
            text-slate-700
            dark:text-slate-200
          "
        >
          Machine Learning
        </strong>
        ,{" "}

        <strong
          className="
            text-slate-700
            dark:text-slate-200
          "
        >
          Data Science
        </strong>
        , and{" "}

        <strong
          className="
            text-slate-700
            dark:text-slate-200
          "
        >
          DSA in C++
        </strong>
        .

        Currently exploring the frontiers of{" "}

        <strong
          className="
            text-slate-700
            dark:text-slate-200
          "
        >
          Deep Learning
        </strong>{" "}

        and{" "}

        <strong
          className="
            text-slate-700
            dark:text-slate-200
          "
        >
          Generative AI
        </strong>
        .
      </p>


      {/* =================================================
          ROLE LINE
      ================================================== */}

      <p
  className="
    text-sm
    text-slate-500
    dark:text-slate-400

    font-medium
    leading-relaxed

    flex
    flex-wrap
    items-center
    gap-x-2
    gap-y-1
  "
>
  <span>Machine Learning</span>
  <span className="text-blue-400">•</span>

  <span>Data Science</span>
  <span className="text-violet-400">•</span>

  <span>C++ / DSA</span>
  <span className="text-blue-400">•</span>

  <span>Deep Learning</span>
  <span className="text-violet-400">•</span>

  <span>Generative AI</span>
</p>


      {/* =================================================
          ACTION BUTTONS
      ================================================== */}

      <div className="flex flex-wrap gap-3">

        {/* Download Resume */}

        <a
          href={Vikas_Resume}
          download
          className="
            inline-flex
            items-center
            gap-2

            px-6
            py-3

            bg-gradient-to-r
            from-blue-600
            to-violet-600

            text-white

            rounded-xl

            font-medium

            hover:shadow-xl
            hover:shadow-blue-500/30

            hover:-translate-y-0.5

            transition-all
          "
        >
          <Download className="w-4 h-4" />

          Download Resume
        </a>


        {/* Contact */}

        <button
          onClick={() => scrollTo("#contact")}
          className="
            inline-flex
            items-center
            gap-2

            px-6
            py-3

            bg-white
            dark:bg-slate-800

            border
            border-slate-200
            dark:border-slate-700

            text-slate-700
            dark:text-slate-200

            rounded-xl

            font-medium

            hover:border-blue-400
            hover:shadow-md

            transition-all

            cursor-pointer
          "
        >
          <Mail className="w-4 h-4" />

          Contact Me
        </button>

      </div>


      {/* =================================================
          SOCIAL LINKS
      ================================================== */}

      <div className="flex items-center gap-4 pt-2">

        {/* GitHub */}

        <a
          href="https://github.com/vikaskasaudhan786253"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
          className="
            p-2.5

            rounded-xl

            bg-white
            dark:bg-slate-800

            border
            border-slate-200
            dark:border-slate-700

            text-slate-500
            dark:text-slate-400

            hover:text-blue-600
            dark:hover:text-blue-400

            hover:border-blue-300
            hover:shadow-md

            transition-all
          "
        >
          <Github className="w-5 h-5" />
        </a>


        {/* LinkedIn */}

        <a
          href="https://www.linkedin.com/in/vikas-kasaudhan-55b706326/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          className="
            p-2.5

            rounded-xl

            bg-white
            dark:bg-slate-800

            border
            border-slate-200
            dark:border-slate-700

            text-slate-500
            dark:text-slate-400

            hover:text-blue-600
            dark:hover:text-blue-400

            hover:border-blue-300
            hover:shadow-md

            transition-all
          "
        >
          <Linkedin className="w-5 h-5" />
        </a>


        {/* Email */}

        <a
          href="mailto:vikaskasaudhan542@gmail.com"
          title="Email"
          className="
            p-2.5

            rounded-xl

            bg-white
            dark:bg-slate-800

            border
            border-slate-200
            dark:border-slate-700

            text-slate-500
            dark:text-slate-400

            hover:text-blue-600
            dark:hover:text-blue-400

            hover:border-blue-300
            hover:shadow-md

            transition-all
          "
        >
          <Mail className="w-5 h-5" />
        </a>


        {/* LeetCode */}

        <a
          href="https://leetcode.com/u/Vikaskasaudhan/"
          target="_blank"
          rel="noopener noreferrer"
          title="LeetCode"
          className="
            p-2.5

            rounded-xl

            bg-white
            dark:bg-slate-800

            border
            border-slate-200
            dark:border-slate-700

            text-slate-500
            dark:text-slate-400

            hover:text-blue-600
            dark:hover:text-blue-400

            hover:border-blue-300
            hover:shadow-md

            transition-all
          "
        >
          <Code2 className="w-5 h-5" />
        </a>


        {/* Kaggle */}

        <a
          href="https://www.kaggle.com/vikaskasaudhan"
          target="_blank"
          rel="noopener noreferrer"
          title="Kaggle"
          className="
            p-2.5

            rounded-xl

            bg-white
            dark:bg-slate-800

            border
            border-slate-200
            dark:border-slate-700

            text-slate-500
            dark:text-slate-400

            hover:text-blue-600
            dark:hover:text-blue-400

            hover:border-blue-300
            hover:shadow-md

            transition-all
          "
        >
          <BarChart3 className="w-5 h-5" />
        </a>

      </div>

    </div>


    {/* ===================================================
        RIGHT SIDE
        PHOTO + CODE WINDOW
    ==================================================== */}

    <div
      className="
        hidden
        lg:block
        relative

        pt-8
      "
    >

      {/* =================================================
          PROFILE PHOTO
      ================================================== */}

      <div
        className="
          flex
          justify-center

          mb-6

          relative
          z-20
          -translate-y-[25px]
        "
      >

        <div className="relative">

          <img
            src={vikasPhoto}
            alt="Vikas Kasaudhan"
            className="
              w-120
              h-120

              rounded-2xl

              object-cover

              border-4
              border-white
              dark:border-slate-800

              shadow-2xl
              shadow-blue-500/20

              hover:scale-105

              transition-transform
              duration-300
            "
          />


          {/* Photo Status Badge */}

          <div
            className="
              absolute
              -bottom-2
              -right-2

              w-8
              h-8

              bg-green-500

              rounded-full

              border-4
              border-white
              dark:border-slate-900

              flex
              items-center
              justify-center

              shadow-lg
            "
          >
            <span className="text-white text-xs font-bold">
              ✓
            </span>
          </div>
        </div>
      </div>
      {/* =================================================
    EDUCATION QUICK INFO
================================================== */}

<div
  className="
    mt-7
    flex
    justify-center
    -translate-y-[20px]
  "
>
  <div
    className="
      w-122

      flex
      items-center
      justify-center

      gap-8

      px-8
      py-4

      bg-white/90
      dark:bg-slate-800/90

      backdrop-blur-md

      border
      border-slate-200
      dark:border-slate-700

      rounded-2xl

      shadow-lg
      shadow-slate-900/10
      dark:shadow-black/25

      hover:-translate-y-1
      hover:shadow-xl
      hover:shadow-blue-500/10

      transition-all
      duration-300
    "
  >

    {/* =========================
        DEGREE
    ========================== */}

    <div className="text-center flex-1">

      <p
        className="
          text-base
          font-bold
          text-slate-900
          dark:text-white
          tracking-tight
        "
      >
        B.Tech CSE
      </p>

      <p
        className="
          text-sm
          font-medium
          text-slate-500
          dark:text-slate-400
          mt-1
        "
      >
        NIT Durgapur
      </p>

    </div>


    {/* =========================
        DIVIDER
    ========================== */}

    <div
      className="
        w-px
        h-10
        bg-slate-200
        dark:bg-slate-700
        flex-shrink-0
      "
    />


    {/* =========================
        DURATION
    ========================== */}

    <div className="text-center flex-1">

      <p
        className="
          text-base
          font-bold
          text-blue-600
          dark:text-blue-400
          tracking-tight
        "
      >
        2024 – 2028
      </p>

      <p
        className="
          text-sm
          font-medium
          text-slate-500
          dark:text-slate-400
          mt-1
        "
      >
        Undergraduate
      </p>

    </div>

  </div>
</div>
    </div>
  </div>
</section>
  );
}
