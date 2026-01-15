"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/profile";

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item: any = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center pt-32 pb-20 relative overflow-hidden"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="text-center max-w-5xl px-6 relative z-10"
      >
        <motion.div
          variants={item}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-[10px] font-mono font-bold uppercase tracking-widest mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
          {profile.experience_years} EXPERIENCE • OPEN FOR ROLES
        </motion.div>

        <motion.h1
          variants={item}
          className="text-7xl md:text-[10rem] font-black mb-6 tracking-tightest leading-[0.85] uppercase"
        >
          <span className="text-[var(--foreground)] transition-colors duration-500">
            {profile.name.split(' ')[0]}
          </span>
          <br />
          <span className="text-brand-primary">{profile.name.split(' ')[1]}</span>
        </motion.h1>

        <motion.div variants={item} className="flex flex-col items-center">
          <p className="text-xl md:text-3xl font-medium mb-8 text-[var(--foreground)] tracking-tight">
            Building the future of <span className="text-brand-primary italic serif">Web Scalability</span>
          </p>

          <p className="text-base md:text-lg text-[var(--muted)] max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
            {profile.summary}
          </p>
        </motion.div>

        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-4 rounded-xl bg-[var(--foreground)] text-[var(--background)] font-bold text-base hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-2xl shadow-brand-primary/10"
          >
            Explore Projects
          </button>

          <div className="flex gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-xl glass flex items-center justify-center text-[var(--foreground)] hover:bg-black hover:text-white transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-xl glass flex items-center justify-center text-[var(--foreground)] hover:bg-[#0077b5] hover:text-white transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/5 blur-[150px] rounded-full pointer-events-none" />
    </section>
  );
}
