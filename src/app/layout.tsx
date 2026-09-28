import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Syne, Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import TerminalPalette from "@/components/TerminalPalette";

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : null) ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null) ||
  "https://emmanueloshike.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Emmanuel Oshike | Software & Cybersecurity Analyst",
    template: "%s | Emmanuel Oshike",
  },
  description:
    "Portfolio of Emmanuel Oshike. Bridging the gap between hyper-modern software architecture and uncompromising system security.",
  keywords: [
    "Emmanuel Oshike",
    "Software Engineer",
    "Cybersecurity Analyst",
    "Full Stack Developer",
    "Network Security Engineer",
    "Suricata IDS",
    "Zeek Telemetry",
    "Elastic Stack SIEM",
    "Next.js 16",
    "React 19",
    "TypeScript",
    "PostgreSQL",
    "Zero-Trust Architecture",
    "Lagos Nigeria Developer",
    "Security Operations",
  ],
  authors: [{ name: "Emmanuel Oshike", url: siteUrl }],
  creator: "Emmanuel Oshike",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Emmanuel Oshike | Software & Cybersecurity Analyst",
    description:
      "Bridging the gap between hyper-modern software architecture and uncompromising system security.",
    siteName: "Emmanuel Oshike Portfolio",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Emmanuel Oshike | Software & Cybersecurity Analyst",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emmanuel Oshike | Software & Cybersecurity Analyst",
    description:
      "Bridging the gap between hyper-modern software architecture and uncompromising system security.",
    images: ["/images/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Emmanuel Oshike",
  url: siteUrl,
  image: `${siteUrl}/images/og-image.png`,
  jobTitle: "Software Engineer & Cybersecurity Analyst",
  worksFor: {
    "@type": "Organization",
    name: "Emmanuel Tech Group",
  },
  sameAs: [
    "https://github.com/ceo180",
    "https://www.linkedin.com/in/emmanuel-oshike",
  ],
  knowsAbout: [
    "Full-Stack Software Engineering",
    "Cybersecurity Analysis",
    "Intrusion Detection Systems",
    "Network Security Monitoring",
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "Elastic Stack",
    "Suricata IDS",
    "Zero-Trust Architecture",
  ],
  description:
    "Software Engineer and Cybersecurity Analyst architecting resilient full-stack systems and high-throughput network security telemetry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} ${outfit.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-foreground min-h-screen">
        <Cursor />
        <SmoothScroll>
          <Navbar />
          <TerminalPalette />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
