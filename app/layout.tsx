import type React from "react"
import type { Metadata } from "next"
import { Inter, Delius } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"


const inter = Inter({ subsets: ["latin"] })

const delius = Delius({
  weight: '400', // Delius only has a regular weight
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-delius', // This creates a CSS variable
})

export const metadata: Metadata = {
  title: "EventBook - Book Your Next Event",
  description: "Find and book your next event with ease",
    generator: 'Book App'
}

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
      <body className={`${delius.className} bg-pink-50`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'