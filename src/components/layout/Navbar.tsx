"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Work", id: "projects" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 flex justify-center pt-6 transition-all duration-500`}
    >
      <nav
        className={`flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 border ${scrolled
            ? "w-[90%] md:w-[600px] bg-[var(--background)]/70 backdrop-blur-xl border-[var(--border)] shadow-2xl"
            : "w-[95%] md:w-[1100px] bg-transparent border-transparent"
          }`}
      >
        {/* Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="w-9 h-9 bg-brand-primary rounded-xl flex items-center justify-center font-black text-white group-hover:rotate-12 transition-transform duration-300">
            S
          </div>
          <span className="font-bold text-lg tracking-tight text-[var(--foreground)] hidden sm:block">
            Sachin<span className="text-brand-primary">.</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <ul className="flex items-center gap-1 list-none p-0 m-0 mr-4">
            {navItems.map((item) => (
              <li
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="px-4 py-2 rounded-full cursor-pointer text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--foreground)]/5 transition-all"
              >
                {item.label}
              </li>
            ))}
          </ul>

          <button
            onClick={() => scrollTo("contact")}
            className="px-5 py-2 rounded-full bg-brand-primary text-white text-sm font-bold hover:scale-105 active:scale-95 transition-all shadow-lg shadow-brand-primary/20"
          >
            Let's Talk
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center text-[var(--foreground)]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          )}
        </button>
      </nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed top-24 left-6 right-6 z-50 md:hidden bg-[var(--background)]/95 backdrop-blur-2xl border border-[var(--border)] rounded-3xl p-6 shadow-3xl"
          >
            <ul className="flex flex-col gap-4 text-xl font-bold list-none p-0 m-0">
              {navItems.map((item) => (
                <li
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="px-4 py-3 rounded-2xl cursor-pointer text-[var(--foreground)] hover:bg-brand-primary/10 hover:text-brand-primary transition-all"
                >
                  {item.label}
                </li>
              ))}
            </ul>
            <button
              onClick={() => scrollTo("contact")}
              className="w-full mt-6 py-4 rounded-2xl bg-brand-primary text-white font-bold text-lg"
            >
              Let's Talk
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
