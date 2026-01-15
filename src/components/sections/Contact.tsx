"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/profile";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black mb-6"
        >
          Let's Build Something <br />
          <span className="text-brand-primary">Together</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[var(--muted)] text-lg"
        >
          Have a project in mind or just want to say hi? Feel free to reach out and I'll get back to you as soon as possible.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="max-w-3xl mx-auto"
      >
        <form className="space-y-6" action="https://formspree.io/sachinrv19@gmail.com" method="POST">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-bold text-[var(--muted)] ml-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Your Name"
                className="w-full glass rounded-xl px-5 py-4 focus:border-brand-primary/50 focus:outline-none transition-all placeholder:opacity-30"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-bold text-[var(--muted)] ml-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder={profile.email}
                className="w-full glass rounded-xl px-5 py-4 focus:border-brand-primary/50 focus:outline-none transition-all placeholder:opacity-30"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-bold text-[var(--muted)] ml-1">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              placeholder="Tell me about your project..."
              className="w-full glass rounded-xl px-5 py-4 focus:border-brand-primary/50 focus:outline-none transition-all placeholder:opacity-30 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-5 rounded-2xl bg-brand-primary text-white font-bold text-lg flex items-center justify-center gap-2 hover:bg-brand-primary/90 hover:scale-[1.01] active:scale-[0.99] transition-all shadow-lg shadow-brand-primary/20"
          >
            Send Message
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
          </button>
        </form>

        <div className="mt-16 flex flex-col items-center gap-8 text-center">
          <div className="flex gap-4">
            {[
              { icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>, label: "Github", link: profile.github },
              { icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>, label: "LinkedIn", link: profile.linkedin },
              { icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>, label: "Email", link: `mailto:${profile.email}` },
            ].map((social, i) => (
              <a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass flex items-center justify-center text-[var(--muted)] hover:text-white hover:bg-brand-primary hover:border-brand-primary transition-all"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 text-[var(--muted)] text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            <span>Based in {profile.location}</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
