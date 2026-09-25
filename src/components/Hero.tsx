"use client";
import { motion } from "framer-motion";
import DecryptionText from "./DecryptionText";
import HeroTerminal from "./HeroTerminal";
import { useLenis } from "lenis/react";

export default function Hero() {
  const lenis = useLenis();

  const scrollToWork = () => {
    const el = document.getElementById("work");
    if (el) {
      if (lenis) {
        lenis.scrollTo(el, { offset: -80 });
      } else {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const triggerTerminal = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new KeyboardEvent("keydown", { key: "k", metaKey: true, ctrlKey: true, bubbles: true })
      );
    }
  };

  return (
    <section id="hero" className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-28 pb-16">
      <div className="z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-md mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
          <span className="text-[10px] sm:text-xs font-mono tracking-widest uppercase text-emerald-300 font-medium">
            SYSTEM SECURE • AVAILABLE FOR CONTRACTS • 2026
          </span>
        </motion.div>

        {/* Identity Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="text-muted text-xs sm:text-sm font-mono mb-3 tracking-[0.25em] uppercase"
        >
          Emmanuel Oshike
        </motion.p>

        {/* Kinetic Decryption Headline */}
        <div className="overflow-hidden mb-1 w-full">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-[2.1rem] xs:text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-black tracking-tight leading-[1.05]"
          >
            <DecryptionText text="SOFTWARE ENGINEER" delay={0.4} />
          </motion.h1>
        </div>

        <div className="overflow-hidden mb-6 sm:mb-8 w-full">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="text-[1.75rem] xs:text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-black tracking-tight leading-[1.05] text-transparent"
            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}
          >
            <DecryptionText text="& CYBERSECURITY ANALYST" delay={0.7} />
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-2xl text-muted text-sm sm:text-base md:text-lg leading-relaxed mb-8 px-2"
        >
          Architecting resilient full-stack systems and high-throughput network security telemetry.
        </motion.p>

        {/* Action Triggers / CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-5 w-full max-w-md"
        >
          <button
            onClick={scrollToWork}
            className="flex-1 sm:flex-none px-7 py-3 rounded-lg bg-white text-black font-semibold text-xs uppercase tracking-widest hover:bg-neutral-200 transition-all shadow-lg shadow-white/10 cursor-pointer flex items-center justify-center gap-2 min-h-[44px]"
          >
            <span>Explore Work</span>
            <span>↓</span>
          </button>

          <button
            onClick={triggerTerminal}
            className="flex-1 sm:flex-none px-7 py-3 rounded-lg border border-white/20 bg-white/5 backdrop-blur-md text-white font-mono text-xs uppercase tracking-widest hover:bg-white/10 hover:border-emerald-500/40 transition-all cursor-pointer flex items-center justify-center gap-2 min-h-[44px]"
          >
            <span className="text-emerald-400">⌘K</span>
            <span>Terminal</span>
          </button>
        </motion.div>

        {/* Quick Tech Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-[11px] font-mono text-muted/60 tracking-wider uppercase mb-10"
        >
          Next.js 16 • TypeScript • Suricata IDS • Elastic Stack • PostgreSQL
        </motion.div>

        {/* Centerpiece Hero Terminal */}
        <div className="w-full max-w-4xl">
          <HeroTerminal />
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="mt-12 flex flex-col items-center gap-1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <span className="text-[9px] font-mono tracking-widest uppercase text-muted/60">Scroll to Explore</span>
        <div className="w-[1px] h-6 bg-border overflow-hidden relative">
          <motion.div
            className="w-full h-full bg-accent absolute top-0 left-0"
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
