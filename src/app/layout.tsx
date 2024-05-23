"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";
import { AOSInit } from "./aos";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <AOSInit />
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
