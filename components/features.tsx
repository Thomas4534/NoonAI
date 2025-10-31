"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function Features() {
  const [stars, setStars] = useState<
    {
      top: string;
      left: string;
      width: string;
      height: string;
      opacity: number;
      duration: number;
      delay: number;
    }[]
  >([]);
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;
    const generatedStars = Array.from({ length: 12 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      width: `${Math.random() * 1.8 + 0.5}px`,
      height: `${Math.random() * 1.8 + 0.5}px`,
      opacity: Math.random() * 0.3 + 0.1,
      duration: 8 + Math.random() * 6,
      delay: Math.random() * 5,
    }));
    setStars(generatedStars);
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [mounted]);

  if (!mounted)
    return (
      <section className="relative bg-gradient-to-b from-black via-[#2b1608]/70 to-black overflow-hidden" />
    );

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-b from-black via-[#2b1608]/70 to-black text-amber-100 overflow-hidden"
    >
      {/* 🌌 Ambient lighting gradients */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(255,180,90,0.12),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_90%,rgba(255,120,0,0.08),transparent_75%)]" />

      {/* Fades top & bottom */}
      <div className="pointer-events-none absolute top-0 inset-x-0 h-48 bg-gradient-to-b from-black via-transparent to-transparent" />
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-black via-transparent to-transparent" />

      {/* Ambient blobs + faint stars */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[20%] top-[25%] w-72 h-72 bg-amber-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute right-[15%] bottom-[20%] w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-700" />
        {stars.map((s, i) => (
          <div
            key={i}
            className="absolute bg-amber-300/10 rounded-full blur-[1px]"
            style={{
              top: s.top,
              left: s.left,
              width: s.width,
              height: s.height,
              opacity: s.opacity,
              animation: `float ${s.duration}s ease-in-out infinite`,
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Background shapes */}
      <Image
        className="pointer-events-none absolute left-1/2 top-[-5rem] -z-10 -translate-x-1/2 opacity-25"
        src={BlurredShapeGray}
        width={760}
        height={668}
        alt=""
      />
      <Image
        className="pointer-events-none absolute bottom-[-7rem] left-1/2 -z-10 -translate-x-[110%] opacity-35"
        src={BlurredShape}
        width={760}
        height={668}
        alt=""
      />

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t border-amber-400/20 py-28 md:py-36">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-amber-300/60 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-amber-300/60">
              <span className="inline-flex bg-gradient-to-r from-amber-400 via-orange-300 to-yellow-200 bg-clip-text text-transparent uppercase text-sm tracking-wide">
                Core Features
              </span>
            </div>

            <h2 className="animate-[gradient_8s_linear_infinite] bg-[linear-gradient(to_right,#fbbf24,#f97316,#fb923c,#fde68a)] bg-[length:200%_auto] bg-clip-text text-transparent font-nacelle text-4xl md:text-5xl font-semibold pb-6">
              Power, clarity, and creative intelligence
            </h2>

            <p className="text-lg text-amber-200/70 max-w-2xl mx-auto leading-relaxed">
              Explore tools designed to make your creative process faster,
              smarter, and beautifully intuitive — all powered by NoonAI.
            </p>
          </div>

          {/* 🔶 Feature Grid */}
          <div className="mt-24 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Smart Document Understanding",
                text: "Instantly read, summarize, and extract insights from your files — no scrolling required.",
              },
              {
                title: "Contextual Conversations",
                text: "Chat with your data and ideas; NoonAI remembers context and evolves with your workflow.",
              },
              {
                title: "Collaborative Projects",
                text: "Seamless spaces to ideate, write, and iterate with your team — creativity meets structure.",
              },
              {
                title: "Adaptive Memory",
                text: "Learns your tone, voice, and preferences over time for truly personalized results.",
              },
              {
                title: "Automated Research",
                text: "Pull verified sources and real-time data without leaving your workspace.",
              },
              {
                title: "Seamless Integrations",
                text: "Sync instantly with Notion, Figma, and Slack — your favorite tools, now smarter.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className={`group relative rounded-2xl border border-amber-400/10 bg-[radial-gradient(circle_at_top_left,rgba(255,200,100,0.06),transparent_70%)] p-[2px] transition-all duration-700 ease-out ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                } hover:scale-[1.05] hover:border-amber-400/40 hover:shadow-[0_0_60px_-10px_rgba(255,184,77,0.6)]`}
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                <div className="relative z-10 h-full w-full rounded-2xl bg-gradient-to-br from-[#1a0f10]/70 to-[#2b1608]/40 p-8 backdrop-blur-[1px] group-hover:from-[#2b1608]/60 group-hover:to-[#3b1f10]/60 transition-all duration-700 overflow-visible">
                  <div className="absolute -top-1 left-6 h-[3px] w-16 bg-gradient-to-r from-amber-400/80 via-orange-300/80 to-yellow-200/70 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <h3 className="mb-3 font-nacelle text-lg font-semibold text-amber-100 tracking-wide">
                    {feature.title}
                  </h3>
                  <p className="text-amber-200/70 text-sm leading-relaxed">
                    {feature.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ✨ Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  );
}
