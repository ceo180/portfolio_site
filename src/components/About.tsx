"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import DecryptionText from "./DecryptionText";

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const imageY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section ref={containerRef} id="about" className="relative w-full min-h-screen flex items-center justify-center px-6 py-32 bg-background z-10 scroll-mt-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Biography & Technical Specs */}
        <motion.div style={{ y }} className="md:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-white/[0.02] text-xs font-mono text-muted tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span>Engineering Philosophy</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter uppercase">
            <DecryptionText text="The Engineering Mindset" delay={0.2} />
          </h2>

          <p className="text-muted leading-relaxed text-base sm:text-lg">
            I operate at the intersection of high-scale web engineering and offensive/defensive cybersecurity. Every system I build is architected to be blisteringly fast on the front end and unassailable under the hood.
          </p>

          <p className="text-muted leading-relaxed text-base sm:text-lg">
            My foundation pairs modern distributed web frameworks (Next.js, React, Node.js) with strict network telemetry and threat modeling (Suricata IDS, Zeek, Elastic Stack, Zero-Trust).
          </p>

          {/* Structured Spec Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 font-mono">
            <div className="border border-border/80 bg-white/[0.02] p-4 rounded-xl space-y-2.5">
              <div className="text-xs uppercase tracking-widest text-accent font-semibold pb-1.5 border-b border-border/60 flex items-center justify-between">
                <span>01 // Software Stack</span>
                <span className="text-[10px] text-muted font-normal">DEV</span>
              </div>
              <ul className="text-xs text-muted space-y-1.5">
                <li className="flex items-center justify-between">
                  <span>TypeScript / JavaScript</span>
                  <span className="text-white/60">Strict</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>React 19 / Next.js 16</span>
                  <span className="text-white/60">Edge</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Node.js / Express</span>
                  <span className="text-white/60">Async</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>PostgreSQL / Redis</span>
                  <span className="text-white/60">ACID</span>
                </li>
              </ul>
            </div>

            <div className="border border-border/80 bg-white/[0.02] p-4 rounded-xl space-y-2.5">
              <div className="text-xs uppercase tracking-widest text-accent font-semibold pb-1.5 border-b border-border/60 flex items-center justify-between">
                <span>02 // Security & Cloud</span>
                <span className="text-[10px] text-emerald-400 font-normal">SEC</span>
              </div>
              <ul className="text-xs text-muted space-y-1.5">
                <li className="flex items-center justify-between">
                  <span>Suricata / Zeek IDS</span>
                  <span className="text-white/60">Perimeter</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>SIEM / Elastic Stack</span>
                  <span className="text-white/60">Telemetry</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Threat Surface Modeling</span>
                  <span className="text-white/60">OWASP</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Docker & Linux Kernel</span>
                  <span className="text-white/60">Infra</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
        
        {/* Right Column: High-End Operator ID Card */}
        <div className="md:col-span-5 relative w-full max-w-md mx-auto group">
          <motion.div
            style={{ y: imageY }}
            className="rounded-2xl border border-border/80 bg-[#0a0a0a] p-5 shadow-2xl shadow-black/80 hover:border-white/30 transition-all font-mono"
          >
            {/* Operator Card Top Header */}
            <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-border/60 text-[10px] text-muted tracking-widest uppercase">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_#34d399]" />
                <span className="text-white font-semibold">VERIFIED OPERATOR</span>
              </div>
              <span className="text-muted/60">ID: EMO-2026</span>
            </div>

            {/* Photo Container with Corner Brackets */}
            <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden border border-border/60 bg-black">
              {/* Corner Crosshairs */}
              <span className="absolute top-2 left-2 z-20 text-[10px] text-white/30 select-none">+</span>
              <span className="absolute top-2 right-2 z-20 text-[10px] text-white/30 select-none">+</span>
              <span className="absolute bottom-2 left-2 z-20 text-[10px] text-white/30 select-none">+</span>
              <span className="absolute bottom-2 right-2 z-20 text-[10px] text-white/30 select-none">+</span>

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/Pfp.png"
                alt="Portrait of Emmanuel Oshike"
                className="w-full h-full object-cover object-center grayscale opacity-85 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

              {/* In-Photo Bottom Pill */}
              <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-[10px]">
                <span className="text-white font-medium">Emmanuel Oshike</span>
                <span className="text-emerald-400">Available</span>
              </div>
            </div>

            {/* Operator Card Metadata Footer */}
            <div className="pt-3.5 mt-3.5 border-t border-border/60 flex items-center justify-between text-[11px] text-muted">
              <span>SPECIALTY: SWE // SEC</span>
              <span>BASE: LAGOS, NG</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
