"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <footer className="bg-gray-100 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-lg mb-4">EventBook</h3>
            <p className="text-gray-600 mb-4">
              Making event booking simple and enjoyable. Find and book your next experience with ease.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-500 hover:text-pink-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-pink-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-pink-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Events", "About Us", "Contact"].map((link) => (
                <motion.li key={link} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Link href="#" className="text-gray-600 hover:text-pink-500 transition-colors">
                    {link}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              {["Terms of Service", "Privacy Policy", "Cookie Policy", "Refund Policy"].map((link) => (
                <motion.li key={link} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Link href="#" className="text-gray-600 hover:text-pink-500 transition-colors">
                    {link}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-pink-500 shrink-0 mt-0.5" />
                <span className="text-gray-600">123 Event Center, Downtown District, New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-pink-500" />
                <span className="text-gray-600">(123) 456-7890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-pink-500" />
                <span className="text-gray-600">info@eventbook.com</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p>&copy; {new Date().getFullYear()} EventBook. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

