"use client"
import { motion } from "framer-motion"
import { useMediaQuery } from "@/hooks/use-media-query"
import ImageDisplay from "./image-display"
import RegistrationForm from "./registration-form"

export default function BookingSection() {
  const isDesktop = useMediaQuery("(min-width: 768px)")

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.section
      className="container mx-auto py-12 px-0 max-w-[1080px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-start px-0 md:space-x-8">
        {isDesktop ? (
          <>
            <motion.div className="w-full md:w-1/2" variants={itemVariants}>
              <ImageDisplay />
            </motion.div>
            <motion.div className="w-full sticky top-2 md:w-1/2 px-3 mt-8 md:mt-0" variants={itemVariants}>
              <RegistrationForm />
            </motion.div>
          </>
        ) : (
          <>
            <motion.div className="w-full" variants={itemVariants}>
              <ImageDisplay />
            </motion.div>
            <motion.div className="w-full mt-8" variants={itemVariants}>
              <RegistrationForm />
            </motion.div>
          </>
        )}
      </div>
    </motion.section>
  )
}

