import WebGLBackground from "@/components/WebGLBackground";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import MermaidDiagram from "@/components/MermaidDiagram";

const projectsData = {
  "nidps": {
    title: "NIDPS",
    subtitle: "Network Intrusion Visualization & Threat Analysis",
    role: "Lead Cybersecurity Engineer",
    timeline: "2023",
    tech: ["Elastic Stack", "Suricata", "Zeek", "Python"],
    image: "/images/NIDPS_1.png",
    overview: "This project involved architecting a real-time network intrusion detection system capable of monitoring and analyzing massive streams of telemetry securely.",
    challenges: "The primary challenge was ensuring sub-100ms latency on the analytics dashboard while processing terabytes of network data without dropping packets.",
    solution: "By leveraging a highly optimized Elasticsearch cluster coupled with distributed Suricata sensors, we achieved complete network visibility and threat detection.",
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
    overview: "GreenScapes AI is a next-generation platform designed to automate and augment sales processes using blazing-fast LLM inference.",
    challenges: "Handling streaming AI responses smoothly while maintaining a perfectly responsive, hyper-minimalist user interface.",
    solution: "We utilized the Vercel AI SDK alongside GROQ's LPU inference engine to deliver instant, fluid AI interactions within a custom React architecture.",
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
    overview: "A comprehensive financial tracking system built to handle complex relational data and provide real-time spending analytics.",
    challenges: "Designing a robust SQL schema that could handle aggressive querying for monthly analytics without bottlenecking.",
    solution: "Implemented advanced PostgreSQL indexing and materialized views to pre-compute analytics, dropping dashboard load times by 400%.",
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
    overview: "Sentinel Radar is an automated security orchestrator designed to analyze anomalous traffic patterns and immediately deploy zero-trust firewall perimeter rules.",
    challenges: "Minimizing false-positive mitigations and executing dynamic firewall rule injections within sub-second thresholds under heavy DDoS stress.",
    solution: "Architected a multi-threaded asynchronous Python parser leveraging eBPF packet hooks to dynamically update perimeter defenses without interrupting legitimate traffic flows.",
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
      </div>
      
      <Footer />
    </main>
  );
}
