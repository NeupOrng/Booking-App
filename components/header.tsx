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
      className="relative top-0 z-50 w-full border-b bg-background/95 backdrop-blur transition-all">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div
          className="flex items-center gap-2"
        >
          <CalendarRange className="h-6 w-6 text-pink-500" />
          <span className="font-bold text-xl">EventBook</span>
        </div>
      </div>
    </header>
  )
}

