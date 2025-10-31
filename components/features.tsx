"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function Features() {
  const [stars, setStars] = useState<
    { top: string; left: string; size: number; opacity: number }[]
  >([]);
  const [ships, setShips] = useState<
    { top: string; delay: number; duration: number }[]
  >([]);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  // Initialize background elements
  useEffect(() => {
    setStars(
      Array.from({ length: 15 }, () => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.4 + 0.2,
      }))
    );

    setShips(
      Array.from({ length: 6 }, () => ({
        top: `${Math.random() * 100}%`,
        delay: Math.random() * 10,
        duration: 10 + Math.random() * 10,
      }))
    );
  }, []);

  // Fade-in observer
  useEffect(() => {
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
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[linear-gradient(to_bottom,#000_0%,#1a0f00_20%,#2b1608_50%,#1a0f00_80%,#000_100%)] text-amber-100 overflow-hidden"
    >
      {/* Black top & bottom fades (for smooth section transitions) */}
      <div className="absolute top-0 inset-x-0 h-48 bg-gradient-to-b from-black to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-black to-transparent pointer-events-none" />

      {/* Ambient glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(255,200,120,0.08),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_90%,rgba(255,150,80,0.08),transparent_75%)] pointer-events-none" />

      {/* Stars */}
      {stars.map((s, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-full"
          style={{
            top: s.top,
            left: s.left,
            width: `${s.size}px`,
            height: `${s.size}px`,
            opacity: s.opacity,
            filter: "blur(0.5px)",
          }}
        />
      ))}

      {/* Moving white dots */}
      {ships.map((ship, i) => (
        <div
          key={i}
          className="absolute w-[3px] h-[3px] bg-white rounded-full shadow-[0_0_8px_2px_rgba(255,255,255,0.8)]"
          style={{
            top: ship.top,
            left: "-50px",
            animation: `fly ${ship.duration}s linear infinite`,
            animationDelay: `${ship.delay}s`,
          }}
        />
      ))}

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

          {/* Feature grid */}
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
                <div className="relative z-10 h-full w-full rounded-2xl bg-gradient-to-br from-[#1a0f10]/70 to-[#2b1608]/40 p-8 backdrop-blur-[1px] group-hover:from-[#2b1608]/60 group-hover:to-[#3b1f10]/60 transition-all duration-700">
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
        @keyframes fly {
          0% {
            transform: translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(120vw);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
