"use client";

export default function ThemeToggle({
  onChange,
}: {
  onChange: (theme: string) => void;
}) {
  const themes = {
    dark: "bg-black text-white",
    light: "bg-white text-black",
    neo: "bg-gradient-to-br from-purple-600 to-black text-white",
  };

  return (
    <div className="flex gap-2">
      {Object.keys(themes).map((key) => (
        <button
          key={key}
          onClick={() => onChange(themes[key as keyof typeof themes])}
          className="px-4 py-2 text-xs rounded-full border border-gray-500 hover:bg-white hover:text-black transition"
        >
          {key}
        </button>
      ))}
    </div>
  );
}
