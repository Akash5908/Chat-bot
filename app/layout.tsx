import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import AnimatedCursor from "react-animated-cursor";

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
        <AnimatedCursor
          innerSize={12}
          outerSize={8}
          color="255,63,129" // neon pink
          outerAlpha={0.4}
          innerScale={0.8}
          outerScale={5}
          innerStyle={{
            background:
              "linear-gradient(135deg, rgba(255, 63, 129, 1), rgba(140, 82, 255, 1))",
            boxShadow: "0 0 10px rgba(255, 63, 129, 0.8)",
            borderRadius: "50%",
            zIndex: 999,
          }}
          outerStyle={{
            mixBlendMode: "exclusion",
            border: "2px solid rgba(255, 63, 129, 0.4)",
            boxShadow: "0 0 6px rgba(255, 63, 129, 0.3)",
          }}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
          ]}
        />
        {children}
      </body>
    </html>
  );
}
