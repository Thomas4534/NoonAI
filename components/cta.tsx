"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function Cta() {
  const [popupVisible, setPopupVisible] = useState(false);

  const handleClick = () => {
    setPopupVisible(true);
  };

  return (
    <section className="relative overflow-hidden bg-[#1a2e88] text-orange-100">
      {/* ✨ Ambient background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#0e0f20]/50 via-[#142266]/70 to-[#1a2e88]" />
      <div className="absolute left-1/2 top-0 -translate-x-[120%] opacity-25 saturate-[0.8] -z-10">
        <Image
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt=""
          className="max-w-none"
          priority
        />
      </div>
      <div className="absolute bottom-0 left-1/2 translate-x-[-50%] opacity-25 saturate-[1.1] -z-10">
        <Image
          src={BlurredShape}
          width={760}
          height={668}
          alt=""
          className="max-w-none"
        />
      </div>

      {/* 🌟 Main CTA Panel */}
      <div className="mx-auto max-w-5xl px-6 py-24 md:py-32 text-center relative z-10">
        {/* Header */}
        <div className="pb-10">
          <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-orange-400/60 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-orange-400/60">
            <span className="inline-flex bg-gradient-to-r from-orange-400 via-red-400 to-amber-300 bg-clip-text text-transparent text-sm uppercase tracking-wider">
              Get Started with Noon AI
            </span>
          </div>

          <h2
            className="animate-[gradient_10s_linear_infinite]
                       bg-[linear-gradient(90deg,#f97316,#fb923c,#fbbf24,#f59e0b,#ef4444,#dc2626,#fb923c,#f97316)]
                       bg-[length:300%_auto]
                       bg-clip-text text-transparent
                       pb-4 font-nacelle text-4xl md:text-5xl font-semibold leading-tight"
          >
            Transform Your Recruitment Today
          </h2>

          <p className="text-lg text-orange-200/80 max-w-2xl mx-auto">
            Ready to see how Noon AI can elevate your hiring strategy? Automate
            intelligently, decide confidently, and hire better — faster.
          </p>
        </div>

        {/* CTA Panel */}
        <motion.div
          className="relative mx-auto max-w-2xl rounded-3xl bg-gradient-to-br from-[#0b0b20]/80 via-[#11183a]/70 to-[#1536b4]/40 p-10 shadow-[0_0_40px_rgba(255,100,50,0.3)] backdrop-blur-md border border-orange-400/10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-orange-100 mb-4">
            Start your free trial
          </h3>
          <p className="text-orange-200/80 mb-8 leading-relaxed">
            Join hundreds of teams already using Noon AI to revolutionize their
            workflow. Sign up in minutes — no credit card required.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={handleClick}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold hover:opacity-90 transition-all shadow-[0_0_25px_rgba(255,80,40,0.5)]"
            >
              Get Started
            </button>
            <button
              onClick={handleClick}
              className="px-6 py-3 rounded-xl border border-orange-400/60 text-orange-200 hover:bg-orange-400/10 transition-all"
            >
              Learn More
            </button>
          </div>

          <div className="absolute inset-0 rounded-3xl border border-orange-400/10 pointer-events-none [mask-image:radial-gradient(white,transparent_75%)]" />
        </motion.div>
      </div>

      {/* 💬 Demo Popup */}
      <AnimatePresence>
        {popupVisible && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPopupVisible(false)}
            />

            {/* Popup Card */}
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50 px-6"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <div className="relative max-w-md w-full rounded-3xl bg-gradient-to-br from-[#1a1a2e]/90 via-[#2a2a6e]/80 to-[#ff9b40]/20 p-8 shadow-[0_0_50px_rgba(255,160,80,0.4)] border border-orange-300/20 backdrop-blur-lg text-center">
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-orange-300 to-amber-400 bg-clip-text text-transparent mb-3">
                  Demo Version
                </h3>
                <p className="text-orange-100/80 mb-6 leading-relaxed">
                  This version of <strong>Noon AI</strong> is a demo preview.
                  Some features are disabled while we fine-tune the experience.
                </p>
                <button
                  onClick={() => setPopupVisible(false)}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold shadow-[0_0_20px_rgba(255,160,80,0.5)] hover:opacity-90 transition-all"
                >
                  Got it
                </button>

                {/* Glow border effect */}
                <div className="absolute inset-0 rounded-3xl border border-orange-400/20 pointer-events-none [mask-image:radial-gradient(white,transparent_70%)]" />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
