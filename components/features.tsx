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
  const [showQuotes, setShowQuotes] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const quotesRef = useRef<HTMLDivElement | null>(null);

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

  useEffect(() => {
    const observer1 = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer1.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer1.observe(sectionRef.current);

    const observer2 = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowQuotes(true);
          observer2.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (quotesRef.current) observer2.observe(quotesRef.current);

    return () => {
      observer1.disconnect();
      observer2.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[linear-gradient(to_bottom,#000_0%,#000_10%,#120800_25%,#2b1608_50%,#120800_75%,#000_90%,#000_100%)] text-amber-100 overflow-hidden"
    >
      {/* Ambient glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,180,80,0.07),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(255,130,50,0.05),transparent_70%)] pointer-events-none" />

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

      {/* Ships */}
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

      {/* ======== MAIN CONTENT ======== */}
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* ==== Top Features Section ==== */}
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

          {/* Feature Cards */}
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
              <InteractiveFeatureCard
                key={i}
                title={feature.title}
                text={feature.text}
                delay={i * 0.15}
                visible={visible}
              />
            ))}
          </div>
        </div>

        {/* ==== How It Works Section ==== */}
        <div className="border-t border-amber-400/20 py-32 md:py-40" ref={quotesRef}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-300/70 uppercase tracking-widest text-sm">
              How It Works
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-nacelle font-semibold bg-gradient-to-r from-amber-400 via-orange-300 to-yellow-200 bg-clip-text text-transparent">
              Clone your best recruiter. Scale infinitely.
            </h2>
            <p className="mt-4 text-amber-200/70 text-lg">
              NoonAI captures how your top recruiter thinks, talks, and decides —
              then reproduces it with language intelligence, so you can build a
              world-class team faster than ever.
            </p>
          </div>

          <div className="relative flex flex-col items-center md:flex-row md:justify-center md:space-x-28 mt-24">
            {[
              {
                step: "1",
                title: "Capture Human Expertise",
                quote:
                  "“It feels like having your best recruiter working 24/7 — perfectly aligned with your tone and judgment.”",
              },
              {
                step: "2",
                title: "Train the AI Clone",
                quote:
                  "“NoonAI studies every interaction, learning how your recruiter screens, writes, and qualifies candidates.”",
              },
              {
                step: "3",
                title: "Deploy and Scale",
                quote:
                  "“Suddenly, you’re running a global recruiting operation — powered by one perfect AI twin.”",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`relative text-center md:text-left max-w-xs md:max-w-sm group transition-all duration-700 ease-out ${
                  showQuotes
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 0.3}s` }}
              >
                <div className="text-5xl font-bold text-amber-500/80 mb-4 group-hover:text-amber-300 transition-colors duration-300">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-amber-100 mb-3">
                  {item.title}
                </h3>
                <p className="italic text-amber-200/70 leading-relaxed group-hover:text-amber-100/90 transition-colors duration-500">
                  {item.quote}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

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

// === Interactive Card Component ===
function InteractiveFeatureCard({
  title,
  text,
  delay,
  visible,
}: {
  title: string;
  text: string;
  delay: number;
  visible: boolean;
}) {
  const [coords, setCoords] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setCoords({ x, y });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`group relative rounded-2xl border border-amber-400/10 p-[2px] transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } hover:scale-[1.07] hover:border-amber-400/40 hover:shadow-[0_0_80px_-10px_rgba(255,184,77,0.7)]`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background: `radial-gradient(circle at ${coords.x}% ${coords.y}%, rgba(255,190,90,0.15), transparent 60%)`,
        }}
      />
      <div className="relative z-10 h-full w-full rounded-2xl bg-gradient-to-br from-[#1a0f10]/70 to-[#2b1608]/40 p-8 backdrop-blur-[1px] transition-all duration-700">
        <div className="absolute -top-1 left-6 h-[3px] w-16 bg-gradient-to-r from-amber-400/80 via-orange-300/80 to-yellow-200/70 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <h3 className="mb-3 font-nacelle text-lg font-semibold text-amber-100 tracking-wide">
          {title}
        </h3>
        <p className="text-amber-200/70 text-sm leading-relaxed">{text}</p>
      </div>
    </div>
  );
}
