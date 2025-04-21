"use client";
import type React from "react"
import { delius } from "@/lib/font"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>Kandle Bar</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body className={`font-serif bg-white`}>
        {children}
      </body>
    </html>
  )
}



import './globals.css'
import { useEffect, useState } from "react";
