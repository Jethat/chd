import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Noto_Sans, Noto_Sans_Devanagari } from "next/font/google";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const noto = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto",
});

const notoDev = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-dev",
});

export const metadata: Metadata = {
  title: "Central Hindi Directorate",
  description:
    "Official website of Central Hindi Directorate, Ministry of Education, Government of India",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${noto.variable} ${notoDev.variable}`}>
      <body className="font-sans">
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <TopBar />
        <Header />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}