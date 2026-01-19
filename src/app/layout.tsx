import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google"; // Changed from Geist to Inter/Roboto_Mono

import ParticleBackground from "@/components/visuals/ParticleBackground";
import PageTransition from "@/components/layout/PageTransition";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "DigyGo - Growth Automation Agency",
  description: "We help businesses generate, manage, and convert leads using AI-powered automation systems.",
  icons: {
    icon: "/logo.png",
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
        className={`${inter.variable} ${robotoMono.variable} antialiased relative`}
      >
        <ParticleBackground />
        <Navbar />
        <PageTransition>
          {children}
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
