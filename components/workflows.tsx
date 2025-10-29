"use client";

import { useEffect, useState } from "react";
import Spotlight from "@/components/spotlight";

export default function Workflows() {
  const [stars, setStars] = useState<
    { size: number; top: number; left: number; opacity: number }[]
  >([]);
  const [fadeIn, setFadeIn] = useState(false);

  // ✨ Generate random stars client-side (prevents hydration mismatch)
  useEffect(() => {
    const generatedStars = Array.from({ length: 25 }).map(() => ({
      size: Math.random() * 3 + 1, // 1–4px
      top: Math.random() * 100,
      left: Math.random() * 100,
      opacity: Math.random() * 0.7 + 0.3,
    }));
    setStars(generatedStars);

    const timer = setTimeout(() => setFadeIn(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-[#ff9b40] via-[#1a0f00] to-black pt-48 md:pt-56 overflow-hidden">
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

      {/* 🔥 Subtle ambient glow at the top */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#ff9b40]/40 via-transparent to-transparent blur-3xl opacity-70 pointer-events-none"></div>

      {/* 🌠 Content */}
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20 relative z-10">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-[#ff9b40]/60 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-[#ff9b40]/60">
              <span className="inline-flex bg-gradient-to-r from-[#ff9b40] to-[#ffb374] bg-clip-text text-transparent">
                Smart Workflows
              </span>
            </div>

            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),#ffb374,#ff9b40,var(--color-gray-50),#ffb374,var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Automate. Adapt. Accelerate.
            </h2>

            <p className="text-lg text-white/80">
              NoonAI builds intelligent pipelines that learn, automate, and
              scale alongside your team — from concept to completion.
            </p>
          </div>

          {/* ✨ Spotlight cards */}
          <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3 relative z-10">
            <WorkflowCard
              title="Built-in Intelligence"
              text="Automate repetitive steps with AI modules that anticipate your next move."
            />
            <WorkflowCard
              title="Effortless Scaling"
              text="Expand projects instantly — NoonAI keeps every process fast, aligned, and reliable."
            />
            <WorkflowCard
              title="Custom Pipelines"
              text="Design flexible workflows that evolve with your product and team goals."
            />
          </Spotlight>
        </div>
      </div>
    </section>
  );
}

// 🔸 Glowing gradient card
function WorkflowCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="group relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-gray-950 to-black p-[1px] shadow-[0_0_25px_rgba(255,155,64,0.15)] hover:shadow-[0_0_45px_rgba(255,155,64,0.35)] transition-all duration-700">
      {/* Animated light sweep */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,180,80,0.25),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl"></div>

      {/* Inner content */}
      <div className="relative z-10 flex flex-col items-center text-center rounded-[inherit] bg-gradient-to-b from-[#1b1305] via-[#0e0903] to-black p-8 transition-transform duration-500 group-hover:-translate-y-1">
        {/* Top glowing accent */}
        <div className="mb-4 h-1 w-16 rounded-full bg-gradient-to-r from-[#ffb374] via-[#ff9b40] to-[#ffb374] opacity-70"></div>

        <h3 className="text-xl font-semibold bg-gradient-to-r from-[#ffb374] to-[#ff9b40] bg-clip-text text-transparent mb-3">
          {title}
        </h3>

        <p className="text-white/80 leading-relaxed">{text}</p>

        {/* Bottom shimmer line */}
        <div className="mt-6 h-px w-1/2 bg-gradient-to-r from-transparent via-[#ffb374]/50 to-transparent opacity-60"></div>
      </div>
    </div>
  );
}
