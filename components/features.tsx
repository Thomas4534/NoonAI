import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function Features() {
  return (
    // 🌇 Smooth orange-black transition into Testimonials’ blue base
    <section className="relative bg-gradient-to-b from-[#0d0a0f] via-[#1a0f10] via-[#2b1608]/90 to-[#2b1608]/20 text-amber-100">
      {/* ✨ Soft amber glow fading down */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#ffb347]/30 via-transparent to-transparent blur-2xl opacity-80"
        aria-hidden="true"
      ></div>

      {/* 🔶 Subtle bottom orange glow blending into Testimonials blue */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#ff9b40]/30 via-[#1a0f22]/10 to-transparent blur-3xl opacity-60"
        aria-hidden="true"
      ></div>

      {/* Decorative blurred shapes */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2 opacity-20"
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
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-25"
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

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t border-amber-400/20 py-16 md:py-24">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-8 text-center md:pb-16">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-amber-300/60 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-amber-300/60">
              <span className="inline-flex bg-gradient-to-r from-amber-400 via-orange-300 to-yellow-200 bg-clip-text text-transparent">
                Core Features
              </span>
            </div>

            {/* 🌅 Warm animated headline */}
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,#fbbf24,#f97316,#fb923c,#fde68a)] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Intelligent tools, built for modern creators
            </h2>

            <p className="text-lg text-amber-200/70">
              NoonAI streamlines your workflow with powerful, intuitive AI tools
              designed to think, adapt, and create with you.
            </p>
          </div>

          {/* Items grid */}
          <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-3">
            {[
              {
                title: "Smart Document Understanding",
                text: "NoonAI reads and summarizes your files in seconds, giving you the key insights instantly.",
              },
              {
                title: "Contextual Conversations",
                text: "Chat naturally — NoonAI remembers context and responds like a real collaborator.",
              },
              {
                title: "Collaborative Projects",
                text: "Share spaces with teammates to plan, edit, and create together effortlessly.",
              },
              {
                title: "Adaptive Memory",
                text: "NoonAI learns your tone, preferences, and workflow to deliver personalized results.",
              },
              {
                title: "Automated Research",
                text: "Quickly gather and verify reliable information without switching tabs.",
              },
              {
                title: "Seamless Integrations",
                text: "Connect NoonAI with Notion, Figma, or Slack for smooth, synced collaboration.",
              },
            ].map((feature, i) => (
              <article
                key={i}
                className="transition-transform duration-300 hover:scale-105"
              >
                <svg
                  className="mb-3 fill-amber-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                >
                  <circle cx="12" cy="12" r="10" fillOpacity="0.15" />
                  <path
                    d="M12 6v6l4 2"
                    stroke="#fbbf24"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-amber-100">
                  {feature.title}
                </h3>
                <p className="text-amber-200/70">{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
