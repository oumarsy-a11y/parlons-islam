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
  metadataBase: new URL("https://parlons-islam.vercel.app"),

  title: {
    default: "Parlons Islam — Science, Spiritualité & Transmission",
    template: "%s — Parlons Islam",
  },

  description:
    "Parlons Islam est une plateforme de connaissance islamique dédiée au Coran, aux hadiths, au fiqh malikite, au taṣawwuf et à la ṭarīqa tijāniyya.",

  applicationName: "Parlons Islam",

  authors: [
    {
      name: "Parlons Islam",
    },
  ],

  creator: "Parlons Islam",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName: "Parlons Islam",
    title: "Parlons Islam — Science, Spiritualité & Transmission",
    description:
      "Une plateforme de connaissance islamique dédiée à la science, à la compréhension, à la spiritualité et à la transmission.",
  },

  twitter: {
    card: "summary",
    title: "Parlons Islam — Science, Spiritualité & Transmission",
    description:
      "Une plateforme de connaissance islamique dédiée à la science, à la compréhension, à la spiritualité et à la transmission.",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}