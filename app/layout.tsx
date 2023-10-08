import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hydrate from "@/components/Hydrate";

export const metadata: Metadata = {
  title: "Planets | Facts | App",
  description:
    "Embark on a journey through our solar system with our comprehensive guide to planets, moons, and celestial wonders. Discover fascinating facts, stunning images, and the latest updates on space exploration",
  keywords: [
    "Solar System Exploration",
    "Planets in Our Solar System",
    "Moons of the Solar System",
    "Latest Space Discoveries",
    "Next.js",
    "React",
    "JavaScript",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Hydrate>
        <Navbar />
        {children}
      </Hydrate>
    </html>
  );
}
