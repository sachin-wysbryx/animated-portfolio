"use client";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-bold text-lg text-white">Sachin</span>

        <ul className="flex gap-6 text-sm list-none p-0 m-0">
          {navItems.map((item) => (
            <li
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="cursor-pointer text-gray-300 hover:text-white"
            >
              {item.label}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
