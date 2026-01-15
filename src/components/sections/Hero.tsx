"use client";

import { motion } from "framer-motion";
import { container, fadeUpItem } from "@/lib/animations";

const title = "Sachin";
const subtitle = "Building immersive web experiences";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="text-center"
      >
        {/* Title */}
        <h1 className="text-6xl font-bold mb-4 flex justify-center gap-2">
          {title.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={fadeUpItem}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-gray-400 flex justify-center gap-1">
          {subtitle.split(" ").map((word, index) => (
            <motion.span
              key={index}
              variants={fadeUpItem}
              className="inline-block"
            >
              {word}
            </motion.span>
          ))}
        </p>
      </motion.div>
    </section>
  );
}
