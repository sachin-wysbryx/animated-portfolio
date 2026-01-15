import "./globals.css";
import Navbar from "@/components/layout/Navbar";

export const metadata = {
  title: "Sachin | Creative Developer",
  description: "Next-level animated portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
