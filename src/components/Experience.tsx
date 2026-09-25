"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import DecryptionText from "./DecryptionText";

const experiences = [
  {
    role: "Cybersecurity Analyst",
    company: "Freelance / Security Consulting",
    year: "2023 - Present",
    scope: "Perimeter Defense & Threat Hunting",
    skills: ["Suricata IDS", "Zeek Telemetry", "Threat Modeling", "Vulnerability Assessments"],
    description: "Conducting enterprise-grade vulnerability assessments, architecting distributed IDS/IPS sensors, and engineering zero-trust network defenses for critical digital infrastructure."
  },
  {
    role: "Full Stack Software Engineer",
    company: "Tech Architecture & Web Platforms",
    year: "2021 - 2023",
    scope: "High-Scale Distributed Systems",
    skills: ["React / Next.js", "TypeScript", "Node.js API", "PostgreSQL"],
    description: "Architected and delivered high-availability web applications with sub-100ms response targets. Engineered intelligent sales platforms and high-throughput financial analytics dashboards."
  },
  {
    role: "Security Analyst",
    company: "SOC Operations & Incident Defense",
    year: "2020 - 2021",
    scope: "SIEM & Automated Mitigation",
    skills: ["Elastic Stack", "Packet Inspection", "Python Automation", "OWASP"],
    description: "Monitored real-time SIEM dashboards for security anomalies, led penetration testing exercises, and built automated Python response scripts to neutralize perimeter attack vectors."
  }
];

export default function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} id="experience" className="relative w-full py-16 sm:py-24 lg:py-32 bg-background z-10 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-5 sm:px-6">
        <div className="mb-20">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase">
              <DecryptionText text="Experience" delay={0.2} />
            </h2>
            <span className="text-xs font-mono uppercase tracking-widest text-muted">[ TIMELINE ]</span>
          </div>
          <div className="w-full h-[1px] bg-border" />
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 top-0 bottom-0 w-[1px] bg-border md:left-1/2 md:-translate-x-1/2" />
          
          {/* Animated Glow Line */}
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-4 top-0 w-[2px] bg-emerald-400 md:left-1/2 md:-translate-x-1/2 shadow-[0_0_12px_#34d399]" 
          />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Glowing Node */}
                <div className="absolute left-[11px] md:left-1/2 md:-translate-x-1/2 w-3 h-3 bg-emerald-400 rounded-full border-2 border-background shadow-[0_0_8px_#34d399] mt-6 z-10" />
                
                <div className="pl-12 md:pl-0 md:w-1/2 md:px-8 w-full">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="border border-border/80 bg-[#09090b]/90 backdrop-blur-md p-6 sm:p-7 rounded-2xl hover:border-white/30 transition-all shadow-xl shadow-black/60 group"
                  >
                    {/* Header Row */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[11px] font-semibold tracking-wider">
                        {exp.year}
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-muted">
                        {exp.scope}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white group-hover:text-emerald-300 transition-colors mb-1">
                      {exp.role}
                    </h3>
                    
                    <h4 className="text-xs sm:text-sm font-mono text-muted mb-3.5">
                      {exp.company}
                    </h4>
                    
                    <p className="text-muted/90 text-xs sm:text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/60">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 rounded bg-white/[0.03] border border-border text-[10px] font-mono text-muted"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
