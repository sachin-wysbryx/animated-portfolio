"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Home() {
  const [themeClass, setThemeClass] = useState("bg-surface-dark");

  return (
    <main className={`relative min-h-screen overflow-hidden ${themeClass} transition-colors duration-500 selection:bg-brand-primary/30`}>
      <Navbar />

      {/* Background Mesh (Dynamic) */}
      <div className={`fixed inset-0 bg-gradient-mesh pointer-events-none transition-opacity duration-1000 ${themeClass === "bg-surface-dark" ? "opacity-30" : "opacity-10"}`} />

      {/* Theme Switcher */}
      <div className="fixed bottom-6 right-6 z-50">
        <ThemeToggle onChange={setThemeClass} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>

      {/* Footer */}
      <footer className="relative z-10 py-16 border-t border-[var(--border)] text-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center font-black text-white">S</div>
          <p className="text-[var(--muted)] text-sm font-medium">
            © {new Date().getFullYear()} Sachin RV. Crafted with precision.
          </p>
        </div>
      </footer>
    </main>
  );
}
