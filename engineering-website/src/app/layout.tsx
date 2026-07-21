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

const siteUrl = "https://wefrip.net";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "FRIP — From Idea to Production",
    template: "%s | FRIP",
  },

  description:
    "FRIP helps startups and businesses transform ideas into production-ready software through engineering leadership, backend development, cloud architecture and dedicated engineering teams.",

  keywords: [
    "Engineering Leadership",
    "Software Engineering Manager",
    "Backend Development",
    "Node.js",
    "TypeScript",
    "AWS",
    "Cloud Architecture",
    "Distributed Systems",
    "Technical Leadership",
    "Software Consulting",
    "Engineering Team",
    "FinTech",
    "Open Banking",
  ],

  authors: [
    {
      name: "Michail Ostryj",
    },
  ],

  creator: "FRIP",

  publisher: "FRIP",

  openGraph: {
    title: "FRIP — From Idea to Production",
    description:
      "Engineering leadership and product delivery for startups and growing businesses.",

    url: siteUrl,

    siteName: "FRIP",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FRIP - From Idea to Production",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "FRIP — From Idea to Production",
    description: "Engineering leadership and production-ready software.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-neutral-950 text-white selection:bg-sky-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
