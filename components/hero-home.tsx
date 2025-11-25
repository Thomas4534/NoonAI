"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroHome() {
  const [mounted, setMounted] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [stars, setStars] = useState<
    { size: number; top: number; left: number; opacity: number }[]
  >([]);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;
    const s = Array.from({ length: 60 }).map(() => ({
      size: Math.random() * 2.5 + 0.5,
      top: Math.random() * 100,
      left: Math.random() * 100,
      opacity: Math.random() * 0.7 + 0.3,
    }));
    setStars(s);
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;
    const timer = setTimeout(() => setShowText(true), 1800);
    return () => clearTimeout(timer);
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;
    document.body.style.overflow = "hidden";
    const unlock = setTimeout(() => (document.body.style.overflow = "auto"), 4000);
    return () => clearTimeout(unlock);
  }, [mounted]);

  if (!mounted) return null;

  return (
    <section
      className={`relative flex items-center justify-center min-h-screen overflow-hidden transition-colors duration-[2500ms]
      bg-[linear-gradient(to_bottom,#000_0%,#1a0f00_20%,#ff9b40_85%)]`}
    >
      {/* 🌌 Starfield */}
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((s, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${s.size}px`,
              height: `${s.size}px`,
              top: `${s.top}%`,
              left: `${s.left}%`,
              opacity: s.opacity,
              boxShadow: `0 0 ${s.size * 6}px rgba(255,255,255,${s.opacity})`,
            }}
            animate={{
              y: [0, Math.random() * 10 - 5],
              opacity: [s.opacity, s.opacity * 0.9, s.opacity],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
        ))}
      </div>

      {/* 🔥 Soft orange glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-[#ffb770]/20 via-transparent to-[#ff9b40]/40 blur-[120px]"
        animate={{ opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 🌗 Fade overlay */}
      <motion.div
        className="absolute inset-0 bg-black"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 2.2, ease: "easeOut" }}
      />

      {/* 🌟 Hero Content */}
      <div className="relative z-10 text-center px-4 mt-[-6rem] md:mt-[-8rem]">
        <AnimatePresence>
          {showText && (
            <>
              <motion.h1
                className="text-5xl md:text-7xl font-nacelle font-semibold bg-gradient-to-r from-amber-100 via-yellow-300 to-white bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,200,120,0.3)]"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.6, ease: "easeOut" }}
              >
                Noon AI — Smart Recruiter
              </motion.h1>

              <motion.p
                className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 1.4 }}
              >
                Empowering recruiters to see beyond résumés.
                Precision hiring through intelligence and intuition.
              </motion.p>

              <motion.div
                className="mt-12 flex flex-col sm:flex-row gap-5 justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1.2 }}
              >
                {/* 🔸 Button 1 */}
                <motion.button
                  onClick={() => setShowPopup(true)}
                  className="group relative px-10 py-3 rounded-2xl text-lg font-semibold border border-amber-400/40 bg-gradient-to-r from-amber-700/30 to-amber-400/10 shadow-[0_0_20px_rgba(255,180,80,0.3)] backdrop-blur-sm transition-all duration-500 hover:scale-[1.05]"
                  whileHover={{ boxShadow: "0 0 40px rgba(255,200,120,0.6)" }}
                >
                  <span className="relative z-10">Our Mission</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                </motion.button>

                {/* 🔸 Button 2 */}
                <motion.button
                  onClick={() => setShowPopup(true)}
                  className="relative px-10 py-3 text-lg font-semibold text-white/80 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:text-white hover:border-amber-400/50 hover:scale-[1.05]"
                  whileHover={{ boxShadow: "0 0 25px rgba(255,180,80,0.3)" }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* 🕯️ Fade edges */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black via-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-[#ff9b40]/40 blur-3xl opacity-70 pointer-events-none" />

      {/* 💬 Demo Popup */}
      <AnimatePresence>
        {showPopup && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPopup(false)}
            />
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50 px-6"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="relative max-w-md w-full rounded-3xl bg-gradient-to-br from-[#1a1a2e]/90 via-[#2a2a6e]/80 to-[#ff9b40]/20 p-8 shadow-[0_0_50px_rgba(255,160,80,0.4)] border border-amber-300/20 backdrop-blur-lg text-center">
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent mb-3">
                  Demo Version
                </h3>
                <p className="text-amber-100/80 mb-6 leading-relaxed">
                  This website is a demo preview of <strong>Noon AI</strong>.
                  Some features are currently disabled while we refine the experience.
                </p>
                <button
                  onClick={() => setShowPopup(false)}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-semibold shadow-[0_0_25px_rgba(255,200,120,0.5)] hover:opacity-90 transition-all"
                >
                  Got it
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
