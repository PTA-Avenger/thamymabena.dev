import type { Metadata } from "next";
import { Space_Mono, DM_Serif_Display, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import AppWrapper from "@/components/layout/AppWrapper";
import "./globals.css";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-dm-serif-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Thato Mabena — Software Engineer",
  description:
    "Portfolio of Thato Mabena — BSc IT graduate building distributed systems, AI pipelines, and data-driven applications.",
  metadataBase: new URL("https://thatom.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Thato Mabena — Software Engineer",
    description:
      "Final-year BSc IT graduate building distributed systems, AI/ML pipelines, and data engineering solutions.",
    url: "https://thatom.dev",
    siteName: "Thato Mabena Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thato Mabena — Software Engineer",
    description:
      "Final-year BSc IT graduate building distributed systems, AI/ML pipelines, and data engineering solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceMono.variable} ${dmSerifDisplay.variable} ${dmSans.variable} antialiased`}
      >
        <AppWrapper>{children}</AppWrapper>
        <Analytics />
      </body>
    </html>
  );
}
