import React from 'react';
import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google';
import { ThemeProvider } from "@/components/themeprovider"

const poppins = Poppins({ subsets: ['latin'], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "BOT GENERATOR",
  description: "TELEGRAM BOT GENERATOR",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {

  return (
    <ThemeProvider storageKey="vite-ui-theme">
      <html lang="en">
        <body className={poppins.className}>
          {children}
        </body>
      </html>
  </ThemeProvider>
  );
}
