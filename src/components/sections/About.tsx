"use client";

import { profile } from "@/lib/profile";

export default function About() {
  return (
    <section id="about" className="py-32">
      <h2 className="text-4xl font-bold mb-6">About Me</h2>

      <p className="max-w-3xl text-gray-300 text-lg">
        {profile.summary}
      </p>

      <div className="mt-10">
        <h3 className="text-2xl font-semibold">
          {profile.experience.role}
        </h3>
        <p className="text-gray-400">
          {profile.experience.company} • {profile.experience.period}
        </p>

        <ul className="mt-4 list-disc pl-6 space-y-2 text-gray-300">
          {profile.experience.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
