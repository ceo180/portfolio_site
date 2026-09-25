import WebGLBackground from "@/components/WebGLBackground";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from "next";
import DecryptionText from "@/components/DecryptionText";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Zero tracking. Zero cookies. Total privacy.",
};

export default function PrivacyPolicy() {
  return (
    <main className="relative w-full min-h-screen bg-transparent text-foreground flex flex-col font-mono">
      <WebGLBackground />
      
      {/* Back Button */}
      <div className="absolute top-6 sm:top-10 left-4 sm:left-6 z-50 mix-blend-difference">
        <Link href="/" aria-label="Back to Portfolio" className="font-mono text-xs uppercase tracking-widest text-white hover:text-muted transition-colors py-2 px-3 inline-flex items-center min-h-[44px] bg-black/40 backdrop-blur-md rounded border border-white/10">
          ← Back
        </Link>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-6 z-10 w-full max-w-3xl mx-auto py-32 mt-12 md:mt-0">
        <div className="w-full border border-border bg-background/50 backdrop-blur-md p-8 md:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-2 h-full bg-accent" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] -z-10" />
          
          <h1 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tighter mb-12 text-white flex items-center gap-4">
            <span className="text-accent">]</span>
            <DecryptionText text="Privacy Policy" delay={0.2} />
          </h1>
          
          <div className="space-y-8 text-sm md:text-base text-muted leading-relaxed">
            <section>
              <h2 className="text-white uppercase tracking-widest mb-2 text-xs">01. Data Collection</h2>
              <p>I do not track you. Period. This site uses zero non-essential cookies, no creepy third-party analytics pixels, and no fingerprinting scripts.</p>
            </section>
            
            <section>
              <h2 className="text-white uppercase tracking-widest mb-2 text-xs">02. Telemetry</h2>
              <p>If you see a network request leaving your browser, it is strictly to fetch assets required to render this experience (e.g., fonts or WebGL textures). Nothing is harvested.</p>
            </section>
            
            <section>
              <h2 className="text-white uppercase tracking-widest mb-2 text-xs">03. Communication</h2>
              <p>The only data I collect is what you voluntarily send me via email or direct message. That data stays with me and is never shared, sold, or exposed.</p>
            </section>
            
            <section className="pt-8 mt-8 border-t border-border/50">
              <p className="text-xs text-accent/50">
                // SECURE_CONNECTION_ESTABLISHED<br/>
                // END_OF_POLICY
              </p>
            </section>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-auto">
        <Footer />
      </div>
    </main>
  );
}
