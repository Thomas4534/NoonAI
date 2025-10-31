"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";

const testimonials = [
  {
    name: "Kolena Maxwell",
    company: "Goldman Sachs",
    content:
      "Noon AI has completely changed the way we recruit. What used to take weeks now happens in hours — and with better precision. It’s like having an entire analytics team built right into the hiring process.",
  },
  {
    name: "Vicki Tung",
    company: "Logitech",
    content:
      "We integrated Noon AI across multiple departments, and the results were immediate. The platform identifies top candidates effortlessly while maintaining a human touch. It’s become essential to our workflow.",
  },
  {
    name: "Patricia Porter",
    company: "MetLife",
    content:
      "Noon AI allows our recruiters to focus on what really matters — people. The automation feels intelligent, not robotic, and it’s helped us make more confident, data-driven hiring decisions.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [stars, setStars] = useState<{ top: string; left: string; delay: number }[]>([]);

  useEffect(() => setIsClient(true), []);

  useEffect(() => {
    if (!isClient) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isClient]);

  useEffect(() => {
    const s = Array.from({ length: 30 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 4,
    }));
    setStars(s);
  }, []);

  if (!isClient) return null;

  const { name, company, content } = testimonials[index];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-black via-[#0e0f20] to-[#1a2e88] text-amber-100">
      {/* ✨ Base gradient overlays */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-[#1a1530]/50 to-[#132c80]/60 opacity-80"
        aria-hidden="true"
      />

      {/* 🌠 Parallax blurred shapes */}
      <motion.div
        className="absolute left-1/2 top-0 -translate-x-[130%] opacity-25 saturate-[0.8] -z-10"
        aria-hidden="true"
        animate={{ y: [0, 20, 0], rotate: [0, 2, -2, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image src={BlurredShapeGray} width={760} height={668} alt="" className="max-w-none" priority />
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-1/2 translate-x-[-50%] opacity-25 saturate-[1.1] -z-10"
        aria-hidden="true"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image src={BlurredShape} width={760} height={668} alt="" className="max-w-none" />
      </motion.div>

      {/* 🌌 Stars */}
      {stars.map((s, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-amber-100/60 shadow-[0_0_6px_rgba(255,220,150,0.5)]"
          style={{
            width: "2px",
            height: "2px",
            top: s.top,
            left: s.left,
          }}
          animate={{ opacity: [0.2, 0.8, 0.3] }}
          transition={{
            duration: 3 + Math.random() * 2,
            delay: s.delay,
            repeat: Infinity,
          }}
        />
      ))}

      {/* ☄️ Comets */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[2px] h-[120px] bg-gradient-to-b from-amber-300/90 to-transparent blur-[1px] opacity-60 -z-10"
          initial={{ top: `${-20 - i * 15}%`, left: `${10 + i * 20}%` }}
          animate={{
            top: ["-20%", "120%"],
            left: [`${10 + i * 20}%`, `${15 + i * 20}%`],
            opacity: [0.7, 0.1],
          }}
          transition={{ duration: 7 + i * 2, repeat: Infinity, delay: i * 3 }}
        />
      ))}

      {/* 🚀 Spaceships */}
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={`ship-${i}`}
          className="absolute w-2 h-1 bg-gradient-to-r from-amber-200 via-white to-transparent rounded-full blur-[0.5px] opacity-70"
          initial={{ top: `${20 + i * 30}%`, left: "-10%" }}
          animate={{
            left: ["-10%", "110%"],
            y: [0, -3, 3, 0],
            rotate: [0, 5, -5, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{ duration: 25 + i * 8, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* 🌟 Main Content */}
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28 text-center relative z-10">
        {/* Title */}
        <div className="pb-10">
          <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-amber-300/60 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-amber-300/60">
            <span className="inline-flex bg-gradient-to-r from-amber-400 via-orange-300 to-yellow-200 bg-clip-text text-transparent text-sm uppercase tracking-wider">
              Trusted by Global Recruiters
            </span>
          </div>

          <h2
            className="animate-[gradient_10s_linear_infinite]
                       bg-[linear-gradient(90deg,#fbbf24,#f59e0b,#fb923c,#fcd34d,#93c5fd,#3b82f6,#2563eb,#93c5fd,#fcd34d,#fb923c,#f59e0b,#fbbf24)]
                       bg-[length:300%_auto]
                       bg-clip-text text-transparent
                       pb-4 font-nacelle text-4xl md:text-5xl font-semibold leading-tight"
          >
            What Recruiters Are Saying
          </h2>

          <p className="text-lg text-amber-200/70 max-w-2xl mx-auto">
            Real stories from teams that turned chaos into clarity with Noon AI.
          </p>
        </div>

        {/* 💬 Testimonial Card */}
        <div className="relative mx-auto max-w-2xl">
          <motion.div
            className="absolute inset-0 rounded-3xl bg-amber-300/10 blur-3xl"
            animate={{ opacity: [0.05, 0.25, 0.05], scale: [1, 1.05, 1] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <div className="relative h-[260px] md:h-[220px] overflow-hidden flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                className="absolute w-full"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.6 }}
              >
                <div className="rounded-3xl bg-gradient-to-br from-[#0b0b20]/80 via-[#11183a]/70 to-[#1536b4]/40 p-10 shadow-[0_0_40px_rgba(255,200,100,0.2)] backdrop-blur-md border border-amber-200/10 relative">
                  <p className="text-amber-100/90 text-lg leading-relaxed italic before:content-['“'] after:content-['”']">
                    {content}
                  </p>
                  <div className="pt-5 text-sm font-medium text-amber-200/90">
                    {name}
                    <span className="text-amber-500"> — </span>
                    <span className="text-amber-300/70">{company}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === index
                  ? "bg-amber-400 scale-125 shadow-[0_0_10px_rgba(255,200,100,0.5)]"
                  : "bg-amber-300/30 hover:bg-amber-300/60"
              }`}
              aria-label={`Show testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
