"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Users,
  Heart,
  MessageCircle,
  Briefcase,
  Zap,
  Globe,
} from "lucide-react";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function Cta() {
  const [popupVisible, setPopupVisible] = useState(false);
  const [count, setCount] = useState(5000);
  const [visibleSet, setVisibleSet] = useState(0);

  // 🧠 Prevent hydration mismatch: generate visuals only on client
  const [stars, setStars] = useState<any[]>([]);
  const [comets, setComets] = useState<any[]>([]);
  const [ships, setShips] = useState<any[]>([]);
  const [shootingStars, setShootingStars] = useState<any[]>([]);

  const handleClick = () => setPopupVisible(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c + Math.floor(Math.random() * 3));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleSet((prev) => (prev === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // 🌌 Generate random visuals once (client-side)
  useEffect(() => {
    setStars(
      Array.from({ length: 80 }, () => ({
        width: Math.random() * 2 + 1,
        height: Math.random() * 2 + 1,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        opacity: Math.random() * 0.8 + 0.2,
        zIndex: Math.floor(Math.random() * 3),
        duration: Math.random() * 8 + 6,
      }))
    );

    setComets(
      Array.from({ length: 5 }, (_, i) => ({
        top: `${Math.random() * 100}%`,
        left: `${-20 - i * 15}%`,
        rotate: Math.random() * -25,
        duration: 9 + i * 2,
        delay: i * 3,
      }))
    );

    setShips(
      Array.from({ length: 4 }, (_, i) => ({
        top: `${20 + i * 15}%`,
        left: `${i % 2 === 0 ? "10%" : "85%"}`,
        xDir: i % 2 === 0 ? 100 : -100,
        duration: 10 + i * 3,
      }))
    );

    setShootingStars(
      Array.from({ length: 3 }, () => ({
        top: `${Math.random() * 80}%`,
        left: `${Math.random() * 50}%`,
        delay: Math.random() * 8,
      }))
    );
  }, []);

  const panels = [
    { Icon: Users, title: "Global Recruiters", desc: "Used by 5,000+ hiring teams worldwide" },
    { Icon: Briefcase, title: "Enterprise Clients", desc: "Trusted by Fortune 500 companies" },
    { Icon: Zap, title: "AI Matching", desc: "70% faster candidate placement" },
    { Icon: Heart, title: "Loved by Teams", desc: "98% satisfaction from HR professionals" },
    { Icon: MessageCircle, title: "Collaboration", desc: "Seamless communication and feedback" },
    { Icon: Globe, title: "Worldwide Presence", desc: "Available in 50+ countries" },
  ];

  const visiblePanels = panels.slice(visibleSet * 3, visibleSet * 3 + 3);

  return (
    <section className="relative overflow-hidden bg-[#1a2e88] text-orange-100">
      {/* ✨ Ambient Background Layers */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#0e0f20]/50 via-[#142266]/70 to-[#1a2e88]" />
      <div className="absolute left-1/2 top-0 -translate-x-[120%] opacity-25 -z-10">
        <Image src={BlurredShapeGray} width={760} height={668} alt="" className="max-w-none" priority />
      </div>
      <div className="absolute bottom-0 left-1/2 translate-x-[-50%] opacity-25 -z-10">
        <Image src={BlurredShape} width={760} height={668} alt="" className="max-w-none" />
      </div>

      {/* 🌌 Parallax Stars */}
      {stars.map((s, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute bg-white rounded-full"
          style={{
            width: s.width,
            height: s.height,
            top: s.top,
            left: s.left,
            opacity: s.opacity,
            zIndex: s.zIndex,
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: s.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* ☄️ Comets */}
      {comets.map((c, i) => (
        <motion.div
          key={`comet-${i}`}
          className="absolute h-[2px] w-[80px] bg-gradient-to-r from-white via-orange-300 to-transparent rounded-full blur-[1px]"
          style={{
            top: c.top,
            left: c.left,
            rotate: c.rotate,
          }}
          animate={{
            x: ["0%", "130%"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: c.duration,
            repeat: Infinity,
            delay: c.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* 🛸 Floating Ships */}
      {ships.map((ship, i) => (
        <motion.div
          key={`ship-${i}`}
          className="absolute w-3 h-3 rounded-full bg-orange-400 shadow-[0_0_12px_3px_rgba(255,180,100,0.6)]"
          style={{
            top: ship.top,
            left: ship.left,
          }}
          animate={{
            x: [0, ship.xDir, 0],
            y: [0, -15, 0],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: ship.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* 🌠 Shooting Stars */}
      {shootingStars.map((s, i) => (
        <motion.div
          key={`shooting-${i}`}
          className="absolute h-[2px] w-[100px] bg-gradient-to-r from-white via-yellow-200 to-transparent rounded-full blur-[1px]"
          style={{
            top: s.top,
            left: s.left,
          }}
          animate={{
            x: ["0%", "200%"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: s.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* 🌟 Main CTA Content */}
      <div className="mx-auto max-w-6xl px-6 py-28 md:py-36 text-center relative z-10">
        <div className="pb-12">
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
            Ready to see how Noon AI can elevate your hiring strategy? Automate intelligently, decide confidently, and hire better — faster.
          </p>
        </div>

        {/* 💫 CTA Panel */}
        <motion.div
          className="relative mx-auto max-w-2xl rounded-3xl bg-gradient-to-br from-[#0b0b20]/80 via-[#11183a]/70 to-[#1536b4]/40 p-10 shadow-[0_0_40px_rgba(255,100,50,0.3)] backdrop-blur-md border border-orange-400/10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-orange-100 mb-4">Start Your Free Trial</h3>
          <p className="text-orange-200/80 mb-8 leading-relaxed">
            Join thousands of teams already using Noon AI to revolutionize their workflow. Sign up in minutes — no credit card required.
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

        {/* 🔄 Rotating Facts */}
        <div className="mt-24 flex justify-center gap-6 flex-wrap">
          <AnimatePresence mode="wait">
            {visiblePanels.map(({ Icon, title, desc }) => (
              <motion.div
                key={title}
                className="min-w-[280px] flex-shrink-0 rounded-3xl bg-gradient-to-br from-[#101a3a]/90 via-[#1a2e88]/80 to-[#ff9b40]/10 p-6 shadow-[0_0_25px_rgba(255,150,80,0.2)] border border-orange-300/10 backdrop-blur-md"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex flex-col items-center text-center">
                  <Icon className="w-10 h-10 text-orange-300 mb-3" />
                  <h4 className="font-semibold text-orange-100 mb-1">{title}</h4>
                  <p className="text-orange-200/70 text-sm">{desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* 💬 Demo Popup */}
      <AnimatePresence>
        {popupVisible && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPopupVisible(false)}
            />

            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50 px-6"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
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
                <div className="absolute inset-0 rounded-3xl border border-orange-400/20 pointer-events-none [mask-image:radial-gradient(white,transparent_70%)]" />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
