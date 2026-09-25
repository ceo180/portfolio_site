"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useLenis } from "lenis/react";

interface LogEntry {
  type: "system" | "input" | "output";
  text: string;
  highlight?: boolean;
}

const INITIAL_LOGS: LogEntry[] = [
  { type: "system", text: "INITIALIZING SENTINEL KERNEL v2.6.4..." },
  { type: "system", text: "OPERATOR: EMMANUEL OSHIKE // SWE & CYBERSECURITY ANALYST" },
  { type: "system", text: "PERIMETER: SURICATA IDS ACTIVE • ZERO-TRUST VERIFIED", highlight: true },
  { type: "system", text: "SYSTEM STATUS: SECURE • TYPE 'help' TO EXPLORE" }
];

export default function HeroTerminal() {
  const [logs, setLogs] = useState<LogEntry[]>(INITIAL_LOGS);
  const [inputVal, setInputVal] = useState("");
  const lenis = useLenis();
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [logs]);

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === "clear") {
      setLogs([]);
      return;
    }

    const newLogs: LogEntry[] = [...logs, { type: "input", text: `$ ${cmd}` }];

    if (trimmed === "help") {
      newLogs.push({
        type: "output",
        text: "Available commands: 'projects', 'about', 'contact', 'skills', 'whoami', 'clear'"
      });
    } else if (trimmed === "projects" || trimmed === "ls" || trimmed === "ls projects") {
      newLogs.push({
        type: "output",
        text: "-> Navigating to Selected Projects (NIDPS, GreenScapes AI, ExpenseMind)...",
        highlight: true
      });
      const el = document.getElementById("work");
      if (el) {
        if (lenis) {
          lenis.scrollTo(el, { offset: -80 });
        } else {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else if (trimmed === "about" || trimmed === "cat about") {
      newLogs.push({
        type: "output",
        text: "-> Scrolling to Engineering Mindset...",
        highlight: true
      });
      const el = document.getElementById("about");
      if (el) {
        if (lenis) {
          lenis.scrollTo(el, { offset: -80 });
        } else {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else if (trimmed === "contact" || trimmed === "ping" || trimmed === "ping contact") {
      newLogs.push({
        type: "output",
        text: "-> PING contact // Opening mailto:oshikeec@gmail.com",
        highlight: true
      });
      window.location.href = "mailto:oshikeec@gmail.com";
    } else if (trimmed === "skills" || trimmed === "sysinfo") {
      newLogs.push({
        type: "output",
        text: "-> Stack: Next.js 16, TypeScript, Suricata IDS, Zeek, Elastic SIEM, PostgreSQL"
      });
    } else if (trimmed === "whoami") {
      newLogs.push({
        type: "output",
        text: "-> Emmanuel Oshike — Software Engineer & Cybersecurity Analyst."
      });
    } else {
      newLogs.push({
        type: "output",
        text: `-> command not found: ${cmd}. Type 'help' for options.`
      });
    }

    setLogs(newLogs);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(inputVal);
    setInputVal("");
  };

  const quickCommands = [
    { label: "projects", cmd: "projects" },
    { label: "about", cmd: "about" },
    { label: "contact", cmd: "contact" },
    { label: "skills", cmd: "skills" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-lg lg:max-w-xl text-left font-mono"
    >
      <div className="rounded-2xl border border-white/10 bg-[#0a0a0a]/95 backdrop-blur-xl shadow-2xl shadow-black/90 overflow-hidden">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-white/[0.03] border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <div className="text-[11px] text-white/50 tracking-wider font-mono">
            GUEST@SENTINEL:~
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_#34d399]" />
            <span className="text-[10px] text-emerald-400 uppercase tracking-widest font-semibold">
              LIVE
            </span>
          </div>
        </div>

        {/* Terminal Body */}
        <div
          ref={terminalBodyRef}
          onClick={() => inputRef.current?.focus()}
          className="p-4 h-44 sm:h-48 overflow-y-auto space-y-1.5 text-xs text-muted cursor-text"
        >
          {logs.map((log, i) => (
            <div
              key={i}
              className={`leading-relaxed ${
                log.type === "input"
                  ? "text-white font-semibold"
                  : log.highlight
                  ? "text-emerald-400"
                  : "text-muted"
              }`}
            >
              {log.text}
            </div>
          ))}

          {/* Active Input Line */}
          <form onSubmit={handleSubmit} className="flex items-center pt-1">
            <span className="text-emerald-400 font-bold mr-2 select-none">➜</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="type 'help' or click a command..."
              aria-label="Interactive Hero Terminal Input"
              className="flex-1 bg-transparent text-white outline-none text-base sm:text-xs placeholder:text-white/20"
              spellCheck={false}
              autoComplete="off"
            />
          </form>
        </div>

        {/* Quick-Action Chips */}
        <div className="px-4 py-2 bg-black/40 border-t border-white/5 flex flex-wrap items-center gap-2 text-[10px]">
          <span className="text-white/30 uppercase tracking-wider">Quick Commands:</span>
          {quickCommands.map((item) => (
            <button
              key={item.cmd}
              onClick={() => executeCommand(item.cmd)}
              className="px-2.5 py-1.5 sm:py-0.5 min-h-[32px] sm:min-h-0 rounded border border-white/10 bg-white/[0.04] text-white/70 hover:text-white hover:border-emerald-500/40 hover:bg-emerald-500/10 transition-all cursor-pointer flex items-center"
            >
              ${" "}{item.label}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
