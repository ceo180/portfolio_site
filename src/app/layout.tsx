import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import TerminalPalette from "@/components/TerminalPalette";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://emmanueloshike.com"),
  title: {
    default: "Emmanuel Oshike | Software Engineer & Cybersecurity",
    template: "%s | Emmanuel Oshike",
  },
  description:
    "Portfolio of Emmanuel Oshike. Bridging the gap between hyper-modern software architecture and uncompromising system security.",
  keywords: [
    "Emmanuel Oshike",
    "Software Engineer",
    "Cybersecurity Specialist",
    "Full Stack Developer",
    "Security Analyst",
    "Next.js",
    "React",
  ],
  authors: [{ name: "Emmanuel Oshike" }],
  creator: "Emmanuel Oshike",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://emmanueloshike.com",
    title: "Emmanuel Oshike | Software Engineer & Cybersecurity",
    description:
      "Bridging the gap between hyper-modern software architecture and uncompromising system security.",
    siteName: "Emmanuel Oshike Portfolio",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Emmanuel Oshike Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emmanuel Oshike | Software Engineer",
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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
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
