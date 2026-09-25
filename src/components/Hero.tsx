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
    <section id="hero" className="relative w-full min-h-screen flex flex-col justify-between px-4 sm:px-6 lg:px-8 pt-28 pb-12">
      <div className="z-10 w-full max-w-7xl mx-auto flex flex-col justify-center flex-1">
        {/* Top Telemetry / Status Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8 sm:mb-12 font-mono text-xs">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-md w-fit"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
            <span className="text-[10px] sm:text-xs font-mono tracking-widest uppercase text-emerald-300 font-medium">
              SYSTEM SECURE • AVAILABLE FOR CONTRACTS • 2026
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="flex items-center gap-3 text-[11px] sm:text-xs text-muted/70 tracking-widest uppercase font-mono"
          >
            <span>LAGOS, NG [UTC+1]</span>
            <span className="text-white/20">•</span>
            <span className="text-emerald-400/90 font-medium">SENTINEL SEC-OPS</span>
          </motion.div>
        </div>

        {/* Massive Full-Canvas Display Headline */}
        <div className="w-full text-left mb-8 sm:mb-12">
          {/* Identity Eyebrow */}
          <motion.p
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="text-muted text-xs sm:text-sm font-mono mb-3 tracking-[0.25em] uppercase flex items-center gap-2"
          >
            <span className="text-emerald-400">//</span>
            <span className="text-white font-medium">EMMANUEL OSHIKE</span>
            <span className="hidden sm:inline text-white/20">—</span>
            <span className="hidden sm:inline text-white/40 text-[11px]">DEFENSIVE SYSTEMS & CLOUD ARCHITECTURE</span>
          </motion.p>

          {/* Kinetic Decryption Lines */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="text-[2.2rem] xs:text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-black tracking-tight leading-[0.96] text-white"
            >
              <DecryptionText text="SOFTWARE ENGINEER" delay={0.3} />
            </motion.h1>
          </div>

          <div className="overflow-hidden mt-1 sm:mt-2">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
              className="text-[1.85rem] xs:text-3xl sm:text-5xl md:text-6xl lg:text-[4.75rem] xl:text-[5.5rem] font-black tracking-tight leading-[0.96] text-transparent"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.45)" }}
            >
              <DecryptionText text="& CYBERSECURITY ANALYST" delay={0.65} />
            </motion.h1>
          </div>
        </div>

        {/* Lower Two-Column Split (Left: Bio, CTAs, Arsenal; Right: Interactive HeroTerminal) */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start text-left">
          {/* Left Column: Bio, Tech Arsenal & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <p className="text-muted text-sm sm:text-base leading-relaxed">
                Architecting resilient full-stack systems and high-throughput network security telemetry. Specializing in threat detection pipelines, distributed web architecture, and zero-trust engineering.
              </p>

              {/* Core Arsenal Tagline */}
              <div className="pt-3 pb-1 border-t border-white/10">
                <span className="text-[10px] font-mono text-white/40 tracking-wider uppercase block mb-1.5">
                  Core Stack:
                </span>
                <div className="text-xs font-mono text-muted/80 tracking-wide flex flex-wrap gap-x-3 gap-y-1">
                  <span className="text-white/90">Next.js 16</span>
                  <span className="text-white/30">•</span>
                  <span className="text-white/90">TypeScript</span>
                  <span className="text-white/30">•</span>
                  <span className="text-emerald-400">Suricata IDS</span>
                  <span className="text-white/30">•</span>
                  <span className="text-white/90">Elastic SIEM</span>
                  <span className="text-white/30">•</span>
                  <span className="text-white/90">PostgreSQL</span>
                </div>
              </div>
            </div>

            {/* Action Triggers / CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={scrollToWork}
                className="px-6 py-3 rounded-lg bg-white text-black font-semibold text-xs uppercase tracking-widest hover:bg-neutral-200 transition-all shadow-lg shadow-white/10 cursor-pointer flex items-center justify-center gap-2 min-h-[44px]"
              >
                <span>Explore Work</span>
                <span>↓</span>
              </button>

              <button
                onClick={triggerTerminal}
                className="px-6 py-3 rounded-lg border border-white/20 bg-white/5 backdrop-blur-md text-white font-mono text-xs uppercase tracking-widest hover:bg-white/10 hover:border-emerald-500/40 transition-all cursor-pointer flex items-center justify-center gap-2 min-h-[44px]"
              >
                <span className="text-emerald-400">⌘K</span>
                <span>Terminal</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Hero Terminal Console */}
          <div className="lg:col-span-7 w-full">
            <HeroTerminal />
          </div>
        </div>
      </div>

      {/* Subtle Bottom Scroll Indicator */}
      <motion.div
        className="mt-12 flex flex-col items-center gap-1.5 z-10"
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
