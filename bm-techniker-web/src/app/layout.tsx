import type { Metadata } from "next";
import { Outfit } from "next/font/google";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "B.M Techniker | BMW & Mercedes-Benz Service | Hoppers Crossing VIC",
    template: "%s | B.M Techniker",
  },
  description:
    "Independent BMW and Mercedes-Benz specialist in Hoppers Crossing. 40+ years combined dealership experience. Logbook servicing, OEM parts, advanced diagnostics, and mechanical repairs—fix first time.",
  metadataBase: new URL("https://bmtechniker.com.au"),
  openGraph: {
    title: "B.M Techniker | German Vehicle Specialists",
    description:
      "BMW and Mercedes-Benz service with dealership-level expertise. Hoppers Crossing, Victoria.",
    url: "https://bmtechniker.com.au",
    siteName: "B.M Techniker",
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={`${outfit.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground" style={{ "--font-sans": "var(--font-outfit), ui-sans-serif, system-ui, sans-serif" } as React.CSSProperties}>
        <Navbar />
        <main className="flex min-h-[calc(100dvh-4rem)] flex-1 flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
