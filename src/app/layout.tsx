import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import OrganizationSchema from "@/components/SEO/OrganizationSchema";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sewapaws.com"),

  title: {
    default: "Sewa Paws | Animal Care & Welfare",
    template: "%s | Sewa Paws",
  },

  description:
    "Sewa Paws is an emerging animal-focused startup creating thoughtful solutions for animal care and welfare.",

  keywords: [
    "Sewa Paws",
    "animal care",
    "animal welfare",
    "animal care startup",
    "animal welfare startup",
  ],

  openGraph: {
    title: "Sewa Paws | Animal Care & Welfare",
    description:
      "An emerging animal-focused startup creating thoughtful solutions for animal care and welfare.",
    url: "https://sewapaws.com",
    siteName: "Sewa Paws",
    type: "website",
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
    <html lang="en">
      <body
        className={`${manrope.variable} ${fraunces.variable} antialiased`}
      >
        <OrganizationSchema />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}