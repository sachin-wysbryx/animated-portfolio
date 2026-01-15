import { profile } from "@/lib/profile";

export default function TemplateMinimal() {
  return (
    <section
      id="home"
      className="min-h-[70vh] flex flex-col justify-center"
    >
      <h1 className="text-6xl font-extrabold">{profile.name}</h1>

      <p className="mt-4 text-xl text-gray-400">
        {profile.title} • {profile.location}
      </p>

      <p className="mt-8 max-w-2xl text-lg text-gray-300">
        {profile.summary}
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href={profile.github}
          target="_blank"
          className="px-6 py-3 rounded-full border hover:bg-white hover:text-black transition"
        >
          GitHub
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          className="px-6 py-3 rounded-full border hover:bg-white hover:text-black transition"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
