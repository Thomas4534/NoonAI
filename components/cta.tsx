"use client";

import { useState } from "react";
import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function Cta() {
  const [popup, setPopup] = useState<null | "build" | "demo">(null);

  const closePopup = () => setPopup(null);

  return (
    <section className="relative overflow-hidden bg-[#1a2e88] text-amber-100">
      {/* 🌀 Blurred ambient shape */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 translate-x-[-50%] opacity-25 saturate-[1.1]"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>

      {/* 🌌 Main content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24 md:py-32">
        <div className="bg-[#0c1130]/70 border border-amber-400/20 rounded-3xl backdrop-blur-sm py-14 md:py-20 px-6 text-center shadow-[0_0_40px_rgba(255,200,100,0.08)]">
          {/* 🌠 Animated gradient heading */}
          <h2
            className="animate-[gradient_8s_linear_infinite] bg-[linear-gradient(to_right,#fbbf24,#facc15,#fde68a,#93c5fd,#2563eb,#fbbf24)] bg-[length:200%_auto] bg-clip-text pb-8 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
            data-aos="fade-up"
          >
            Join the content-first platform
          </h2>

          {/* ✨ Supporting text */}
          <p
            className="text-amber-200/80 max-w-2xl mx-auto pb-10 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            Build, collaborate, and grow with tools that bring clarity and speed
            to your creative workflow.
          </p>

          {/* 🚀 CTA buttons */}
          <div
            className="flex flex-col sm:flex-row justify-center gap-4"
            data-aos="fade-up"
            data-aos-delay={400}
          >
            <button
              onClick={() => setPopup("build")}
              className="btn group bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200 text-black font-semibold shadow-md shadow-amber-500/20 hover:scale-105 transition-transform sm:w-auto"
            >
              <span className="inline-flex items-center">
                Start Building
                <span className="ml-1 tracking-normal text-black/50 transition-transform group-hover:translate-x-0.5">
                  -&gt;
                </span>
              </span>
            </button>

            <button
              onClick={() => setPopup("demo")}
              className="btn bg-[#11183a]/80 text-amber-200 font-medium rounded-xl border border-amber-300/30 hover:bg-[#1a2560]/80 hover:text-amber-100 transition-all sm:w-auto"
              data-aos="fade-up"
              data-aos-delay={600}
            >
              Schedule Demo
            </button>
          </div>
        </div>
      </div>

      {/* 💬 Popup Modal */}
      {popup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm transition-opacity animate-fadeIn"
          onClick={closePopup}
        >
          <div
            className="relative bg-[#0c1130]/90 border border-amber-400/30 rounded-2xl shadow-[0_0_50px_rgba(255,200,100,0.2)] text-center px-8 py-10 max-w-md w-[90%] text-amber-100"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closePopup}
              className="absolute top-3 right-4 text-amber-200 hover:text-white transition"
            >
              ✖
            </button>
            <h3 className="text-2xl font-semibold mb-4">
              {popup === "build" ? "Start Building" : "Schedule Demo"}
            </h3>
            <p className="text-amber-200/80 leading-relaxed">
              This feature is not available yet, but it’s coming soon!
            </p>
            <button
              onClick={closePopup}
              className="mt-6 px-6 py-2 rounded-xl bg-gradient-to-r from-amber-400/40 to-amber-300/30 border border-amber-400/30 text-white font-medium hover:scale-105 transition-transform"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
