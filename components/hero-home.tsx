"use client";

import { useEffect, useState } from "react";

export default function HeroHome() {
  const [lit, setLit] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [stars, setStars] = useState<
    { size: number; top: number; left: number; opacity: number }[]
  >([]);

  // ⛔ Temporarily lock scrolling on mount
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const unlockTimer = setTimeout(() => {
      document.body.style.overflow = "auto";
    }, 3000);
    return () => clearTimeout(unlockTimer);
  }, []);

  // ✨ Generate stars once
  useEffect(() => {
    const generatedStars = Array.from({ length: 20 }).map(() => ({
      size: Math.random() * 3 + 1,
      top: Math.random() * 100,
      left: Math.random() * 100,
      opacity: Math.random() * 0.7 + 0.3,
    }));
    setStars(generatedStars);
  }, []);

  // 🌗 Fade and light timing
  useEffect(() => {
    const darknessTimer = setTimeout(() => setFadeIn(true), 800);
    const lightTimer = setTimeout(() => setLit(true), 1600);
    return () => {
      clearTimeout(darknessTimer);
      clearTimeout(lightTimer);
    };
  }, []);

  // 🌀 Smooth scroll handlers
  const handleExploreClick = () => {
    window.scrollTo({
      top: window.innerHeight, // scroll one screen down
      behavior: "smooth",
    });
  };

  const handleMissionClick = () => {
    window.scrollTo({
      top: window.innerHeight * 2, // scroll further down (2 screens)
      behavior: "smooth",
    });
  };

  return (
    <section
      className={`relative flex items-center justify-center min-h-screen overflow-hidden transition-colors duration-[2500ms] ${
        lit
          ? "bg-gradient-to-b from-black via-[#1a0f00] to-[#ff9b40]"
          : "bg-black"
      }`}
    >
      {/* 🌌 Starfield Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {stars.map((star, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-white transition-opacity duration-[2000ms] ${
              fadeIn ? "opacity-100" : "opacity-0"
            }`}
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              top: `${star.top}%`,
              left: `${star.left}%`,
              boxShadow: `0 0 ${star.size * 4}px rgba(255,255,255,${star.opacity})`,
            }}
          ></div>
        ))}
      </div>

      {/* 🔒 Darkness overlay */}
      <div
        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-[1500ms] pointer-events-none ${
          fadeIn ? "opacity-0" : "opacity-100"
        }`}
        style={{ backgroundColor: "black" }}
      ></div>

      {/* 🔥 Light glow */}
      <div
        className={`absolute inset-0 transition-[box-shadow] duration-[1500ms] ${
          lit ? "shadow-[0_0_150px_40px_rgba(255,160,80,0.5)]" : ""
        }`}
      ></div>

      {/* 🌟 Hero Content */}
      <div className="relative z-10 text-center px-4">
        <h1
          className={`text-5xl md:text-6xl font-nacelle font-semibold transition-all duration-[2500ms] ${
            lit
              ? "text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-yellow-200 to-white opacity-100"
              : "text-transparent opacity-0"
          }`}
        >
          Noon AI – Smart Recruiter
        </h1>

        <p
          className={`mt-6 text-lg max-w-2xl mx-auto transition-opacity duration-[2500ms] ${
            lit ? "text-white/80 opacity-100" : "opacity-0"
          }`}
        >
          Noon AI helps recruiters at top companies hire smarter, faster, and
          more efficiently with the power of artificial intelligence.
        </p>

        <div
          className={`mt-10 flex flex-col sm:flex-row gap-4 justify-center transition-opacity duration-[2500ms] ${
            lit ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* ✅ Primary Button — scroll 1 screen */}
          <button
            onClick={handleExploreClick}
            className="group relative px-8 py-3 text-lg font-medium text-white rounded-2xl border border-amber-400/40 bg-gradient-to-r from-amber-600/30 to-amber-500/10 shadow-[0_0_15px_rgba(255,180,80,0.2)] backdrop-blur-sm transition-all duration-500 hover:from-amber-500/40 hover:to-amber-300/20 hover:shadow-[0_0_30px_rgba(255,200,100,0.4)] hover:scale-[1.03]"
          >
            <span className="relative z-10">Explore →</span>
            <span className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></span>
          </button>

          {/* 🌙 Secondary Button — scroll further */}
          <button
            onClick={handleMissionClick}
            className="relative px-8 py-3 text-lg font-medium text-white/80 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:text-white hover:border-amber-400/50 hover:shadow-[0_0_20px_rgba(255,180,80,0.25)] hover:bg-amber-400/10 hover:scale-[1.03]"
          >
            Our Mission
          </button>
        </div>
      </div>
    </section>
  );
}
