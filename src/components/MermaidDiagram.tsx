"use client";
import React, { useEffect, useRef, useState } from "react";

interface MermaidProps {
  chart: string;
}

export default function MermaidDiagram({ chart }: MermaidProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const renderChart = async () => {
      try {
        const mermaid = (await import("mermaid")).default;

        mermaid.initialize({
          startOnLoad: false,
          theme: "dark",
          fontFamily: "var(--font-mono)",
          securityLevel: "loose",
          themeVariables: {
            darkMode: true,
            background: "transparent",
            primaryColor: "#222222",
            primaryTextColor: "#ffffff",
            primaryBorderColor: "#444444",
            lineColor: "#888888",
            secondaryColor: "#111111",
            tertiaryColor: "#050505"
          }
        });

        const id = `mermaid-${Math.random().toString(36).substring(7)}`;
        const { svg } = await mermaid.render(id, chart);
        
        if (ref.current && isMounted) {
          ref.current.innerHTML = svg;
          setRendered(true);
        }
      } catch (e) {
        console.error("Mermaid parsing error:", e);
      }
    };

    if (ref.current) {
      renderChart();
    }

    return () => {
      isMounted = false;
    };
  }, [chart]);

  return (
    <div className="w-full flex justify-center text-xs md:text-sm font-mono opacity-80 hover:opacity-100 transition-opacity">
      <div ref={ref} className="w-full max-w-full overflow-x-auto overflow-y-hidden" />
    </div>
  );
}
