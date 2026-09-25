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
    <section id="hero" className="relative w-full min-h-screen flex flex-col justify-between px-6 sm:px-10 lg:px-16 pt-32 sm:pt-36 pb-12 overflow-hidden">
      <div className="z-10 w-full max-w-7xl mx-auto flex-1 flex flex-col justify-center">
        {/* Giant Name Headline — Jassem Architectural Style */}
        <div className="w-full text-left mb-6 sm:mb-8 select-none">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-outfit text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[9rem] font-black tracking-tight leading-[0.88] uppercase text-white"
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
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mt-4 sm:mt-6">
          {/* Bottom-Left: Role, Bio & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-6 flex flex-col justify-end space-y-5"
          >
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white/90 tracking-tight mb-2">
                Software Engineer & Cybersecurity Analyst.
              </h2>
              <p className="text-muted text-sm sm:text-base leading-relaxed max-w-md">
                Crafting high-performance digital systems with a focus on resilient distributed architecture, threat detection, and clean engineering.
              </p>
            </div>

            {/* CTAs */}
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

          {/* Bottom-Right: Pinned Terminal Console */}
          <div className="lg:col-span-6 w-full flex justify-start lg:justify-end">
            <HeroTerminal />
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        className="mt-8 flex flex-col items-center gap-1.5 z-10"
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
