"use client";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-accent pointer-events-none z-[100] mix-blend-difference hidden md:flex items-center justify-center"
      animate={{
        x: mousePosition.x - 16,
        y: mousePosition.y - 16,
      }}
      transition={{
        type: "spring",
        mass: 0.1,
        stiffness: 150,
        damping: 15,
      }}
    >
      <div className="w-1 h-1 bg-accent rounded-full" />
    </motion.div>
  );
}
