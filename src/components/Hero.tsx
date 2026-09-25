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
    <section id="hero" className="relative w-full min-h-[90vh] sm:min-h-screen flex flex-col justify-between px-5 sm:px-10 lg:px-16 pt-24 sm:pt-32 lg:pt-36 pb-8 sm:pb-12 overflow-hidden">
      <div className="z-10 w-full max-w-7xl mx-auto flex-1 flex flex-col justify-center">
        {/* Giant Name Headline — Jassem Architectural Style */}
        <div className="w-full text-left mb-5 sm:mb-8 select-none">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-outfit text-[3.25rem] xs:text-[4rem] sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[9rem] font-black tracking-tight leading-[0.9] sm:leading-[0.88] uppercase text-white"
          >
            <span className="block text-white">
              <DecryptionText text="EMMANUEL" delay={0.2} />
            </span>
            <span className="block text-neutral-400">
              <DecryptionText text="OSHIKE" delay={0.4} />
              <span className="text-white">.</span>
            </span>
          </motion.h1>
        </div>

        {/* Lower Canvas: Bio & CTAs on Left, Terminal on Right */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mt-2 sm:mt-6">
          {/* Bottom-Left: Role, Bio & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-6 flex flex-col justify-end space-y-4 sm:space-y-5"
          >
            <div>
              <h2 className="text-lg xs:text-xl sm:text-xl md:text-2xl font-semibold text-white/90 tracking-tight mb-2 text-balance">
                Software Engineer & Cybersecurity Analyst.
              </h2>
              <p className="text-muted text-xs xs:text-sm sm:text-base leading-relaxed max-w-md text-pretty">
                Crafting high-performance digital systems with a focus on resilient distributed architecture, threat detection, and clean engineering.
              </p>
            </div>

            {/* CTAs */}
            <div className="grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap items-center pt-1 w-full max-w-sm sm:max-w-none">
              <button
                onClick={scrollToWork}
                className="w-full sm:w-auto px-4 sm:px-6 py-3 rounded-lg bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-all shadow-lg shadow-white/10 cursor-pointer flex items-center justify-center gap-1.5 min-h-[44px]"
              >
                <span>Explore Work</span>
                <span>↓</span>
              </button>

              <button
                onClick={triggerTerminal}
                className="w-full sm:w-auto px-4 sm:px-6 py-3 rounded-lg border border-white/20 bg-white/5 backdrop-blur-md text-white font-mono text-xs uppercase tracking-wider hover:bg-white/10 hover:border-emerald-500/40 transition-all cursor-pointer flex items-center justify-center gap-1.5 min-h-[44px]"
              >
                <span className="text-emerald-400 font-bold">⌘K</span>
                <span>Terminal</span>
              </button>
            </div>

            {/* Live Telemetry Status Pill on Mobile */}
            <div className="flex lg:hidden items-center gap-2 pt-1 text-[10px] xs:text-[11px] font-mono text-muted/70">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_#34d399]" />
              <span>SENTINEL TELEMETRY ACTIVE • TAP ⌘K FOR CLI</span>
            </div>
          </motion.div>

          {/* Bottom-Right: Pinned Terminal Console (Desktop/Tablet) */}
          <div className="hidden lg:flex lg:col-span-6 w-full justify-end">
            <HeroTerminal />
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        className="mt-6 sm:mt-8 flex flex-col items-center gap-1.5 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-[9px] font-mono tracking-widest uppercase text-muted/50">Scroll to Explore</span>
        <div className="w-[1px] h-5 bg-border overflow-hidden relative">
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
