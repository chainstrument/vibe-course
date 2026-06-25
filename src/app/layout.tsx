import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollIndicator from "@/components/ScrollIndicator";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://vibe-course.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Vibe Course — Apprendre à builder avec l'IA",
    template: "%s — Vibe Course",
  },
  description:
    "Plateforme d'apprentissage du vibecoding pour débutants. Apprends à construire des applications avec l'IA sans savoir coder.",
  keywords: ["vibecoding", "IA", "apprendre", "builder", "no-code", "prompt", "Claude", "ChatGPT"],
  authors: [{ name: "Vibe Course" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Vibe Course",
    title: "Vibe Course — Apprendre à builder avec l'IA",
    description:
      "Plateforme d'apprentissage du vibecoding pour débutants. Apprends à construire des applications avec l'IA sans savoir coder.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Vibe Course" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vibe Course — Apprendre à builder avec l'IA",
    description:
      "Plateforme d'apprentissage du vibecoding pour débutants. Apprends à construire des applications avec l'IA sans savoir coder.",
    images: ["/og.png"],
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
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-50">
        <ScrollIndicator />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
