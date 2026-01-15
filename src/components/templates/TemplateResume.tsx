import { profile } from "@/lib/profile";

export default function TemplateResume() {
  return (
    <section className="max-w-5xl mx-auto py-24">
      <h2 className="text-3xl font-bold mb-4">Experience</h2>

      <h3 className="text-xl font-semibold">
        {profile.experience.role} – {profile.experience.company}
      </h3>
      <p className="text-gray-400">{profile.experience.period}</p>

      <ul className="list-disc pl-6 mt-4">
        {profile.experience.points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </section>
  );
}
