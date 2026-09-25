"use client";
import { motion } from "framer-motion";
import DecryptionText from "./DecryptionText";

export default function Skills() {
  return (
    <section id="skills" className="relative w-full py-32 bg-background z-10 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase">
              <DecryptionText text="Capabilities" delay={0.2} />
            </h2>
            <span className="text-xs font-mono uppercase tracking-widest text-muted">[ BENTO GRID ]</span>
          </div>
          <div className="w-full h-[1px] bg-border" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Software Architecture (2 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 border border-border/80 bg-[#09090b]/90 backdrop-blur-md rounded-2xl p-7 hover:border-white/30 transition-all shadow-xl shadow-black/40 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/5 font-mono text-[10px] text-muted tracking-widest uppercase">
                <span>01 // DISTRIBUTED ARCHITECTURE</span>
                <span className="text-white/40">HIGH SCALE</span>
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-3 text-white group-hover:text-emerald-300 transition-colors">
                Software Architecture
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-6 max-w-lg">
                Engineering high-availability web applications using modern full-stack frameworks, asynchronous event queues, and strongly-typed relational schemas built for sub-100ms latency.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {['TypeScript', 'Next.js 16', 'React 19', 'Node.js', 'PostgreSQL', 'Prisma', 'Redis', 'REST & GraphQL', 'Docker'].map(skill => (
                <span key={skill} className="px-2.5 py-1 rounded border border-border bg-white/[0.02] text-[11px] font-mono tracking-wider text-muted group-hover:text-foreground group-hover:border-white/20 transition-all">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 2: Cybersecurity (1 col) */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="border border-border/80 bg-[#09090b]/90 backdrop-blur-md rounded-2xl p-7 hover:border-white/30 transition-all shadow-xl shadow-black/40 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/5 font-mono text-[10px] text-emerald-400 tracking-widest uppercase">
                <span>02 // PERIMETER DEFENSE</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-3 text-white group-hover:text-emerald-300 transition-colors">
                Cybersecurity
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-6">
                Active intrusion detection, automated rule orchestration, vulnerability mitigation, and real-time SIEM log aggregation.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {['Suricata IDS', 'Zeek Sensor', 'Elastic SIEM', 'Threat Modeling', 'Zero-Trust', 'Python SecOps', 'OWASP'].map(skill => (
                <span key={skill} className="px-2.5 py-1 rounded border border-border bg-white/[0.02] text-[11px] font-mono tracking-wider text-muted group-hover:text-foreground group-hover:border-white/20 transition-all">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 3: UI & WebGL (1 col) */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="border border-border/80 bg-[#09090b]/90 backdrop-blur-md rounded-2xl p-7 hover:border-white/30 transition-all shadow-xl shadow-black/40 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/5 font-mono text-[10px] text-muted tracking-widest uppercase">
                <span>03 // IMMERSIVE INTERFACE</span>
                <span className="text-white/40">PHYSICS</span>
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-3 text-white group-hover:text-emerald-300 transition-colors">
                UI & WebGL
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-6">
                Cinematic web experiences powered by hardware-accelerated shaders, 3D coordinate physics, and fluid kinetic typography.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {['Three.js', 'React Three Fiber', 'Framer Motion', 'Tailwind CSS', 'Lenis Scroll', 'Shaders'].map(skill => (
                <span key={skill} className="px-2.5 py-1 rounded border border-border bg-white/[0.02] text-[11px] font-mono tracking-wider text-muted group-hover:text-foreground group-hover:border-white/20 transition-all">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 4: Performance & Benchmarks (2 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 border border-border/80 bg-[#09090b]/90 backdrop-blur-md rounded-2xl p-7 hover:border-white/30 transition-all shadow-xl shadow-black/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-mono text-[10px] text-muted tracking-widest uppercase pb-1">
                <span className="text-emerald-400 font-bold">04 // PRODUCTION BENCHMARKS</span>
                <span>•</span>
                <span>ZERO COMPROMISES</span>
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                Performance & Reliability
              </h3>
              <p className="text-muted text-sm max-w-md leading-relaxed">
                Audited for Lighthouse 100 standards, butter-smooth 60FPS animations, zero-vulnerability dependencies, and strict accessibility compliance.
              </p>
            </div>
            <div className="flex items-baseline gap-2 font-mono">
              <span className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter">100</span>
              <span className="text-emerald-400 text-2xl font-bold">%</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
