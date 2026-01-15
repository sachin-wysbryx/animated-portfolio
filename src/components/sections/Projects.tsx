"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/profile";

const projectImages = [
  "/projects/travelsys.png",
  "/projects/synergy.png",
  "/projects/chat.png",
  "/projects/employee.png",
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-4 text-[var(--foreground)]"
        >
          Selected <span className="text-brand-primary">Works.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[var(--muted)] text-lg max-w-2xl"
        >
          A collection of high-impact full-stack applications. Each project demonstrates a commitment to clean architecture, scalable performance, and seamless user experiences.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {profile.projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-video rounded-3xl overflow-hidden mb-8 glass shadow-2xl">
              <img
                src={projectImages[index % projectImages.length]}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex gap-2 flex-wrap">
                  {project.tech.slice(0, 3).map(tag => (
                    <span key={tag} className="text-[10px] font-bold tracking-widest uppercase text-white bg-brand-primary/80 backdrop-blur-md px-3 py-1 rounded-full shadow-lg">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="px-2">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-3xl font-black text-[var(--foreground)] group-hover:text-brand-primary transition-colors duration-300 tracking-tight">
                  {project.title}
                </h3>
                <div className="w-12 h-12 rounded-full border border-[var(--border)] flex items-center justify-center group-hover:bg-brand-primary group-hover:border-brand-primary transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--muted)] group-hover:text-white -rotate-45 group-hover:rotate-0 transition-transform"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              </div>
              <p className="text-brand-primary/70 text-sm font-bold uppercase tracking-widest mb-4">
                {project.subtitle}
              </p>
              <p className="text-[var(--muted)] leading-relaxed mb-6 line-clamp-3 font-medium">
                {project.description}
              </p>

              <ul className="space-y-2 mb-8 list-none p-0">
                {project.highlights.map((point, i) => (
                  <li key={i} className="flex gap-3 text-xs text-[var(--muted)] font-semibold uppercase tracking-tight">
                    <span className="text-brand-primary">✦</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-32 text-center glass-card p-16 rounded-[3rem] overflow-hidden relative"
      >
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-primary/10 blur-[100px] rounded-full" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-secondary/10 blur-[100px] rounded-full" />

        <div className="relative z-10">
          <h3 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter leading-none text-[var(--foreground)]">
            READY TO START YOUR <br />
            <span className="text-brand-primary">NEXT BIG THING?</span>
          </h3>
          <p className="text-[var(--muted)] max-w-2xl mx-auto mb-12 text-lg font-medium">
            I'm currently seeking for high-impact opportunities where I can contribute to mission-critical systems and build exceptional digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-5 rounded-full bg-brand-primary text-white font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-xl shadow-brand-primary/20"
            >
              Let's Collaborate
            </button>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 rounded-full glass text-[var(--foreground)] font-bold text-lg hover:bg-brand-primary/10 transition-all"
            >
              Github Repo
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
