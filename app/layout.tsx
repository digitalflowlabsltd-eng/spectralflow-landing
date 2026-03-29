import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SpectralFlow — Quantum Co-Design Platform",
  description:
    "Predict T₂, gate fidelity, and sensitivity before you enter the cleanroom. 17+ channel decoherence model · 80 experimental anchors · 12 UK patents filed.",
  openGraph: {
    title: "SpectralFlow — Quantum Co-Design Platform",
    description:
      "Predict T₂, gate fidelity, and sensitivity before you enter the cleanroom. 17+ channel decoherence model · 80 experimental anchors · 12 UK patents filed.",
    url: "https://spectralflow.ai",
    siteName: "SpectralFlow",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "SpectralFlow — Quantum Co-Design Platform",
    description:
      "Predict T₂, gate fidelity, and sensitivity before you enter the cleanroom. 17+ channel decoherence model · 80 experimental anchors · 12 UK patents filed.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
