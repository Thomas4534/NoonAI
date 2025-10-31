"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import FooterIllustration from "@/public/images/footer-illustration.svg";

export default function Footer() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.innerHeight + window.scrollY;
      const bottom = document.body.offsetHeight - 100; // 100px before reaching bottom
      if (scrollPos >= bottom) setVisible(true);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="relative overflow-hidden text-amber-100 bg-gradient-to-b from-[#1a2e88] via-[#0f1420] to-black py-20">
      {/* 🌌 Background illustration */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <Image
          className="max-w-none object-cover w-full h-full"
          src={FooterIllustration}
          width={1076}
          height={378}
          alt="Footer illustration"
        />
      </div>

      {/* 🌠 Cinematic Reveal Section */}
      <div className="relative text-center space-y-4">
        <motion.p
          className="text-amber-200/80 text-sm tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Noon AI 2025 ©
        </motion.p>

        <motion.p
          className="text-amber-300/70 text-xs italic"
          initial={{ opacity: 0, y: 15 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Designed with purpose.
        </motion.p>

        <motion.p
          className="text-amber-400/70 text-xs"
          initial={{ opacity: 0, y: 15 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 1 }}
        >
          Every line of code tells a story.
        </motion.p>
      </div>

      {/* 🎬 Subtle fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black via-transparent pointer-events-none" />
    </footer>
  );
}
