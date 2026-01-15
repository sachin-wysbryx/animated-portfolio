"use client";

import { useState } from "react";
import ThemeToggle from "@/components/ui/ThemeToggle";
import TemplateMinimal from "@/components/templates/TemplateMinimal";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  const [theme, setTheme] = useState("bg-black text-white");

  return (
    <div className={`${theme} min-h-screen pt-24 transition-colors`}>
      {/* Controls */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex gap-3 bg-black/70 p-3 rounded-xl backdrop-blur">
        <ThemeToggle onChange={setTheme} />
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6">
        <TemplateMinimal />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
