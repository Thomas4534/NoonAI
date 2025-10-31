"use client";

import { useEffect } from "react";
import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";

export default function Home() {
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      clearTimeout(scrollTimeout);

      // Run this after the user stops scrolling for 200ms
      scrollTimeout = setTimeout(() => {
        const scrollY = window.scrollY;
        const vh = window.innerHeight;

        // Section top positions
        const heroTop = 0;
        const workflowsTop = vh; // assuming each section ~1 screen tall

        // Distance from section starts
        const distToHero = Math.abs(scrollY - heroTop);
        const distToWorkflows = Math.abs(scrollY - workflowsTop);

        // Only trigger auto-scroll if user is between Hero and Workflows
        if (scrollY > heroTop + vh * 0.2 && scrollY < workflowsTop + vh * 0.8) {
          if (distToHero < distToWorkflows) {
            // Scroll to Hero section
            window.scrollTo({ top: heroTop, behavior: "smooth" });
          } else {
            // Scroll to Workflows section + 300px
            window.scrollTo({ top: workflowsTop + 340, behavior: "smooth" });
          }
        }
      }, 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <PageIllustration />
      <Hero />
      <Workflows />
      <Features />
      <Testimonials />
      <Cta />
    </>
  );
}
