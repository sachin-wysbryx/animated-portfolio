import { profile } from "@/lib/profile";

export default function TemplateCreative() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center">
      <div>
        <h1 className="text-7xl font-extrabold">{profile.name}</h1>
        <p className="text-2xl mt-4">{profile.title}</p>
        <p className="mt-6 max-w-xl mx-auto">{profile.summary}</p>
      </div>
    </section>
  );
}
