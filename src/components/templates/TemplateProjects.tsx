export default function TemplateProjects() {
  return (
    <section className="max-w-6xl mx-auto py-24">
      <h2 className="text-4xl font-bold mb-8">Key Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="border p-6 rounded">
          <h3 className="font-semibold">TravelSys</h3>
          <p className="text-sm mt-2">
            Authentication, dashboards, PostgreSQL + MongoDB integration.
          </p>
        </div>

        <div className="border p-6 rounded">
          <h3 className="font-semibold">Chat Application</h3>
          <p className="text-sm mt-2">
            Real-time messaging, WebRTC audio/video, Socket.io.
          </p>
        </div>
      </div>
    </section>
  );
}
