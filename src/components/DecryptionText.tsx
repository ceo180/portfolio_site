"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";

interface DecryptionTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function DecryptionText({ text, className = "", delay = 0 }: DecryptionTextProps) {
  // Start with a scrambled version of the text
  const [displayText, setDisplayText] = useState(() => 
    text.split("").map(char => char === " " ? " " : "_").join("")
  );
  const [isTriggered, setIsTriggered] = useState(false);

  useEffect(() => {
    if (!isTriggered) return;

    let iteration = 0;
    let animationFrame: number;
    let timeout: NodeJS.Timeout;

    const animate = () => {
      setDisplayText(() => {
        return text
          .split("")
          .map((char, index) => {
            if (index < iteration || char === " ") {
              return text[index];
            }
            return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
          })
          .join("");
      });

      if (iteration < text.length) {
        iteration += 1 / 3; // Speed of the effect
        animationFrame = requestAnimationFrame(animate);
      }
    };

    timeout = setTimeout(() => {
      animationFrame = requestAnimationFrame(animate);
    }, delay * 1000);

    return () => {
      cancelAnimationFrame(animationFrame);
      clearTimeout(timeout);
    };
  }, [text, delay, isTriggered]);

  return (
    <motion.span
      className={className}
      onViewportEnter={() => setIsTriggered(true)}
      viewport={{ once: true, margin: "-10%" }}
    >
      {displayText}
    </motion.span>
  );
}
