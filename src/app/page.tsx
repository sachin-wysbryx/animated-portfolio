"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen flex items-center justify-center bg-black text-white"
    >
      <h1 className="text-5xl font-bold">
        Sachin — Creative Developer
      </h1>
    </motion.main>
  );
}
