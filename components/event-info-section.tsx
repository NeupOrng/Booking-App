"use client"

import { motion } from "framer-motion"
import { CalendarDays, Clock, MapPin, Users, CheckCircle, Smartphone } from "lucide-react"
import GoogleMap from "./google-map"

export default function EventInfoSection() {
  // Google Maps location for Blue Espresso Bar in Phnom Penh
  const mapLocation = "11.556374,104.928207"

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header - Styled like the image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#1150ab] tracking-wide">Candle Making Workshop</h2>
          <div className="w-32 h-1.5 bg-[#d54783] mx-auto rounded-md my-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Our candle-making workshops offer a unique creative experience in a relaxing environment. We provide all
            materials, expert guidance, and a beautiful space to craft your own personalized candle.
          </p>
        </motion.div>

        {/* Main Content - Desktop Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Session Details Card - Spans full width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-12 bg-white rounded-xl shadow-md overflow-hidden border border-pink-100"
          >
            <div className="p-6">
              <div className="text-center mb-10">
                <Clock className="h-10 w-10 text-[#d54783] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[]">Session Details</h3>
                <div className="w-24 h-1 bg-[#d54783] rounded-md mx-auto my-4"></div>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Each 1-hour session is carefully designed to give you the full candle-making experience
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                {[
                  {
                    title: "Candle creation from scratch",
                    description: "Learn the basics of candle making and create your own from high-quality materials.",
                  },
                  {
                    title: "Decoration time",
                    description: "Personalize your candle with various tools and accessories.",
                  },
                  {
                    title: "Guidance from a friendly host",
                    description: "Our experienced hosts will guide you through every step of the process.",
                  },
                  {
                    title: "Take-home candle",
                    description: "Leave with your beautiful creation and an unforgettable memory.",
                  },
                ].map((item, index) => (
                  <div key={index} className="text-center p-6 bg-white border border-gray-100 rounded-lg shadow-sm">
                    <div className="w-12 h-12 rounded-full bg-[#1150ab] flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <h4 className="font-bold text-black mb-3">{item.title}</h4>
                    <p className="text-sm text-black">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Schedule Card - Spans 4 columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 bg-white rounded-xl shadow-md overflow-hidden h-full border border-gray-100"
          >
            <div className="p-6 flex flex-col h-full">
              <div className="text-center mb-6">
                <CalendarDays className="h-10 w-10 text-[#d54783] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-black">Session Schedule</h3>
                <div className="w-16 h-1 bg-[#d54783] rounded-md mx-auto my-3"></div>
              </div>
              <p className="text-black mb-4 flex-grow">
                Our candle-making workshops are available throughout the week at Blue Espresso Bar, Phnom Penh. Each
                session lasts 1 hour, giving you the perfect amount of time to craft and decorate your own personalized
                candle.
              </p>
              <div className="bg-pink-50 border-l-4 border-[#d54783] p-4 rounded-r-md mt-auto">
                <p className="text-sm text-[#d54783]">
                  Booking is required at least 24 hours in advance. Please show up 10mins before the session starts.
                </p>
              </div>
            </div>
          </motion.div>

          {/* What to Expect Card - Spans 4 columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-4 bg-white rounded-xl shadow-md overflow-hidden h-full border border-gray-100"
          >
            <div className="p-6 flex flex-col h-full">
              <div className="text-center mb-6">
                <Users className="h-10 w-10 text-[#d54783] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-black">What to Expect</h3>
                <div className="w-16 h-1 bg-[#d54783] rounded-md mx-auto my-3"></div>
              </div>
              <p className="text-gray-600 mb-4 flex-grow">
                Our sessions are perfect for all levels—no experience needed! You'll be guided step-by-step through the
                candle-making process and leave with your own beautifully decorated candle.
              </p>
              <div className="flex items-center gap-2 text-sm bg-pink-50 p-4 rounded-md mt-auto">
                <CheckCircle className="h-5 w-5 text-[#d54783] flex-shrink-0" />
                <p className="text-[#d54783]">All materials are provided. Just bring your creativity!</p>
              </div>
            </div>
          </motion.div>

          {/* Location Card - Spans 4 columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-4 bg-white rounded-xl shadow-md overflow-hidden h-full border border-gray-100"
          >
            <div className="p-6 flex flex-col h-full">
              <div className="text-center mb-6">
                <MapPin className="h-10 w-10 text-[#d54783] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-black">Location</h3>
                <div className="w-16 h-1 bg-[#d54783] roudned-md mx-auto my-3"></div>
              </div>
              <div className="mb-4">
                <h4 className="font-semibold text-lg text-center">Blue Espresso Bar</h4>
                <p className="text-[#d54783] text-center">Phnom Penh, Cambodia</p>
              </div>
              <GoogleMap height="180px" className="rounded-lg mb-3" />
              <p className="text-sm text-[#d54783] italic text-center mt-auto">
                A cozy and creative atmosphere for your candle-making experience.
              </p>
            </div>
          </motion.div>

          {/* How to Book Card - Spans full width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-12 bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
          >
            <div className="p-6 md:p-10">
              <div className="text-center mb-12">
                <Smartphone className="h-10 w-10 text-[#d54783] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-black">How To Book</h3>
                <div className="w-24 h-1 bg-[#d54783] rounded-md mx-auto my-4"></div>
                <p className="text-black max-w-2xl mx-auto">
                  We've made booking your candle-making experience simple and straightforward
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                {/* Desktop version with horizontal steps */}
                <div className="hidden md:block">
                  <div className="relative">
                    {/* Horizontal connector line */}
                    <div className="absolute top-16 left-0 right-0 h-1 rounded-md bg-[#E5F8FF] z-0"></div>

                    <div className="flex justify-between items-start relative z-10">
                      {[
                        {
                          title: "Choose Your Time",
                          description: "Select your preferred date and time slot from our available sessions",
                          icon: CalendarDays,
                        },
                        {
                          title: "Confirm Booking",
                          description: "Receive a confirmation message via Telegram with all the details",
                          icon: CheckCircle,
                        },
                        {
                          title: "Complete Payment",
                          description: "Make your payment to secure your spot at the workshop",
                          icon: Smartphone,
                        },
                      ].map((step, index) => (
                        <div key={index} className="w-1/3 px-4 text-center">
                          <div className="mb-8 relative">
                            <div className="w-32 h-32 rounded-full bg-white border-4 border-[#d54783] flex items-center justify-center mx-auto shadow-md">
                              <step.icon className="h-12 w-12 text-[#1150ab]" />
                            </div>
                            <div className="absolute top-1 right-1 w-10 h-10 rounded-full bg-[#1150ab] flex items-center justify-center text-white font-bold text-lg">
                              {index + 1}
                            </div>
                          </div>
                          <h4 className="text-xl font-bold text-[#1150ab] mb-2">{step.title}</h4>
                          <p className="text-black">{step.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Mobile version with vertical steps */}
                <div className="md:hidden">
                  <div className="relative">
                    {/* Vertical connector line */}
                    <div className="absolute top-6 bottom-0 left-4 w-0.5 bg-[#E5F8FF] z-0"></div>

                    {[
                      {
                        title: "Choose Your Time",
                        description: "Select your preferred date and time slot from our available sessions",
                        icon: CalendarDays,
                      },
                      {
                        title: "Confirm Booking",
                        description: "Receive a confirmation message via Telegram with all the details",
                        icon: CheckCircle,
                      },
                      {
                        title: "Complete Payment",
                        description: "Make your payment to secure your spot at the workshop",
                        icon: Smartphone,
                      },
                    ].map((step, index) => (
                      <div key={index} className="mb-8 relative z-10 pl-16">
                        {/* Icon circle */}
                        <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-white border-2 border-[#00D7FF] flex items-center justify-center shadow-sm">
                          <step.icon className="h-4 w-4 text-[#002B5B]" />
                        </div>

                        {/* Number badge */}
                        <div className="absolute left-6 top-0 w-5 h-5 rounded-full bg-[#002B5B] flex items-center justify-center text-white font-bold text-xs">
                          {index + 1}
                        </div>

                        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                          <h4 className="text-lg font-bold text-[#002B5B] mb-2">{step.title}</h4>
                          <p className="text-sm text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}
