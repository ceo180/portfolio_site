"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const projects = [
  {
    title: "NIDPS",
    description: "Network Intrusion Visualization using Elastic Stack, Suricata, and Zeek.",
    tags: ["Elastic Stack", "Security", "Machine Learning"],
    image: "/images/NIDPS_1.png",
    link: "/projects/nidps",
    githubUrl: "https://github.com/ceo180"
  },
  {
    title: "GreenScapes AI",
    description: "Intelligent Sales Platform built with Next.js 14 and Vercel AI SDK.",
    tags: ["Next.js 14", "GROQ AI", "Tailwind CSS"],
    image: "/images/Site_1.png",
    link: "/projects/greenscapes-ai",
    liveUrl: "https://greenscapes-landing.vercel.app",
    githubUrl: "https://github.com/ceo180/greenscapes-landing"
  },
  {
    title: "ExpenseMind",
    description: "Financial Analytics Platform with React 18, Node.js, and PostgreSQL.",
    tags: ["React 18", "PostgreSQL", "Node.js"],
    image: "/images/Expense_1.png",
    link: "/projects/expensemind",
    liveUrl: "https://expensemindtracker-production.up.railway.app",
    githubUrl: "https://github.com/ceo180/ExpenseMind_Tracker"
  },
  {
    title: "Sentinel Radar",
    description: "Automated Threat Intelligence & Zero-Trust Policy Orchestration Engine.",
    tags: ["Python", "Suricata", "Zero-Trust", "FastAPI"],
    image: "/images/NIDPS_2.png",
    link: "/projects/sentinel-radar",
    githubUrl: "https://github.com/ceo180"
  }
];

function ProjectCard({ project, index }: { project: any, index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: (index % 2) * 0.15 }}
      className="relative w-full aspect-[4/3] min-h-[310px] sm:min-h-0 group [perspective:1000px]"
    >
      <motion.a
        href={project.link}
        aria-label={`View ${project.title} case study`}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="block w-full h-full relative border border-border/80 bg-background rounded-xl overflow-hidden cursor-pointer hover:border-white/30 transition-all shadow-xl shadow-black/60"
      >
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={project.image} alt={`Screenshot of ${project.title} project`} className="w-full h-full object-cover opacity-70 md:opacity-50 grayscale-0 md:grayscale md:group-hover:grayscale-0 md:group-hover:opacity-100 transition-all duration-700 md:group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent opacity-90 md:group-hover:opacity-60 transition-opacity duration-500" />
        </div>
        
        <div style={{ transform: "translateZ(50px)" }} className="relative z-10 p-6 sm:p-8 flex flex-col h-full justify-end">
          <div className="flex items-center justify-between gap-2 mb-2">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tighter text-white group-hover:text-emerald-300 transition-colors">{project.title}</h3>
            </div>
            {project.liveUrl && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-[9px] font-mono text-emerald-300 font-medium tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                LIVE
              </span>
            )}
          </div>
          <p className="text-muted text-xs sm:text-sm mb-5 line-clamp-2 max-w-sm leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag: string) => (
              <span key={tag} className="text-[10px] uppercase font-mono tracking-widest px-2.5 py-1 border border-border bg-background/70 backdrop-blur-md text-muted group-hover:text-foreground transition-colors rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.a>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="work" className="relative w-full py-16 sm:py-24 lg:py-32 bg-background z-10 scroll-mt-20">
      <span id="projects" className="absolute -top-16 sm:-top-24 lg:-top-32" aria-hidden="true" />
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="mb-16">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase">Selected Works</h2>
            <span className="text-xs font-mono uppercase tracking-widest text-muted">[ 04 SYSTEMS ]</span>
          </div>
          <div className="w-full h-[1px] bg-border" />
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={project.title}>
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
