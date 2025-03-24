"use client";
import { useEffect, useState } from "react";

import { COLORS } from "@lib/constants";

export default function Hero() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative bg-[#f4f3ef] min-h-[100vh] py-32 px-6 overflow-hidden">
      {/* Parallax background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
          transform: `translateY(${offsetY * 0.2}px)`,
        }}
      ></div>

      <div className="max-w-5xl mx-auto mt-32 text-center z-10 relative">
        <h1 className="text-5xl md:text-6xl font-bold text-[#4a5a40] leading-tight">
          Fresh Flowers Delivered with Love
        </h1>
        <p className="mt-4 text-lg md:text-xl text-[#5f6b50]">
          Beautiful bouquets for every season and reason.
        </p>
        <a
          href="#shop"
          className="mt-8 inline-block bg-[#6a7752] text-white px-8 py-3 rounded-full shadow-lg hover:bg-[#586845] transition-all duration-300"
        >
          Shop Now
        </a>
      </div>

      <div
        className={`absolute -bottom-10 -left-10 w-72 h-72 rounded-full mix-blend-multiply blur-2xl opacity-40 animate-pulse`}
        style={{
          backgroundColor: COLORS.accent1,
          transform: `translateY(${offsetY * 0.2}px)`,
        }}
      ></div>
      <div
        className="absolute -top-10 -right-10 w-72 h-72 bg-[#b6c1a5] rounded-full mix-blend-multiply blur-2xl opacity-40 animate-pulse"
        style={{ transform: `translateY(${offsetY * 0.15}px)` }}
      ></div>
    </section>
  );
}
