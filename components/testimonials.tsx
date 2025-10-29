"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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

  // 🔁 Automatically rotate every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const { name, company, content } = testimonials[index];

  return (
    <section className="relative bg-gradient-to-b from-[#1a0f10] via-[#0e0f20] to-[#1a2e88] text-amber-100 transition-colors duration-[2500ms] overflow-hidden">
      {/* 🌠 Background Glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-[#1a1530]/40 to-[#132c80]/40 opacity-70"
        aria-hidden="true"
      ></div>

      {/* Background Shapes */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-[130%] opacity-25 saturate-[0.8]"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>

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

      {/* 🌟 Content */}
      <div className="mx-auto max-w-4xl px-6 py-28 md:py-36 text-center relative z-10">
        {/* Header */}
        <div className="pb-10">
          <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-amber-300/60 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-amber-300/60">
            <span className="inline-flex bg-gradient-to-r from-amber-400 via-orange-300 to-yellow-200 bg-clip-text text-transparent">
              Trusted by Global Recruiters
            </span>
          </div>

          <h2
            className="animate-[gradient_12s_linear_infinite]
                       bg-[linear-gradient(90deg,#fbbf24,#f59e0b,#fb923c,#fcd34d,#93c5fd,#3b82f6,#2563eb,#93c5fd,#fcd34d,#fb923c,#f59e0b,#fbbf24)]
                       bg-[length:300%_auto]
                       bg-clip-text text-transparent
                       pb-4 font-nacelle text-3xl font-semibold md:text-4xl"
          >
            What Recruiters Are Saying
          </h2>
          <p className="text-lg text-amber-200/70">
            Hear how Noon AI is transforming recruitment at leading organizations worldwide.
          </p>
        </div>

        {/* 💬 Rotating Testimonial Card */}
        <div className="relative mt-10 h-56 flex items-center justify-center">
          <div
            key={index}
            className="absolute max-w-2xl mx-auto transition-all duration-[1000ms] ease-in-out opacity-100 animate-fadeIn rounded-2xl bg-gradient-to-br from-[#0b0b20]/90 via-[#11183a]/70 to-[#1536b4]/40 p-8 shadow-[0_0_30px_rgba(255,200,100,0.2)]"
          >
            <p className="text-amber-100/90 text-lg leading-relaxed italic before:content-['“'] after:content-['”']">
              {content}
            </p>
            <div className="pt-4 text-sm font-medium text-amber-200/90">
              {name}
              <span className="text-amber-500"> — </span>
              <span className="text-amber-300/70">{company}</span>
            </div>
          </div>
        </div>

        {/* ⭕ Indicator Dots */}
        <div className="mt-10 flex justify-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === index
                  ? "bg-amber-400 scale-110 shadow-[0_0_10px_rgba(255,200,100,0.5)]"
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
