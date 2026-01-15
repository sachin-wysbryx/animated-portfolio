"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/profile";

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="mb-16">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-4 text-[var(--foreground)]"
        >
          Experience & <span className="text-brand-primary">About Me</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[var(--muted)] text-lg max-w-2xl"
        >
          {profile.title} at {profile.experience[0].company}, specializing in {profile.summary.split('. ')[0].split('in ')[1]}.
        </motion.p>
      </div>

      <div className="grid lg:grid-cols-[1fr_400px] gap-12">
        {/* Left: Timeline & Responsibilities */}
        <div className="space-y-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
            </div>
            <h3 className="text-2xl font-bold text-[var(--foreground)]">Professional Journey</h3>
          </div>

          <div className="relative border-l-2 border-[var(--border)] ml-5 pl-10 space-y-12">
            {profile.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-[51px] top-0 w-10 h-10 rounded-full bg-[var(--background)] border-2 border-[var(--border)] flex items-center justify-center text-brand-primary shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                </div>
                <div>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                    <h4 className="text-xl font-bold text-[var(--foreground)]">{exp.role}</h4>
                    <span className="text-brand-primary font-bold text-sm">@ {exp.company}</span>
                  </div>
                  <p className="text-[var(--muted)] font-semibold text-xs mb-4 uppercase tracking-wider">{exp.period} | {exp.location}</p>

                  <div className="space-y-4">
                    <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-primary opacity-60">Key Responsibilities</h5>
                    <ul className="grid gap-3 list-none p-0">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex gap-3 text-[var(--foreground)] text-sm leading-relaxed">
                          <span className="text-brand-primary shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-primary" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl glass-card"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-[var(--foreground)]">Education</h3>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h4 className="text-xl font-bold text-[var(--foreground)]">{profile.education.degree}</h4>
                <p className="text-[var(--muted)] font-medium">{profile.education.institution}</p>
              </div>
              <div className="px-5 py-2 rounded-full bg-brand-primary/10 text-brand-primary font-bold border border-brand-primary/20 text-xs">
                Class of {profile.education.year}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right: Summary Card */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-[2rem] sticky top-24 shadow-xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--foreground)]">Full Profile</h3>
            </div>
            {profile.summary.split('.').map((sentence, i) => sentence.trim() && (
              <p key={i} className="text-[var(--foreground)] text-sm leading-relaxed mb-4 font-medium">
                {sentence.trim()}.
              </p>
            ))}

            <hr className="border-[var(--border)] my-10" />

            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-primary mb-5">Principal Expertise</h4>
            <div className="flex flex-wrap gap-2 mb-10">
              {profile.skills.frontend.slice(0, 3).concat(profile.skills.backend.slice(0, 2)).map(tech => (
                <span key={tech} className="px-3 py-1.5 rounded-lg bg-brand-primary/5 text-brand-primary text-[10px] font-bold border border-brand-primary/10">
                  {tech}
                </span>
              ))}
            </div>

            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-primary mb-5">Areas of Focus</h4>
            <div className="flex flex-wrap gap-2">
              {profile.interests.map(interest => (
                <span key={interest} className="px-3 py-1.5 rounded-lg bg-[var(--background)] border border-[var(--border)] text-[var(--muted)] text-[10px] font-bold">
                  {interest}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
