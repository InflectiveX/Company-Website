import type { Metadata } from "next";
import { Inter_Tight, Rethink_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const rethinkSans = Rethink_Sans({
  variable: "--font-rethink-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "InflectiveX - Software Development Startup Landing Page",
  description:
    "Elevate your agency's online presence with InflectiveX, a meticulously crafted template for creative agencies. Showcase your projects and impress clients with a sleek, professional design.",
  openGraph: {
    title: "InflectiveX - Software Development Startup Landing Page",
    description:
      "Elevate your agency's online presence with InflectiveX, a meticulously crafted template for creative agencies.",
    images: [
      "https://framerusercontent.com/images/0KQhbqVycoinCiK4e5WBgzh4.jpg",
    ],
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
        className={`${interTight.variable} ${rethinkSans.variable} ${ibmPlexMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
