"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/profile";

const skillIcons = {
    frontend: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>,
    backend: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>,
    databases: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>,
    tools: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>,
    testing: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
};

export default function Skills() {
    return (
        <section id="skills" className="py-24 relative">
            <div className="text-center mb-16">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-semibold uppercase tracking-wider"
                >
                    Expertise
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-[var(--foreground)]"
                >
                    Technical Proficiency
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-[var(--muted)] max-w-2xl mx-auto"
                >
                    Specializing in building end-to-end web architectures with a focus on {profile.skills.frontend[0]}, {profile.skills.backend[0]}, and {profile.skills.databases[0]}.
                </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(profile.skills).map(([key, skills], groupIndex) => (
                    <motion.div
                        key={key}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: groupIndex * 0.1 }}
                        className="glass-card p-8 rounded-2xl relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <span className="text-4xl font-black italic uppercase text-[var(--foreground)]">{key.charAt(0)}</span>
                        </div>

                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                                {skillIcons[key as keyof typeof skillIcons] || skillIcons.tools}
                            </div>
                            <h3 className="text-xl font-bold capitalize text-[var(--foreground)]">{key}</h3>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1.5 rounded-lg glass text-sm text-[var(--muted)] hover:border-brand-primary/30 hover:text-brand-primary transition-all duration-200"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-12 glass-card p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6"
            >
                <div>
                    <h3 className="text-xl font-bold mb-2 text-[var(--foreground)]">Want to see these skills in action?</h3>
                    <p className="text-[var(--muted)]">Check out my recent projects like {profile.projects[0].title} and {profile.projects[1].title}.</p>
                </div>
                <div className="flex gap-4">
                    <button
                        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-6 py-3 rounded-full bg-brand-primary text-white font-bold hover:scale-105 transition-all shadow-lg shadow-brand-primary/20"
                    >
                        View Projects
                    </button>
                    <a
                        href={profile.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-full glass text-[var(--foreground)] font-bold hover:bg-brand-primary/10 transition-all"
                    >
                        Github Profile
                    </a>
                </div>
            </motion.div>
        </section>
    );
}
