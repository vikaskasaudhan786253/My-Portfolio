import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Github, Linkedin, Mail, Menu, X, Sun, Moon, ExternalLink, Download, Award, Code2, Cpu, Database, Phone, MapPin, Send, ArrowUp, Brain, CheckCircle2, Star, Zap, BarChart3, Layers, BookOpen, TrendingUp } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from "recharts";
import { NAV_LINKS, SKILL_CATEGORIES, PROJECTS, ML_JOURNEY, DSA_ALGO_TAGS, DSA_DS_TAGS, DSA_BAR_DATA, CERTS, EXPERIENCE, ACHIEVEMENTS, TOP_LANGS, BLOGS, TESTIMONIALS, CONTRIBS, CONTRIB_COLORS, CONTRIB_COLORS_LIGHT, CODE_LINES } from "../../../data/portfolio-data.js";
import { Reveal, SectionHeader, GradientText, Card } from "../common/PortfolioCommon.jsx";

export function Contact({contactForm, setContactForm, formSent, handleContact}) {
  return (
    <section
  id="contact"
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

      bg-[radial-gradient(ellipse_at_bottom_left,#2563eb10_0%,transparent_60%)]

      dark:bg-[radial-gradient(ellipse_at_bottom_left,#2563eb20_0%,transparent_60%)]
    "
  />

  <div className="relative max-w-6xl mx-auto px-6">

    {/* =========================
        SECTION HEADER
    ========================== */}

    <Reveal>
      <SectionHeader
        badge="Get In Touch"
        title="Contact Me"
        subtitle="Whether it's a project, internship, or just a chat about ML — I'm always open."
      />
    </Reveal>

    {/* =========================
        CONTACT CONTENT
    ========================== */}

    <div className="grid lg:grid-cols-2 gap-12">

      {/* =========================
          CONTACT FORM
      ========================== */}

      <Reveal delay={100}>
        <form
          onSubmit={handleContact}
          className="
            bg-slate-100/80
            dark:bg-white/5

            backdrop-blur-sm

            border
            border-slate-200
            dark:border-white/10

            rounded-2xl
            p-6
            space-y-4
          "
        >

          {/* Name + Email */}
          <div className="grid sm:grid-cols-2 gap-4">

            {/* Name */}
            <div>
              <label
                className="
                  block
                  text-slate-700
                  dark:text-slate-300
                  text-sm
                  mb-1.5
                "
              >
                Name
              </label>

              <input
                type="text"
                required
                placeholder="Enter your name"
                value={contactForm.name}
                onChange={(e) =>
                  setContactForm({
                    ...contactForm,
                    name: e.target.value,
                  })
                }
                className="
                  w-full
                  px-4
                  py-2.5

                  bg-white
                  dark:bg-white/5

                  border
                  border-slate-200
                  dark:border-white/10

                  rounded-xl

                  text-slate-900
                  dark:text-white

                  placeholder-slate-400
                  dark:placeholder-slate-500

                  focus:outline-none
                  focus:border-blue-500

                  transition-colors
                  text-sm
                "
              />
            </div>

            {/* Email */}
            <div>
              <label
                className="
                  block
                  text-slate-700
                  dark:text-slate-300
                  text-sm
                  mb-1.5
                "
              >
                Email
              </label>

              <input
                type="email"
                required
                placeholder="Enter your email"
                value={contactForm.email}
                onChange={(e) =>
                  setContactForm({
                    ...contactForm,
                    email: e.target.value,
                  })
                }
                className="
                  w-full
                  px-4
                  py-2.5

                  bg-white
                  dark:bg-white/5

                  border
                  border-slate-200
                  dark:border-white/10

                  rounded-xl

                  text-slate-900
                  dark:text-white

                  placeholder-slate-400
                  dark:placeholder-slate-500

                  focus:outline-none
                  focus:border-blue-500

                  transition-colors
                  text-sm
                "
              />
            </div>

          </div>

          {/* Subject */}
          <div>
            <label
              className="
                block
                text-slate-700
                dark:text-slate-300
                text-sm
                mb-1.5
              "
            >
              Subject
            </label>

            <input
              type="text"
              required
              placeholder="Internship Opportunity / ML Project Collab"
              value={contactForm.subject}
              onChange={(e) =>
                setContactForm({
                  ...contactForm,
                  subject: e.target.value,
                })
              }
              className="
                w-full
                px-4
                py-2.5

                bg-white
                dark:bg-white/5

                border
                border-slate-200
                dark:border-white/10

                rounded-xl

                text-slate-900
                dark:text-white

                placeholder-slate-400
                dark:placeholder-slate-500

                focus:outline-none
                focus:border-blue-500

                transition-colors
                text-sm
              "
            />
          </div>

          {/* Message */}
          <div>
            <label
              className="
                block
                text-slate-700
                dark:text-slate-300
                text-sm
                mb-1.5
              "
            >
              Message
            </label>

            <textarea
              required
              rows={4}
              placeholder="Tell me about the opportunity or project..."
              value={contactForm.message}
              onChange={(e) =>
                setContactForm({
                  ...contactForm,
                  message: e.target.value,
                })
              }
              className="
                w-full
                px-4
                py-2.5

                bg-white
                dark:bg-white/5

                border
                border-slate-200
                dark:border-white/10

                rounded-xl

                text-slate-900
                dark:text-white

                placeholder-slate-400
                dark:placeholder-slate-500

                focus:outline-none
                focus:border-blue-500

                transition-colors
                resize-none
                text-sm
              "
            />
          </div>

          {/* Success Message / Submit */}
          {formSent ? (
            <div
              className="
                flex
                items-center
                justify-center
                gap-2
                py-3

                bg-green-100
                dark:bg-green-500/20

                border
                border-green-200
                dark:border-green-500/30

                text-green-700
                dark:text-green-400

                rounded-xl
                text-sm
              "
            >
              <CheckCircle2 className="w-4 h-4" />

              Message sent! I'll get back to you soon.
            </div>
          ) : (
            <button
              type="submit"
              className="
                w-full
                flex
                items-center
                justify-center
                gap-2
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
              <Send className="w-4 h-4" />

              Send Message
            </button>
          )}

        </form>
      </Reveal>

      {/* =========================
          CONTACT INFORMATION
      ========================== */}

      <Reveal delay={200}>
        <div className="space-y-6">

          {/* Heading */}
          <h3
            className="
              text-slate-900
              dark:text-white
              text-xl
              font-bold
            "
            style={{
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Let's Build Something Together
          </h3>

          {/* Description */}
          <p
            className="
              text-slate-600
              dark:text-slate-400
              leading-relaxed
            "
          >
            I'm open to ML internships, research opportunities,
            software projects, and exciting collaborations. I enjoy
            applying C++, Python, Machine Learning, Data Science,
            and Deep Learning to real-world problems.
          </p>

          {/* =========================
              CONTACT DETAILS
          ========================== */}

          <div className="space-y-4">

            {/* Email */}
            <div className="flex items-center gap-4">

              <div
                className="
                  w-10
                  h-10

                  bg-slate-200
                  dark:bg-white/10

                  rounded-xl
                  flex
                  items-center
                  justify-center

                  text-blue-600
                  dark:text-blue-400

                  flex-shrink-0
                "
              >
                <Mail className="w-5 h-5" />
              </div>

              <div>
                <p
                  className="
                    text-xs
                    text-slate-500
                    dark:text-slate-500
                  "
                >
                  Email
                </p>

                <a
                  href="mailto:vikaskasaudhan542@gmail.com"
                  className="
                    text-sm
                    text-slate-800
                    dark:text-slate-200

                    hover:text-blue-600
                    dark:hover:text-blue-400

                    transition-colors
                  "
                >
                  vikaskasaudhan542@gmail.com
                </a>
              </div>

            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">

              <div
                className="
                  w-10
                  h-10

                  bg-slate-200
                  dark:bg-white/10

                  rounded-xl
                  flex
                  items-center
                  justify-center

                  text-blue-600
                  dark:text-blue-400

                  flex-shrink-0
                "
              >
                <Phone className="w-5 h-5" />
              </div>

              <div>
                <p
                  className="
                    text-xs
                    text-slate-500
                    dark:text-slate-500
                  "
                >
                  Phone
                </p>

                <a
                  href="tel:8127087231"
                  className="
                    text-sm
                    text-slate-800
                    dark:text-slate-200

                    hover:text-blue-600
                    dark:hover:text-blue-400

                    transition-colors
                  "
                >
                  8127087231
                </a>
              </div>

            </div>

            {/* Location */}
            <div className="flex items-center gap-4">

              <div
                className="
                  w-10
                  h-10

                  bg-slate-200
                  dark:bg-white/10

                  rounded-xl
                  flex
                  items-center
                  justify-center

                  text-blue-600
                  dark:text-blue-400

                  flex-shrink-0
                "
              >
                <MapPin className="w-5 h-5" />
              </div>

              <div>
                <p
                  className="
                    text-xs
                    text-slate-500
                    dark:text-slate-500
                  "
                >
                  Location
                </p>

                <p
                  className="
                    text-sm
                    text-slate-800
                    dark:text-slate-200
                  "
                >
                  India
                </p>
              </div>

            </div>

            {/* LinkedIn */}
            <div className="flex items-center gap-4">

              <div
                className="
                  w-10
                  h-10

                  bg-slate-200
                  dark:bg-white/10

                  rounded-xl
                  flex
                  items-center
                  justify-center

                  text-blue-600
                  dark:text-blue-400

                  flex-shrink-0
                "
              >
                <Linkedin className="w-5 h-5" />
              </div>

              <div>
                <p
                  className="
                    text-xs
                    text-slate-500
                    dark:text-slate-500
                  "
                >
                  LinkedIn
                </p>

                <a
                  href="https://www.linkedin.com/in/vikas-kasaudhan-55b706326/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-sm
                    text-slate-800
                    dark:text-slate-200

                    hover:text-blue-600
                    dark:hover:text-blue-400

                    transition-colors
                  "
                >
                  LinkedIn Profile
                </a>
              </div>

            </div>

            {/* GitHub */}
            <div className="flex items-center gap-4">

              <div
                className="
                  w-10
                  h-10

                  bg-slate-200
                  dark:bg-white/10

                  rounded-xl
                  flex
                  items-center
                  justify-center

                  text-blue-600
                  dark:text-blue-400

                  flex-shrink-0
                "
              >
                <Github className="w-5 h-5" />
              </div>

              <div>
                <p
                  className="
                    text-xs
                    text-slate-500
                    dark:text-slate-500
                  "
                >
                  GitHub
                </p>

                <a
                  href="https://github.com/vikaskasaudhan786253"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-sm
                    text-slate-800
                    dark:text-slate-200

                    hover:text-blue-600
                    dark:hover:text-blue-400

                    transition-colors
                  "
                >
                  GitHub Profile
                </a>
              </div>

            </div>

          </div>

          {/* =========================
              SOCIAL LINKS
          ========================== */}

          <div className="flex gap-3 pt-4">

            {/* GitHub */}
            <a
              href="https://github.com/vikaskasaudhan786253"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="
                w-10
                h-10

                bg-slate-100
                dark:bg-white/10

                hover:bg-slate-200
                dark:hover:bg-white/20

                border
                border-slate-200
                dark:border-white/10

                hover:border-blue-500/50

                rounded-xl

                flex
                items-center
                justify-center

                text-slate-500
                dark:text-slate-400

                hover:text-blue-600
                dark:hover:text-white

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
                w-10
                h-10

                bg-slate-100
                dark:bg-white/10

                hover:bg-slate-200
                dark:hover:bg-white/20

                border
                border-slate-200
                dark:border-white/10

                hover:border-blue-500/50

                rounded-xl

                flex
                items-center
                justify-center

                text-slate-500
                dark:text-slate-400

                hover:text-blue-600
                dark:hover:text-white

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
                w-10
                h-10

                bg-slate-100
                dark:bg-white/10

                hover:bg-slate-200
                dark:hover:bg-white/20

                border
                border-slate-200
                dark:border-white/10

                hover:border-blue-500/50

                rounded-xl

                flex
                items-center
                justify-center

                text-slate-500
                dark:text-slate-400

                hover:text-blue-600
                dark:hover:text-white

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
                w-10
                h-10

                bg-slate-100
                dark:bg-white/10

                hover:bg-slate-200
                dark:hover:bg-white/20

                border
                border-slate-200
                dark:border-white/10

                hover:border-blue-500/50

                rounded-xl

                flex
                items-center
                justify-center

                text-slate-500
                dark:text-slate-400

                hover:text-blue-600
                dark:hover:text-white

                transition-all
              "
            >
              <Code2 className="w-5 h-5" />
            </a>

          </div>

        </div>
      </Reveal>

    </div>

  </div>
</section>
  );
}
