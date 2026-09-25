"use client";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const pathname = usePathname();
  const lenis = useLenis();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // Automatically scroll to target hash on navigation or load
  useEffect(() => {
    if (pathname === "/" && typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash.replace("#", "");
      const el = document.getElementById(hash);
      if (el) {
        const timer = setTimeout(() => {
          if (lenis) {
            lenis.scrollTo(el, { offset: -80 });
          } else {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }, 150);
        return () => clearTimeout(timer);
      }
    }
  }, [pathname, lenis]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (pathname === "/") {
      e.preventDefault();
      if (targetId === "hero" || targetId === "") {
        if (lenis) {
          lenis.scrollTo(0);
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        window.history.pushState(null, "", "/");
      } else {
        const el = document.getElementById(targetId);
        if (el) {
          if (lenis) {
            lenis.scrollTo(el, { offset: -80 });
          } else {
            el.scrollIntoView({ behavior: "smooth" });
          }
          window.history.pushState(null, "", `/#${targetId}`);
        }
      }
    }
  };

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 inset-x-0 z-50 px-4 sm:px-6 py-3.5 sm:py-4 bg-[#050505]/80 backdrop-blur-md border-b border-white/5 text-white pointer-events-auto transition-all"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link
          href="/"
          onClick={(e) => handleNavClick(e, "hero")}
          className="font-bold text-lg md:text-xl tracking-tighter uppercase cursor-pointer pointer-events-auto py-1 flex items-center gap-2.5 min-h-[44px] group"
          aria-label="Emmanuel Oshike - Return to Top"
        >
          <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-lg overflow-hidden flex items-center justify-center bg-[#1a265a]/30 border border-[#38bdf8]/30 group-hover:border-[#38bdf8] transition-all p-0.5 shadow-[0_0_12px_rgba(56,189,248,0.15)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo-emblem.png"
              alt="Emmanuel Tech Group Emblem"
              className="w-full h-full object-contain"
            />
          </div>
          <span>
            OSH<span className="text-muted">IKE</span>
          </span>
        </Link>
        
        <div className="flex items-center gap-2 sm:gap-6 md:gap-8 text-xs sm:text-sm font-mono tracking-widest uppercase">
          <Link
            href="/#work"
            onClick={(e) => handleNavClick(e, "work")}
            className="py-2 px-2 hover:text-muted transition-colors cursor-pointer pointer-events-auto flex items-center min-h-[44px]"
          >
            Work
          </Link>
          <Link
            href="/#about"
            onClick={(e) => handleNavClick(e, "about")}
            className="py-2 px-2 hover:text-muted transition-colors cursor-pointer pointer-events-auto flex items-center min-h-[44px]"
          >
            About
          </Link>
          <Link
            href="/#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="py-2 px-2 hover:text-muted transition-colors cursor-pointer pointer-events-auto flex items-center min-h-[44px]"
          >
            Contact
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
