import { Metadata } from "next"
import { Delius, Inter } from "next/font/google"

export const inter = Inter({ subsets: ["latin"] })

export const delius = Delius({
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
