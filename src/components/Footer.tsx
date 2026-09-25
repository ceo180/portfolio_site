"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="w-full py-20 bg-background relative z-10 border-t border-border scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <div className="flex items-center gap-2.5 mb-3 justify-center md:justify-start">
            <div className="w-7 h-7 rounded-lg overflow-hidden flex items-center justify-center bg-[#1a265a]/30 border border-[#38bdf8]/30 p-0.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo-emblem.png"
                alt="Emmanuel Tech Group Emblem"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-mono text-xs uppercase tracking-widest text-muted">
              Emmanuel Tech Group
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-2 text-accent">Let's Build.</h2>
          <a href="mailto:oshikeec@gmail.com" className="text-muted hover:text-foreground transition-colors font-mono tracking-widest text-sm inline-flex items-center min-h-[44px]">oshikeec@gmail.com</a>
        </div>
        
        <div className="flex flex-wrap justify-center md:justify-end gap-6 sm:gap-8">
          <Link href="/privacy" className="py-2 text-muted hover:text-foreground uppercase font-mono tracking-widest text-sm transition-colors min-h-[44px] flex items-center">Privacy</Link>
          <a href="https://github.com/ceo180" target="_blank" rel="noopener noreferrer" className="py-2 text-muted hover:text-foreground uppercase font-mono tracking-widest text-sm transition-colors min-h-[44px] flex items-center">GitHub</a>
          <a href="https://www.linkedin.com/in/emmanuel-oshike" target="_blank" rel="noopener noreferrer" className="py-2 text-muted hover:text-foreground uppercase font-mono tracking-widest text-sm transition-colors min-h-[44px] flex items-center">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
