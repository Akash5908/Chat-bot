import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

<Script
  src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js"
  strategy="beforeInteractive"
/>;
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI ChatBot",
  description:
    "An interactive AI-powered chatbot built using Next.js, TypeScript, and OpenAI. Features include real-time responses, sleek animations with Vanta.js, and a fully responsive UI.",
  icons: "./favicon.png",
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
