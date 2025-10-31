"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Lightbulb, Globe2, Users } from "lucide-react";
import Spotlight from "@/components/spotlight";

export default function OurMission() {
  const [stars, setStars] = useState<
    { size: number; top: number; left: number; opacity: number }[]
  >([]);
  const [fadeIn, setFadeIn] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // ✅ Only run random logic on client
  useEffect(() => {
    setIsClient(true);
    const generatedStars = Array.from({ length: 60 }).map(() => ({
      size: Math.random() * 3 + 1,
      top: Math.random() * 100,
      left: Math.random() * 100,
      opacity: Math.random() * 0.6 + 0.4,
    }));
    setStars(generatedStars);

    const timer = setTimeout(() => setFadeIn(true), 400);
    return () => clearTimeout(timer);
  }, []);

  // ✅ During SSR, render only empty background (no random content)
  if (!isClient) {
    return (
      <section
        id="our-mission"
        className="relative bg-[linear-gradient(to_bottom,#ff9b40_0%,#1a0f00_35%,#000_90%,#000_100%)] pt-[calc(12rem+100px)] md:pt-[calc(14rem+100px)] overflow-hidden"
      />
    );
  }

  return (
    <section
      id="our-mission"
      className="relative bg-[linear-gradient(to_bottom,#ff9b40_0%,#1a0f00_35%,#000_90%,#000_100%)] pt-[calc(12rem+100px)] md:pt-[calc(14rem+100px)] overflow-hidden"
    >
      {/* ✨ Starfield Background */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((star, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-white transition-opacity duration-[1200ms] ${
              fadeIn ? "opacity-100" : "opacity-0"
            }`}
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              top: `${star.top}%`,
              left: `${star.left}%`,
              boxShadow: `0 0 ${star.size * 5}px rgba(255,255,255,${star.opacity})`,
            }}
          />
        ))}
      </div>

      {/* Ambient Glow */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#ff9b40]/40 via-transparent to-transparent blur-2xl opacity-70 pointer-events-none" />

      {/* 🌌 Content */}
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 z-10">
        <div className="pb-20 md:pb-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-[#ffb374]/60 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-[#ffb374]/60">
              <span className="inline-flex bg-gradient-to-r from-[#ffb374] to-[#ffdba5] bg-clip-text text-transparent drop-shadow-[0_0_6px_rgba(255,155,64,0.4)]">
                Our Mission
              </span>
            </div>

            <h2 className="bg-[linear-gradient(to_right,#ffffff,#ffb374,#ff9b40,#fff)] bg-[length:200%_auto] animate-[gradient_10s_linear_infinite] bg-clip-text text-transparent font-nacelle text-4xl md:text-5xl font-bold tracking-tight pb-6 drop-shadow-[0_0_15px_rgba(255,180,100,0.25)]">
              Building a Brighter Future with Intelligent Design
            </h2>

            <div className="max-w-2xl mx-auto bg-black/30 backdrop-blur-sm rounded-2xl p-6 shadow-[0_0_20px_rgba(255,155,64,0.1)] border border-[#ffb374]/10">
              <p className="text-lg text-amber-50/90 leading-relaxed">
                At{" "}
                <span className="text-[#ffb374] font-semibold">NoonAI</span>,
                our mission is to empower people through technology that learns,
                adapts, and amplifies human potential. We believe in a world
                where innovation and empathy coexist — where every system is
                built not just to work, but to{" "}
                <span className="text-[#ffb374]/90">understand</span>.
              </p>
            </div>
          </motion.div>

          {/* Mission Pillars */}
          <Spotlight className="group mx-auto mt-20 grid max-w-sm items-start gap-8 lg:max-w-none lg:grid-cols-3">
            <MissionCard
              icon={<Lightbulb className="text-[#ffb374]" size={40} />}
              title="Innovation with Purpose"
              text="We create solutions that solve real problems, turning cutting-edge AI into everyday tools that improve lives."
            />
            <MissionCard
              icon={<Users className="text-[#ffb374]" size={40} />}
              title="Human-Centered Design"
              text="Every algorithm, every interface, every feature — crafted to serve people first, with clarity and care."
            />
            <MissionCard
              icon={<Globe2 className="text-[#ffb374]" size={40} />}
              title="Sustainable Impact"
              text="Our goal isn’t speed — it’s legacy. We aim to build systems that empower communities and endure over time."
            />
          </Spotlight>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mt-24 max-w-3xl mx-auto text-center text-white/80"
          >
            <p className="text-lg italic leading-relaxed drop-shadow-[0_0_6px_rgba(255,155,64,0.3)]">
              “Technology should not replace people — it should remind us how
              extraordinary we are.”
            </p>
            <p className="mt-2 text-[#ffb374] font-semibold">
              — The NoonAI Team
            </p>
          </motion.div>
        </div>
      </div>

      {/* ⚫ Pitch Black Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-black pointer-events-none" />
    </section>
  );
}

// 🌟 Mission Card
function MissionCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.04 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1b1305] via-[#0e0903] to-black p-[1px] shadow-[0_0_30px_rgba(255,155,64,0.15)] hover:shadow-[0_0_60px_rgba(255,155,64,0.5)] transition-all duration-700"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,180,80,0.25),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl" />
      <div className="relative z-10 flex flex-col items-center text-center bg-gradient-to-b from-[#1b1305]/90 via-[#0e0903]/90 to-black/90 p-8 rounded-[inherit] backdrop-blur-md">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-semibold bg-gradient-to-r from-[#ffb374] to-[#ff9b40] bg-clip-text text-transparent mb-3 drop-shadow-[0_0_6px_rgba(255,155,64,0.4)]">
          {title}
        </h3>
        <p className="text-amber-50/90 leading-relaxed">{text}</p>
        <div className="mt-6 h-px w-1/2 bg-gradient-to-r from-transparent via-[#ffb374]/50 to-transparent opacity-70" />
      </div>
    </motion.div>
  );
}
