"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ThemeToggle({
  onChange,
}: {
  onChange: (theme: string) => void;
}) {
  const themes = {
    dark: { class: "bg-surface-dark text-white", icon: "🌙" },
    light: { class: "bg-white text-black", icon: "☀️" },
  };

  return (
    <div className="flex gap-1 p-1 bg-[var(--background)]/50 backdrop-blur-md rounded-full border border-[var(--border)] shadow-lg">
      {Object.entries(themes).map(([key, value]) => (
        <motion.button
          key={key}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onChange(value.class)}
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[var(--foreground)]/5 transition-all text-lg"
          title={key}
        >
          {value.icon}
        </motion.button>
      ))}
    </div>
  );
}
