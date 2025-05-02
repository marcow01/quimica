import React from 'react';
import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "QUIMICA QUIZ",
  description: "QUIZ QUIMICA ETC",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {

  return (
      <html lang="en">
        <body className={poppins.className}>
          {children}
        </body>
      </html>
  );
}
