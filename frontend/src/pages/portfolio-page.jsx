import { useState, useEffect, useRef } from "react";
import { Header } from "../components/portfolio/Header/Header.jsx";
import { Hero } from "../components/portfolio/Hero/Hero.jsx";
import { About } from "../components/portfolio/About/About.jsx";
import { Skills } from "../components/portfolio/Skills/Skills.jsx";
import { Projects } from "../components/portfolio/Projects/Projects.jsx";
import { Journey } from "../components/portfolio/Journey/Journey.jsx";
import { DSA } from "../components/portfolio/DSA/DSA.jsx";
import { Certifications } from "../components/portfolio/Certifications/Certifications.jsx";
import { Experience } from "../components/portfolio/Experience/Experience.jsx";
import { Achievements } from "../components/portfolio/Achievements/Achievements.jsx";
import { GitHub } from "../components/portfolio/GitHub/GitHub.jsx";
import { Blogs } from "../components/portfolio/Blogs/Blogs.jsx";
import { Testimonials } from "../components/portfolio/Testimonials/Testimonials.jsx";
import { Contact } from "../components/portfolio/Contact/Contact.jsx";
import { Footer } from "../components/portfolio/Footer/Footer.jsx";

export function PortfolioPage() {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSkillTab, setActiveSkillTab] = useState("Languages");
  const [skillsAnimate, setSkillsAnimate] = useState(false);
  const [contactForm, setContactForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [formSent, setFormSent] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setSkillsAnimate(true);
      },
      { threshold: 0.2 }
    );
    if (skillsRef.current) obs.observe(skillsRef.current);
    return () => obs.disconnect();
  }, []);

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  const handleContact = (e) => {
    e.preventDefault();
    setFormSent(true);
    setContactForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setFormSent(false), 4000);
  };

  return (
    <div className={isDark ? "dark" : ""} style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="bg-slate-50 dark:bg-[#0a0f1e] text-slate-900 dark:text-slate-100 min-h-screen scroll-smooth">
        <Header isDark={isDark} setIsDark={setIsDark} menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrolled={scrolled} scrollTo={scrollTo} />
        <Hero scrollTo={scrollTo} />
        <About />
        <Skills activeSkillTab={activeSkillTab} setActiveSkillTab={setActiveSkillTab} skillsAnimate={skillsAnimate} skillsRef={skillsRef} />
        <Projects />
        <Journey />
        <DSA />
        <Certifications />
        <Experience />
        <Achievements />
        <GitHub />
        <Blogs />
        <Testimonials />
        <Contact contactForm={contactForm} setContactForm={setContactForm} formSent={formSent} handleContact={handleContact} />
        <Footer scrollTo={scrollTo} />
      </div>
      <style>{`
        @keyframes fadeInLine {
          from { opacity: 0; transform: translateX(-8px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
