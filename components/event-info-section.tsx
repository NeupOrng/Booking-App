"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, Clock, MapPin, Users } from "lucide-react"

export default function EventInfoSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="bg-pink-50 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-[#1150ab]">Event Information</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={itemVariants} className="rounded-lg overflow-hidden border border-pink-200">
            <Card className="bg-pink-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarDays className="h-5 w-5 text-primary" />
                  Event Schedule
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Our event runs from June 1st to August 31st, 2025. We offer multiple sessions throughout the week to
                  accommodate your schedule.
                </p>
                <p className="mt-4 text-sm text-[#d54783]">Booking is required at least 24 hours in advance.</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} className="rounded-lg overflow-hidden border border-pink-200">
            <Card className="bg-pink-50 ">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>123 Event Center</p>
                <p>Downtown District</p>
                <p>New York, NY 10001</p>
                <p className="mt-4 text-sm text-[#d54783]">Free parking available for all attendees.</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} className="rounded-lg overflow-hidden border border-pink-200">
            <Card className="bg-pink-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  What to Expect
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Our events are designed for participants of all skill levels. Each session is led by industry experts
                  with years of experience.
                </p>
                <p className="mt-4 text-sm text-[#d54783]">All materials and refreshments are provided.</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-3 overflow-hidden rounded-lg border border-pink-200">
            <Card className="bg-pink-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Session Details
                </CardTitle>
                <CardDescription className="text-[#d54783]">What's included in each booking</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-medium mb-2">Morning Sessions (9:00 AM - 12:00 PM)</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Introduction to key concepts</li>
                      <li>Hands-on workshop</li>
                      <li>Q&A with experts</li>
                      <li>Networking opportunity</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Afternoon Sessions (1:00 PM - 5:00 PM)</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Advanced techniques</li>
                      <li>Group activities</li>
                      <li>Case studies</li>
                      <li>Personalized feedback</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

