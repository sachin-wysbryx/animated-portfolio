"use client";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <span className="text-xl font-bold">
          Sachin
        </span>

        {/* Nav Links */}
        <ul className="flex gap-8 text-sm text-gray-300">
          <li className="cursor-pointer hover:text-white">Home</li>
          <li className="cursor-pointer hover:text-white">About</li>
          <li className="cursor-pointer hover:text-white">Projects</li>
          <li className="cursor-pointer hover:text-white">Contact</li>
        </ul>
      </nav>
    </header>
  );
}
