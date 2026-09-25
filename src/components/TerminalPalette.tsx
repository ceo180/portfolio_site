"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function TerminalPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<{ type: "input" | "output"; text: string }[]>([
    { type: "output", text: "Welcome to Emmanuel Oshike's Terminal v1.0" },
    { type: "output", text: "Type 'help' to see available commands." }
  ]);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    
    if (trimmed === "clear") {
      setHistory([]);
      return;
    }

    const newHistory = [...history, { type: "input", text: cmd } as const];

    switch (trimmed) {
      case "help":
        newHistory.push({ type: "output", text: "Available commands: help, whoami, projects, contact, clear" });
        break;
      case "whoami":
        newHistory.push({ type: "output", text: "Emmanuel Oshike — Software Engineer & Cybersecurity Specialist." });
        break;
      case "projects":
        newHistory.push({ type: "output", text: "Navigating to projects..." });
        router.push("/#projects");
        setIsOpen(false);
        break;
      case "contact":
        newHistory.push({ type: "output", text: "Opening mail client..." });
        window.location.href = "mailto:oshikeec@gmail.com";
        break;
      case "":
        break;
      default:
        newHistory.push({ type: "output", text: `Command not found: ${cmd}. Type 'help' for available commands.` });
    }

    setHistory(newHistory);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
    setInput("");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="terminal-title"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-2xl bg-[#0a0a0a] border border-border rounded-xl shadow-2xl overflow-hidden flex flex-col font-mono relative z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Terminal Header */}
            <div className="flex items-center px-4 py-3 bg-[#111] border-b border-border">
              <div className="flex gap-2">
                <button aria-label="Close terminal" className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" onClick={() => setIsOpen(false)} />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div id="terminal-title" className="mx-auto text-xs text-muted uppercase tracking-widest">
                bash ~ emmanueloshike
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-4 h-[55vh] max-h-96 overflow-y-auto flex flex-col gap-2 text-sm" onClick={() => inputRef.current?.focus()}>
              {history.map((line, i) => (
                <div key={i} className={`flex ${line.type === "input" ? "text-white" : "text-muted"}`}>
                  {line.type === "input" && <span className="text-accent mr-2">➜</span>}
                  <span>{line.text}</span>
                </div>
              ))}
              <form onSubmit={onSubmit} className="flex mt-2">
                <span className="text-accent mr-2" aria-hidden="true">➜</span>
                <input
                  ref={inputRef}
                  type="text"
                  aria-label="Terminal command input"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-white placeholder-muted/50 text-base sm:text-sm"
                  spellCheck={false}
                  autoComplete="off"
                />
              </form>
            </div>
          </motion.div>
          {/* Backdrop Click */}
          <div className="absolute inset-0" onClick={() => setIsOpen(false)} />
        </div>
      )}
    </AnimatePresence>
  );
}
