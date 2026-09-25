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
    <section id="hero" className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-24 pb-16">
      <div className="z-10 w-full max-w-7xl mx-auto flex flex-col items-center">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-md mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
          <span className="text-[10px] sm:text-xs font-mono tracking-widest uppercase text-emerald-300 font-medium">
            SYSTEM SECURE • AVAILABLE FOR CONTRACTS • 2026
          </span>
        </motion.div>

        {/* Widescreen 3-Column Command Deck / Mobile Responsive Flow */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 items-start w-full">
          {/* CENTER COLUMN: Kinetic Core & Mission (order-1 on mobile, lg:order-2 on desktop) */}
          <div className="w-full lg:col-span-6 flex flex-col items-center text-center order-1 lg:order-2 px-1 sm:px-2">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="text-muted text-[11px] sm:text-sm font-mono mb-2 tracking-[0.25em] uppercase"
            >
              Emmanuel Oshike
            </motion.p>

            {/* Kinetic Decryption Headline */}
            <div className="overflow-hidden mb-1 w-full">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="text-[1.85rem] xs:text-3xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black tracking-tight leading-[1.1] sm:leading-[1.05]"
              >
                <DecryptionText text="SOFTWARE ENGINEER" delay={0.4} />
              </motion.h1>
            </div>

            <div className="overflow-hidden mb-4 sm:mb-5 w-full">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className="text-[1.65rem] xs:text-2xl sm:text-4xl md:text-5xl lg:text-[4rem] font-black tracking-tight leading-[1.1] sm:leading-[1.05] text-transparent"
                style={{ WebkitTextStroke: "1px rgba(255,255,255,0.35)" }}
              >
                <DecryptionText text="& CYBER DEFENSE" delay={0.7} />
              </motion.h1>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="max-w-xl text-muted text-xs sm:text-sm md:text-base leading-relaxed mb-6 px-2"
            >
              Architecting resilient full-stack systems and high-throughput network security telemetry.
            </motion.p>

            {/* Action Triggers / CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-3 sm:gap-3.5 mb-4 w-full"
            >
              <button
                onClick={scrollToWork}
                className="flex-1 sm:flex-none px-6 py-3 sm:py-2.5 rounded-lg bg-white text-black font-semibold text-xs uppercase tracking-widest hover:bg-neutral-200 transition-all shadow-lg shadow-white/10 cursor-pointer flex items-center justify-center gap-2 min-h-[44px] sm:min-h-0"
              >
                <span>Explore Work</span>
                <span>↓</span>
              </button>

              <button
                onClick={triggerTerminal}
                className="flex-1 sm:flex-none px-6 py-3 sm:py-2.5 rounded-lg border border-white/20 bg-white/5 backdrop-blur-md text-white font-mono text-xs uppercase tracking-widest hover:bg-white/10 hover:border-emerald-500/40 transition-all cursor-pointer flex items-center justify-center gap-2 min-h-[44px] sm:min-h-0"
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
              className="text-[10px] font-mono text-muted/60 tracking-wider uppercase"
            >
              Next.js 16 • TypeScript • Suricata IDS • Elastic Stack • PostgreSQL
            </motion.div>
          </div>

          {/* LOWER CONSOLE / TERMINAL (order-2 on mobile, lg:col-span-12 lg:order-4 on desktop) */}
          <div className="w-full order-2 lg:col-span-12 lg:order-4">
            <HeroTerminal />
          </div>

          {/* LEFT COLUMN: Technical Pillars & Capabilities (order-3 on mobile, lg:col-span-3 lg:order-1 on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 text-left order-3 lg:order-1"
          >
            {/* Box 1: Architecture Core */}
            <div className="border border-border/80 bg-[#080808]/90 backdrop-blur-md rounded-xl p-4 sm:p-5 font-mono text-xs hover:border-white/20 transition-all shadow-lg shadow-black/40">
              <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-white/5">
                <span className="text-[10px] uppercase tracking-widest text-muted font-bold">01 // ARCHITECTURE</span>
                <span className="text-[9px] text-emerald-400/80 uppercase font-mono">CORE_STACK</span>
              </div>
              <ul className="space-y-1.5 text-white/80 leading-relaxed text-[11px] sm:text-xs">
                <li className="flex items-start gap-1.5">
                  <span className="text-accent">•</span>
                  <span>Full-Stack Web (Next.js 16 / React 19)</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-accent">•</span>
                  <span>High-Throughput APIs (Node.js / Express)</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-accent">•</span>
                  <span>Relational Schemas (PostgreSQL / Redis)</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-accent">•</span>
                  <span>Edge Delivery & Modern CI/CD</span>
                </li>
              </ul>
            </div>

            {/* Box 2: Cyber Defense Focus */}
            <div className="border border-border/80 bg-[#080808]/90 backdrop-blur-md rounded-xl p-4 sm:p-5 font-mono text-xs hover:border-white/20 transition-all shadow-lg shadow-black/40">
              <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-white/5">
                <span className="text-[10px] uppercase tracking-widest text-muted font-bold">02 // DEFENSE</span>
                <span className="text-[9px] text-emerald-400/80 uppercase font-mono">HARDENED</span>
              </div>
              <ul className="space-y-1.5 text-white/80 leading-relaxed text-[11px] sm:text-xs">
                <li className="flex items-start gap-1.5">
                  <span className="text-emerald-400">•</span>
                  <span>Intrusion Detection (Suricata / Zeek)</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-emerald-400">•</span>
                  <span>SIEM Telemetry (Elastic Stack)</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-emerald-400">•</span>
                  <span>Zero-Trust Network Defense</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-emerald-400">•</span>
                  <span>Incident Response (Python Automation)</span>
                </li>
              </ul>
            </div>

            {/* Box 3: Credential Pill */}
            <div className="sm:col-span-2 lg:col-span-1 border border-border/60 bg-[#080808]/60 backdrop-blur-sm rounded-lg px-4 py-2.5 font-mono text-[11px] text-muted flex items-center justify-between">
              <span>DUAL FOCUS</span>
              <span className="text-white font-semibold">SOFTWARE + SECURITY</span>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Node Telemetry & Status (order-4 on mobile, lg:col-span-3 lg:order-3 on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 text-left order-4 lg:order-3"
          >
            {/* Box 1: Node Telemetry */}
            <div className="border border-border/80 bg-[#080808]/90 backdrop-blur-md rounded-xl p-4 sm:p-5 font-mono text-xs hover:border-white/20 transition-all shadow-lg shadow-black/40">
              <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-white/5">
                <span className="text-[10px] uppercase tracking-widest text-muted font-bold">NODE TELEMETRY</span>
                <span className="text-[9px] text-emerald-400 uppercase font-bold tracking-widest">● ARMED</span>
              </div>
              <div className="space-y-2 text-muted leading-relaxed text-[11px] sm:text-xs">
                <div className="flex justify-between items-center">
                  <span>Engine:</span>
                  <span className="text-white font-semibold">Suricata v7.0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Packet Drops:</span>
                  <span className="text-emerald-400 font-semibold">0.00% [ZERO]</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>P99 Latency:</span>
                  <span className="text-white font-semibold">&lt; 18ms Edge</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Encryption:</span>
                  <span className="text-white font-semibold">TLS 1.3 / AES-256</span>
                </div>
              </div>
            </div>

            {/* Box 2: Operations & Dispatch */}
            <div className="border border-border/80 bg-[#080808]/90 backdrop-blur-md rounded-xl p-4 sm:p-5 font-mono text-xs hover:border-white/20 transition-all shadow-lg shadow-black/40">
              <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-white/5">
                <span className="text-[10px] uppercase tracking-widest text-muted font-bold">BASE & CONTACT</span>
                <span className="text-[9px] text-white/50 uppercase font-mono">UTC+1</span>
              </div>
              <div className="space-y-2 text-muted leading-relaxed text-[11px] sm:text-xs">
                <div className="flex justify-between items-center">
                  <span>Location:</span>
                  <span className="text-white">Lagos, NG</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Deployment:</span>
                  <span className="text-emerald-400 font-medium">Worldwide Remote</span>
                </div>
                <div className="flex justify-between items-center pt-1 border-t border-white/5">
                  <span>Direct:</span>
                  <a
                    href="mailto:oshikeec@gmail.com"
                    className="text-white hover:text-emerald-400 transition-colors underline underline-offset-2"
                  >
                    oshikeec@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Box 3: Quick CLI Hint */}
            <div className="sm:col-span-2 lg:col-span-1 border border-border/60 bg-[#080808]/60 backdrop-blur-sm rounded-lg px-4 py-2.5 font-mono text-[11px] text-muted flex items-center justify-between">
              <span>CLI SHORTCUT</span>
              <span className="text-emerald-400 font-mono font-bold">PRESS ⌘K</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="mt-8 flex flex-col items-center gap-1.5"
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
