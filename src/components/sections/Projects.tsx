export default function Projects() {
  return (
    <section id="projects" className="py-32">
      <h2 className="text-4xl font-bold mb-10">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {[
          "TravelSys",
          "Chat Application",
          "Synergy",
          "Employee Management System",
        ].map((project) => (
          <div
            key={project}
            className="p-6 rounded-xl border border-gray-600 hover:border-white transition"
          >
            <h3 className="text-xl font-semibold">{project}</h3>
            <p className="text-gray-400 mt-2">
              Real-world full stack application.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
