import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Github, Linkedin, Mail, Menu, X, Sun, Moon, ExternalLink, Download, Award, Code2, Cpu, Database, Phone, MapPin, Send, ArrowUp, Brain, CheckCircle2, Star, Zap, BarChart3, Layers, BookOpen, TrendingUp } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from "recharts";
import { NAV_LINKS, SKILL_CATEGORIES, PROJECTS, ML_JOURNEY, DSA_ALGO_TAGS, DSA_DS_TAGS, DSA_BAR_DATA, CERTS, EXPERIENCE, ACHIEVEMENTS, TOP_LANGS, BLOGS, TESTIMONIALS, CONTRIBS, CONTRIB_COLORS, CONTRIB_COLORS_LIGHT, CODE_LINES } from "../../../data/portfolio-data.js";
import { Reveal, SectionHeader, GradientText, Card } from "../common/PortfolioCommon.jsx";

export function About() {
  return (
    _jsxs("section", {
  id: "about",
  className: "py-24 bg-white dark:bg-slate-900",
  children: [
    _jsx("div", {
      className: "max-w-6xl mx-auto px-6",
      children: [
        _jsx(Reveal, {
          children: _jsx(SectionHeader, {
            badge: "Who I Am",
            title: "About Me",
            subtitle:
              "AI/ML engineering student passionate about building intelligent solutions that solve real-world problems through data, machine learning, and software."
          })
        }),

        _jsxs("div", {
          className: "grid lg:grid-cols-2 gap-12 items-start",
          children: [

            /* =========================
               EDUCATION
            ========================== */

            _jsxs(Reveal, {
              delay: 100,
              children: [
                _jsxs("h3", {
                  className:
                    "text-xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-2",
                  style: {
                    fontFamily: "'Poppins', sans-serif"
                  },
                  children: [
                    _jsx(BookOpen, {
                      className: "w-5 h-5 text-blue-600"
                    }),
                    " Education"
                  ]
                }),

                _jsxs("div", {
                  className:
                    "relative pl-6 border-l-2 border-blue-200 dark:border-blue-800 space-y-8",

                  children: [

                    /* =========================
                       B.TECH
                    ========================== */

                    _jsxs("div", {
                      children: [
                        _jsx("div", {
                          className:
                            "absolute -left-[9px] w-4 h-4 bg-blue-600 rounded-full border-2 border-white dark:border-slate-900"
                        }),

                        _jsxs(Card, {
                          className: "p-5",
                          children: [
                            _jsxs("div", {
                              className:
                                "flex items-start justify-between mb-2",
                              children: [
                                _jsx("span", {
                                  className:
                                    "text-xs font-medium text-blue-600 bg-blue-50 dark:bg-blue-900/30 px-2 py-0.5 rounded-md",
                                  children: "2024 – 2028"
                                }),

                                _jsx("span", {
                                  className:
                                    "text-xs text-green-600 font-semibold bg-green-50 dark:bg-green-900/30 px-2 py-0.5 rounded-md",
                                  children: "CGPA: 8.48"
                                })
                              ]
                            }),

                            _jsx("h4", {
                              className:
                                "font-bold text-slate-900 dark:text-white",
                              style: {
                                fontFamily: "'Poppins', sans-serif"
                              },
                              children:
                                "B.Tech Computer Science and Engineering"
                            }),

                            _jsx("p", {
                              className:
                                "text-sm text-slate-500 dark:text-slate-400 mt-1",
                              children:
                                "National Institute of Technology Durgapur"
                            }),

                            _jsx("p", {
                              className:
                                "text-xs text-slate-400 dark:text-slate-500 mt-2",
                              children:
                                "Focused on Machine Learning, Deep Learning & Data Science."
                            })
                          ]
                        })
                      ]
                    }),

                    /* =========================
                       CLASS XII
                    ========================== */

                    _jsxs("div", {
                      children: [
                        _jsx("div", {
                          className:
                            "absolute -left-[9px] w-4 h-4 bg-slate-300 dark:bg-slate-600 rounded-full border-2 border-white dark:border-slate-900"
                        }),

                        _jsxs(Card, {
                          className: "p-5",
                          children: [
                            _jsx("span", {
                                  className:
                                    "text-xs font-medium text-blue-600 bg-blue-50 dark:bg-blue-900/30 px-2 py-0.5 rounded-md",
                                  children: "2020 – 2022"
                                }),

                            _jsx("h4", {
                              className:
                                "font-bold text-slate-900 dark:text-white mt-2",
                              style: {
                                fontFamily: "'Poppins', sans-serif"
                              },
                              children: "Class XII — Science (PCM)"
                            }),

                            _jsx("p", {
                              className:
                                "text-sm text-slate-500 dark:text-slate-400 mt-1",
                              children:
                                "M D A I C GAURA KAPTANGANJ BASTI"
                            }),

                            _jsx("p", {
                              className:
                                "text-xs text-slate-400 dark:text-slate-500 mt-1",
                              children: "Percentage: 83.2%"
                            })
                          ]
                        })
                      ]
                    }),

                    /* =========================
                       CLASS X
                    ========================== */

                    _jsxs("div", {
                      children: [
                        _jsx("div", {
                          className:
                            "absolute -left-[9px] w-4 h-4 bg-slate-300 dark:bg-slate-600 rounded-full border-2 border-white dark:border-slate-900"
                        }),

                        _jsxs(Card, {
                          className: "p-5",
                          children: [
                            _jsx("span", {
                                  className:
                                    "text-xs font-medium text-blue-600 bg-blue-50 dark:bg-blue-900/30 px-2 py-0.5 rounded-md",
                                  children: "2018 – 2020"
                                }),

                            _jsx("h4", {
                              className:
                                "font-bold text-slate-900 dark:text-white mt-2",
                              style: {
                                fontFamily: "'Poppins', sans-serif"
                              },
                              children: "Class X"
                            }),

                            _jsx("p", {
                              className:
                                "text-sm text-slate-500 dark:text-slate-400 mt-1",
                              children:
                                "SMT P D G HSS RAJAJOTKALA K GANJ BASTI"
                            }),

                            _jsx("p", {
                              className:
                                "text-xs text-slate-400 dark:text-slate-500 mt-1",
                              children: "Percentage: 89.67%"
                            })
                          ]
                        })
                      ]
                    })
                  ]
                })
              ]
            }),

            /* =========================
               CAREER OBJECTIVE
            ========================== */

            _jsxs(Reveal, {
              delay: 200,
              children: [
                _jsx("h3", {
                  className:
                    "text-xl font-bold text-slate-900 dark:text-white mb-4",
                  style: {
                    fontFamily: "'Poppins', sans-serif"
                  },
                  children: "Career Objective"
                }),

                _jsx("p", {
                  className:
                    "text-slate-600 dark:text-slate-400 leading-relaxed mb-8",
                  children:
                    "To build practical AI solutions that solve real-world problems using Machine Learning, Deep Learning, Data Science, and software development. I aim to grow as an AI/ML engineer while continuously strengthening my skills in model development, deployment, and emerging technologies such as Generative AI."
                }),

                _jsx("div", {
                  className:
                    "grid grid-cols-2 sm:grid-cols-3 gap-3",

                  children: [
                    {
                      icon: _jsx(Brain, {
                        className: "w-5 h-5"
                      }),
                      label: "Machine Learning",
                      color: "blue"
                    },

                    {
                      icon: _jsx(BarChart3, {
                        className: "w-5 h-5"
                      }),
                      label: "Data Science",
                      color: "emerald"
                    },

                    {
                      icon: _jsx(Code2, {
                        className: "w-5 h-5"
                      }),
                      label: "DSA in C++",
                      color: "violet"
                    },

                    {
                      icon: _jsx(Cpu, {
                        className: "w-5 h-5"
                      }),
                      label: "Deep Learning",
                      color: "orange"
                    },

                    {
                      icon: _jsx(Layers, {
                        className: "w-5 h-5"
                      }),
                      label: "Backend Development",
                      color: "cyan"
                    },

                    {
                      icon: _jsx(Zap, {
                        className: "w-5 h-5"
                      }),
                      label: "Gen AI",
                      color: "pink"
                    }
                  ].map((s) => {
                    const colors = {
                      blue:
                        "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800",

                      emerald:
                        "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800",

                      violet:
                        "bg-violet-50 dark:bg-violet-900/20 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-800",

                      orange:
                        "bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800",

                      cyan:
                        "bg-cyan-50 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800",

                      pink:
                        "bg-pink-50 dark:bg-pink-900/20 text-pink-700 dark:text-pink-300 border-pink-200 dark:border-pink-800"
                    };

                    return _jsxs(
                      "div",
                      {
                        className: `flex items-center gap-2.5 p-3 rounded-xl border ${colors[s.color]} transition-transform hover:-translate-y-0.5`,
                        children: [
                          s.icon,

                          _jsx("span", {
                            className: "text-sm font-medium",
                            children: s.label
                          })
                        ]
                      },
                      s.label
                    );
                  })
                })
              ]
            })
          ]
        })
      ]
    })
  ]
})
  );
}
