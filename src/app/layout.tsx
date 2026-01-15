import "./globals.css";
import Navbar from "@/components/layout/Navbar";

export const metadata = {
  title: "Sachin RV | Full Stack Developer",
  description: "Creative Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
