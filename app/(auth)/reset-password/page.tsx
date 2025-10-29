"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ResetPassword() {
  const [lit, setLit] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [stars, setStars] = useState<
    { size: number; top: number; left: number; opacity: number }[]
  >([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 20 }).map(() => ({
      size: Math.random() * 3 + 1,
      top: Math.random() * 100,
      left: Math.random() * 100,
      opacity: Math.random() * 0.7 + 0.3,
    }));
    setStars(generatedStars);
  }, []);

  useEffect(() => {
    const darknessTimer = setTimeout(() => setFadeIn(true), 600);
    const lightTimer = setTimeout(() => setLit(true), 1400);
    return () => {
      clearTimeout(darknessTimer);
      clearTimeout(lightTimer);
    };
  }, []);

  return (
    <section
      className={`relative flex items-center justify-center min-h-screen overflow-hidden transition-colors duration-[2500ms] ${
        lit
          ? "bg-gradient-to-b from-black via-[#1a0f00] to-[#ff9b40]"
          : "bg-black"
      }`}
    >
      {/* Starfield */}
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
          />
        ))}
      </div>

      {/* Darkness overlay */}
      <div
        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-[1500ms] pointer-events-none ${
          fadeIn ? "opacity-0" : "opacity-100"
        }`}
        style={{ backgroundColor: "black" }}
      />

      {/* Ambient glow */}
      <div
        className={`absolute inset-0 transition-[box-shadow] duration-[1500ms] ${
          lit ? "shadow-[0_0_150px_40px_rgba(255,160,80,0.5)]" : ""
        }`}
      />

      {/* Form card */}
      <div
        className={`relative z-10 w-full max-w-md mx-auto text-center px-6 py-12 rounded-3xl backdrop-blur-sm border border-amber-400/20 transition-all duration-[2500ms] ${
          lit
            ? "bg-black/40 opacity-100 shadow-[0_0_40px_rgba(255,200,120,0.25)]"
            : "opacity-0"
        }`}
      >
        <h1
          className={`text-4xl md:text-5xl font-nacelle font-semibold mb-8 transition-all duration-[2500ms] ${
            lit
              ? "text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-yellow-200 to-white opacity-100"
              : "opacity-0"
          }`}
        >
          Reset your password
        </h1>

        <form className="space-y-6 mx-auto max-w-[400px]">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-white/70"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 rounded-xl bg-white/10 text-white placeholder-white/40 border border-white/20 focus:border-amber-400 focus:outline-none transition-all"
              placeholder="Your email"
            />
          </div>

          <button
            type="button"
            className="w-full py-3 rounded-xl text-lg font-medium text-white bg-gradient-to-r from-amber-600/40 to-amber-500/20 shadow-[0_0_20px_rgba(255,180,80,0.3)] backdrop-blur-sm transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(255,200,100,0.5)]"
          >
            Reset Password
          </button>

          <div className="flex items-center gap-3 text-center text-sm italic text-gray-400 before:h-px before:flex-1 before:bg-linear-to-r before:from-transparent before:via-gray-400/25 after:h-px after:flex-1 after:bg-linear-to-r after:from-transparent after:via-gray-400/25">
            or
          </div>

          <button
            type="button"
            className="w-full py-3 rounded-xl text-lg font-medium text-white/80 bg-white/10 border border-white/20 hover:bg-amber-400/10 hover:text-white hover:shadow-[0_0_20px_rgba(255,200,120,0.3)] transition-all duration-500"
          >
            Reset with Google
          </button>
        </form>

        <p className="mt-8 text-sm text-white/60">
          Remembered your password?{" "}
          <Link href="/signin" className="text-amber-300 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </section>
  );
}
