"use client";

import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden text-amber-100 bg-gradient-to-b from-[#1a2e88] via-[#0f1420] to-black py-10">
      {/* Background illustration */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <Image
          className="max-w-none object-cover w-full h-full"
          src={FooterIllustration}
          width={1076}
          height={378}
          alt="Footer illustration"
        />
      </div>

      {/* Centered text only */}
      <div className="relative text-center">
        <p className="text-sm text-amber-200/80">
          Noon AI 2025 ©
        </p>
      </div>
    </footer>
  );
}
