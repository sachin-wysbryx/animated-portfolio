export default function Contact() {
  return (
    <section id="contact" className="py-32">
      <h2 className="text-4xl font-bold mb-6">Contact</h2>

      <form
        action="https://formspree.io/f/xbjvqdva"
        method="POST"
        className="max-w-md space-y-4"
      >
        <input
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-3 bg-transparent border rounded"
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          required
          className="w-full p-3 bg-transparent border rounded"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="w-full p-3 bg-transparent border rounded"
        />
        <button
          type="submit"
          className="px-6 py-3 border rounded hover:bg-white hover:text-black transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
