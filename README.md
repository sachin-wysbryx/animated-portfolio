# 🚀 Premium Full-Stack Developer Portfolio

A high-performance, minimalist portfolio designed for professional software engineers. This project focuses on refined aesthetics, high-quality animations, and a seamless user experience across light and dark themes.

---

## 📖 About the Project

This portfolio is a showcase of technical expertise and design sensibility. It's built to be **data-driven**, meaning all content (experience, projects, skills) is centralized in a single configuration file, making it extremely easy to maintain and update. The design follows "Senior Engineer" principles: clean, efficient, and content-focused.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router, Turbopack)
- **Styling**: [Tailwind CSS 4.0](https://tailwindcss.com/) (Using modern `@import` configuration)
- **Animations**: [Framer Motion 12](https://www.framer.com/motion/) (Staggered reveals, hover effects, AnimatePresence)
- **Smooth Scrolling**: [Lenis](https://lenis.darkroom.engineering/) (Liquid-smooth scroll behavior)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict type-safety)
- **Deployment**: Optimized for [Vercel](https://vercel.com/)

---

## 📂 Project Structure: Which is Where?

Knowing where to find things is key to maintaining this project. Here is the architectural breakdown:

### 🏛️ Core App (`src/app/`)
- `layout.tsx`: The root shell. Contains the **SmoothScroll** wrapper, **Navbar**, and global font configurations.
- `page.tsx`: The main entry point. Orchestrates all page sections (`Hero`, `About`, `Skills`, etc.) and handles the **Global Theme Switching** logic.
- `globals.css`: The heart of the design system. Defines **CSS Variables** for Light/Dark modes, glassmorphism utilities, and the dynamic mesh background.

### 🍱 Components (`src/components/`)
- `/layout`: Permanent UI elements like the **Floating Navbar** and the **SmoothScroll** provider.
- `/sections`: The individual blocks of the page. Each file is self-contained (e.g., `Hero.tsx`, `Projects.tsx`).
- `/ui`: Reusable interface elements like the **ThemeToggle**.

### ⚙️ Logic & Data (`src/lib/` & `src/types/`)
- `lib/profile.ts`: **The Master Config**. Change your name, email, projects, or skills here, and the entire site updates instantly.
- `types/`: Custom TypeScript declarations (e.g., for Lenis) to ensure no build errors.

### 🖼️ Assets (`public/`)
- `projects/`: Store project screenshots here.
- `Sachinrv2002(resume).pdf`: Your downloadable resume.

---

## 🚀 Deployment

1.  Push to GitHub.
2.  Connect to Vercel.
3.  Set zero environment variables (unless you want to customize Formspree farther).
4.  **Done.**

## ⚙️ Features

- **Pill-Navbar**: A floating, dynamic navbar that shrinks and blurs on scroll.
- **Theme Logic**: Full support for system-preference-aware Dark and Light modes.
- **Production Ready**: Optimized images, minimal bundle size, and SEO friendly.

---

Developed with precision by **Sachin RV**.
