"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CalendarRange } from "lucide-react"

export default function Header() {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  })

  return (
    <header
      className="relative top-0 z-50 w-full bg-background/95 transition-all bg-pink-50">
      <div className="container mx-auto px-4 flex items-center justify-center md:justify-between">
        <div className="flex items-center gap-2 py-0">
          {/* <span className="font-bold text-4xl font-serif">EventBook</span> */}
          <div className="flex justify-center items-center h-20 overflow-hidden">
            <img className="max-w-28" src="/logo.png" alt="logo" />
          </div>
        </div>
      </div>
    </header>
  )
}

