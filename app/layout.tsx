import type React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import { Barlow } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dra. Thaysa Macedo | Clínica Médica",
  description:
    "Medicina Integrativa, Emagrecimento Saudável e Tratamento de Dores Crônicas",
  generator: "v0.app",
};

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={barlow.variable}>
      <body>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}
