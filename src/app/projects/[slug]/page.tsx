import WebGLBackground from "@/components/WebGLBackground";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import MermaidDiagram from "@/components/MermaidDiagram";

interface GalleryItem {
  url: string;
  caption: string;
}

interface ProjectData {
  title: string;
  subtitle: string;
  role: string;
  timeline: string;
  tech: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  overview: string;
  challenges: string;
  solution: string;
  gallery: GalleryItem[];
  mermaid: string;
}

const projectsData: Record<string, ProjectData> = {
  "nidps": {
    title: "NIDPS",
    subtitle: "Network Intrusion Visualization & Threat Analysis",
    role: "Lead Cybersecurity Engineer",
    timeline: "2023",
    tech: ["Elastic Stack", "Suricata", "Zeek", "Python"],
    image: "/images/NIDPS_1.png",
    githubUrl: "https://github.com/ceo180",
    overview: "This project involved architecting a real-time network intrusion detection system capable of monitoring and analyzing massive streams of telemetry securely.",
    challenges: "The primary challenge was ensuring sub-100ms latency on the analytics dashboard while processing terabytes of network data without dropping packets.",
    solution: "By leveraging a highly optimized Elasticsearch cluster coupled with distributed Suricata sensors, we achieved complete network visibility and threat detection.",
    gallery: [
      { url: "/images/NIDPS_1.png", caption: "Real-Time Intrusion Alert Telemetry & Spatial Geo-Distribution" },
      { url: "/images/NIDPS_2.png", caption: "Severity Distribution & Protocol Sensor Performance Dashboard" },
      { url: "/images/NIDPS_3.png", caption: "Deep Packet Inspection Logs & Automated Filtering Console" }
    ],
    mermaid: `
graph TD
    A[Public Traffic] -->|Ingress| B(Suricata IDS / Zeek)
    B -->|Telemetry| C(Filebeat)
    C -->|Shipped Data| D[Logstash Pipeline]
    D -->|Indexed & Enriched| E[(Elasticsearch)]
    E -->|Queried| F[Kibana Dashboard]
    E -->|Automated Defense| G[Python Response Scripts]
    G -.->|Block IPs| B
    `
  },
  "greenscapes-ai": {
    title: "GREENSCAPES AI",
    subtitle: "Intelligent Sales Platform powered by LLMs",
    role: "Full Stack Engineer",
    timeline: "2024",
    tech: ["Next.js 14", "Vercel AI SDK", "GROQ", "Tailwind"],
    image: "/images/Site_1.png",
    liveUrl: "https://greenscapes-landing.vercel.app",
    githubUrl: "https://github.com/ceo180/greenscapes-landing",
    overview: "GreenScapes AI is a next-generation platform designed to automate and augment sales processes using blazing-fast LLM inference.",
    challenges: "Handling streaming AI responses smoothly while maintaining a perfectly responsive, hyper-minimalist user interface.",
    solution: "We utilized the Vercel AI SDK alongside GROQ's LPU inference engine to deliver instant, fluid AI interactions within a custom React architecture.",
    gallery: [
      { url: "/images/Site_1.png", caption: "High-Conversion Hero Landing Page & Dynamic Feature Callouts" },
      { url: "/images/Site_2.png", caption: "AI Sales Consultation Engine with Token-Streaming Responses" },
      { url: "/images/Site_3.png", caption: "Interactive Platform Tier Selection & Client Conversion Flow" }
    ],
    mermaid: `
sequenceDiagram
    participant U as User (React UI)
    participant N as Next.js Edge API
    participant V as Vercel AI SDK
    participant G as GROQ LPU (Llama 3)
    U->>N: Query / Action
    N->>V: Parse Context
    V->>G: LLM Inference Request
    G-->>V: Streaming Tokens
    V-->>N: Format Stream
    N-->>U: Real-time Render
    `
  },
  "expensemind": {
    title: "EXPENSEMIND",
    subtitle: "High-Performance Financial Analytics",
    role: "Backend Architecture",
    timeline: "2023",
    tech: ["React 18", "PostgreSQL", "Node.js", "Express"],
    image: "/images/Expense_1.png",
    liveUrl: "https://expensemindtracker-production.up.railway.app",
    githubUrl: "https://github.com/ceo180/ExpenseMind_Tracker",
    overview: "A comprehensive financial tracking system built to handle complex relational data and provide real-time spending analytics.",
    challenges: "Designing a robust SQL schema that could handle aggressive querying for monthly analytics without bottlenecking.",
    solution: "Implemented advanced PostgreSQL indexing and materialized views to pre-compute analytics, dropping dashboard load times by 400%.",
    gallery: [
      { url: "/images/Expense_1.png", caption: "Executive Dashboard & Instant Balance Overview" },
      { url: "/images/Expense_2.png", caption: "Categorized Monthly Expenditure Analytics & Trend Forecasts" },
      { url: "/images/Expense_3.png", caption: "Budget Allocation Engine & Savings Goal Tracking" }
    ],
    mermaid: `
graph LR
    A[React Client] -->|API Requests| B(Node.js API)
    B -->|Cached Lookups| C[(Redis)]
    B -->|Read/Write| D[(PostgreSQL)]
    D -->|Materialized Views| D
    B -.->|Background Jobs| E[Analytics Workers]
    E -.->|Computed Data| D
    `
  },
  "sentinel-radar": {
    title: "SENTINEL RADAR",
    subtitle: "Automated Threat Intelligence & Zero-Trust Telemetry",
    role: "Security Architect",
    timeline: "2024",
    tech: ["Python", "Suricata", "Zero-Trust", "Docker", "FastAPI"],
    image: "/images/NIDPS_2.png",
    githubUrl: "https://github.com/ceo180",
    overview: "Sentinel Radar is an automated security orchestrator designed to analyze anomalous traffic patterns and immediately deploy zero-trust firewall perimeter rules.",
    challenges: "Minimizing false-positive mitigations and executing dynamic firewall rule injections within sub-second thresholds under heavy DDoS stress.",
    solution: "Architected a multi-threaded asynchronous Python parser leveraging eBPF packet hooks to dynamically update perimeter defenses without interrupting legitimate traffic flows.",
    gallery: [
      { url: "/images/NIDPS_2.png", caption: "Dynamic Zero-Trust Policy Matrix & Sensor Node Status" },
      { url: "/images/NIDPS_1.png", caption: "Automated Firewall Rule Injection & Null-Routing Stream" },
      { url: "/images/NIDPS_3.png", caption: "eBPF Kernel Anomaly Verification & SOC Incident Telemetry" }
    ],
    mermaid: `
graph TD
    A[Untrusted Ingress Traffic] -->|Deep Packet Inspection| B(eBPF / Suricata Kernel Hook)
    B -->|Anomaly Trigger| C(Sentinel Decision Engine)
    C -->|Threat Validation| D{Confidence Score > 95%}
    D -->|Yes| E[Automated IPTables / BGP Null-Route]
    D -->|No| F[Flag for SOC Telemetry & SIEM]
    E -->|Alert Dispatch| G[Encrypted Incident Response Stream]
    `
  }
};

export default async function ProjectCaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug as keyof typeof projectsData;
  const project = projectsData[slug];

  if (!project) {
    return <div className="text-white text-center pt-40">Project not found.</div>;
  }

  return (
    <main className="relative w-full min-h-screen bg-transparent text-foreground overflow-hidden">
      <WebGLBackground />
      
      {/* Back Button */}
      <div className="absolute top-6 sm:top-10 left-4 sm:left-6 z-50 mix-blend-difference">
        <Link href="/" aria-label="Back to Portfolio" className="font-mono text-xs uppercase tracking-widest text-white hover:text-muted transition-colors py-2 px-3 inline-flex items-center min-h-[44px] bg-black/40 backdrop-blur-md rounded border border-white/10">
          ← Back to Portfolio
        </Link>
      </div>

      {/* Full Bleed Hero Section */}
      <div className="relative w-full h-[60vh] md:h-[80vh] flex items-end pb-12 px-6">
        <div className="absolute inset-0 z-0">
          <Image 
            src={project.image} 
            alt={`Hero screenshot for ${project.title}`} 
            fill 
            className="object-cover opacity-40 object-top grayscale hover:grayscale-0 transition-all duration-1000"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[9rem] font-extrabold tracking-tighter uppercase mb-2 text-white drop-shadow-2xl leading-none">
            {project.title}
          </h1>
          <p className="text-lg sm:text-xl md:text-3xl text-muted font-medium tracking-tight">
            {project.subtitle}
          </p>

          {/* Action Trigger Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-6">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg bg-emerald-400 text-black font-semibold text-xs uppercase tracking-widest hover:bg-emerald-300 transition-all shadow-[0_0_24px_rgba(52,211,153,0.35)] cursor-pointer min-h-[44px]"
              >
                <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
                <span>Launch Live Platform</span>
                <span className="text-sm font-bold">↗</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg border border-white/20 bg-white/5 backdrop-blur-md text-white font-mono text-xs uppercase tracking-widest hover:bg-white/10 hover:border-white/40 transition-all cursor-pointer min-h-[44px]"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span>View GitHub Source</span>
                <span className="text-sm font-bold">↗</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Case Study Content */}
      <div className="px-6 max-w-6xl mx-auto z-10 relative pb-32">
        {/* Metadata Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 font-mono text-sm uppercase tracking-widest border-y border-border py-8 bg-background/50 backdrop-blur-md">
          <div>
            <h4 className="text-muted mb-2">Role</h4>
            <p className="text-white">{project.role}</p>
          </div>
          <div>
            <h4 className="text-muted mb-2">Timeline</h4>
            <p className="text-white">{project.timeline}</p>
          </div>
          <div className="col-span-2">
            <h4 className="text-muted mb-2">Tech Stack</h4>
            <p className="text-accent">{project.tech.join(" / ")}</p>
          </div>
        </div>

        {/* Bento Box Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-border p-6 sm:p-8 md:p-12 bg-white/5 backdrop-blur-sm group hover:bg-white/10 transition-colors">
            <h2 className="text-2xl font-bold uppercase tracking-tight text-white mb-4">Overview</h2>
            <p className="text-muted leading-relaxed text-base sm:text-lg">{project.overview}</p>
          </div>
          
          <div className="border border-border p-6 sm:p-8 md:p-12 bg-white/5 backdrop-blur-sm group hover:bg-white/10 transition-colors">
            <h2 className="text-2xl font-bold uppercase tracking-tight text-white mb-4">The Challenge</h2>
            <p className="text-muted leading-relaxed text-base sm:text-lg">{project.challenges}</p>
          </div>
          
          <div className="md:col-span-2 border border-border p-6 sm:p-8 md:p-16 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] -z-10 group-hover:bg-accent/20 transition-colors duration-1000" />
            <h2 className="text-2xl sm:text-4xl font-bold uppercase tracking-tight text-white mb-6">The Solution & Architecture</h2>
            <p className="text-base sm:text-xl text-muted leading-relaxed max-w-4xl mb-8 sm:mb-12">{project.solution}</p>
            
            {/* Architecture Diagram */}
            <div className="w-full bg-black/40 border border-border rounded-xl p-4 sm:p-8 overflow-x-auto">
              <MermaidDiagram chart={project.mermaid} />
            </div>
          </div>
        </div>

        {/* Visual Interface Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mt-20">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-3 border-b border-border">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
                  // VISUAL TELEMETRY
                </span>
                <h2 className="text-2xl sm:text-4xl font-bold uppercase tracking-tight text-white mt-1">
                  Interface & System Gallery
                </h2>
              </div>
              <span className="text-xs font-mono text-muted uppercase tracking-widest">
                [ 0{project.gallery.length} SCREENSHOTS ]
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {project.gallery.map((item, idx) => (
                <div
                  key={idx}
                  className={`border border-border/80 bg-[#09090b]/90 rounded-2xl overflow-hidden shadow-2xl shadow-black/80 hover:border-white/30 transition-all group ${
                    idx === 0 ? "lg:col-span-2" : ""
                  }`}
                >
                  {/* Window Chrome Header */}
                  <div className="flex items-center justify-between px-4 py-3 bg-white/[0.03] border-b border-white/5">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                      <span className="ml-2 text-[11px] font-mono text-muted tracking-wider">
                        {project.title.toLowerCase()} // capture_0{idx + 1}.png
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400/80 uppercase tracking-widest">
                      SYSTEM_PREVIEW
                    </span>
                  </div>

                  {/* Screenshot Image with Smooth Hover Expansion */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/60">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.url}
                      alt={item.caption}
                      className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none" />
                  </div>

                  {/* Caption Footer */}
                  <div className="p-4 sm:p-5 bg-[#0a0a0a] border-t border-white/5 flex flex-wrap items-center justify-between gap-2">
                    <p className="text-xs sm:text-sm text-white/90 font-medium font-mono">
                      {item.caption}
                    </p>
                    <span className="text-[10px] font-mono text-muted uppercase tracking-widest">
                      FIG 0{idx + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      
      <Footer />
    </main>
  );
}
