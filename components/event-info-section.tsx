"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock,
  MapPin,
  Users,
  CheckCircle,
  Smartphone,
} from "lucide-react";
import GoogleMap from "./google-map";

export default function EventInfoSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

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
  };

  // Google Maps location for Blue Espresso Bar in Phnom Penh (example coordinates)
  // In a real application, you would use the actual coordinates
  const mapLocation = "11.556374,104.928207"; // Example coordinates for Phnom Penh

  return (
    <section className="py-20 bg-pink-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1150ab]">
            Candle-Making Workshop
          </h2>
          <div className="w-20 h-1 bg-pink-500 mx-auto mt-4 mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Join us for a creative and relaxing candle-making experience in the
            heart of Phnom Penh
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-12"
          >
            {/* Schedule Section */}
            <motion.div variants={itemVariants} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-pink-100 flex items-center justify-center">
                  <CalendarDays className="h-7 w-7 text-[#d54783]" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Session Schedule</h3>
                <p className="text-black mb-4">
                  Our candle-making workshops are available throughout the week
                  at Blue Espresso Bar, Phnom Penh. Each session lasts 1 hour,
                  giving you the perfect amount of time to craft and decorate
                  your own personalized candle.
                </p>
                <div className="bg-pink-50 border-l-4 border-[#d54783] p-4 rounded-r-md">
                  <p className="text-sm text-[#d54783]">
                    Booking is required at least 24 hours in advance. Please
                    show up 10mins before the session starts.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Location Section */}
            <motion.div variants={itemVariants} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-pink-100 flex items-center justify-center">
                  <MapPin className="h-7 w-7 text-[#d54783]" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Location</h3>
                <div className="shadow-sm rounded-lg p-5 border border-[#d54783]">
                  <h4 className="font-semibold text-lg">Blue Espresso Bar</h4>
                  <p className="text-[#d54783] mb-3">Phnom Penh, Cambodia</p>

                  {/* Google Maps Component */}
                  <GoogleMap
                    height="180px"
                    className="mb-3"
                  />

                  <p className="text-sm text-gray-600 italic">
                    A cozy and creative atmosphere for your candle-making
                    experience.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* What to Expect Section */}
            <motion.div variants={itemVariants} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-pink-100 flex items-center justify-center">
                  <Users className="h-7 w-7 text-[#d54783]" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">What to Expect</h3>
                <p className="text-[#d54783] mb-4">
                  Our sessions are perfect for all levels—no experience needed!
                  You'll be guided step-by-step through the candle-making
                  process and leave with your own beautifully decorated candle.
                </p>
                <div className="flex items-center gap-2 text-sm text-[#d54783] bg-pink-100 p-3 rounded-md">
                  <CheckCircle className="h-5 w-5 text-[#d54783] flex-shrink-0" />
                  <p>All materials are provided. Just bring your creativity!</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-12"
          >
            {/* Session Details Section */}
            <motion.div variants={itemVariants} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-pink-100 flex items-center justify-center">
                  <Clock className="h-7 w-7 text-[#d54783]" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Session Details</h3>
                <p className="text-black mb-4">
                  Each 1-hour session includes:
                </p>

                <div className="grid grid-cols-1 gap-4">
                  <div className="p-4 rounded-lg shadow-sm border border-[#d54783] flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#d54783] font-semibold">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium">
                        Candle creation from scratch
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Learn the basics of candle making and create your own
                        from high-quality materials.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg shadow-sm border border-[#d54783] flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#d54783] font-semibold">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Decoration time</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Personalize your candle with various tools and
                        accessories.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg shadow-sm border border-[#d54783] flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#d54783] font-semibold">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium">
                        Guidance from a friendly host
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Our experienced hosts will guide you through every step
                        of the process.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg shadow-sm border border-[#d54783] flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-pink-600 font-semibold">4</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Take-home candle</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Leave with your beautiful creation and an unforgettable
                        memory.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* How to Book Section */}
            <motion.div variants={itemVariants} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-pink-100 flex items-center justify-center">
                  <Smartphone className="h-7 w-7 text-[#d54783]" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">How to Book</h3>
                <div className=" p-5 rounded-lg border border-[#d54783]">
                  <p className="font-medium mb-4">
                    We only accept online bookings.
                  </p>
                  <ol className="space-y-4">
                    <li className="flex items-center gap-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-pink-100 text-[#d54783] text-xs font-medium shrink-0">
                        1
                      </span>
                      <span>Choose your preferred time slot</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-pink-100 text-[#d54783] text-xs font-medium shrink-0">
                        2
                      </span>
                      <span>Receive a confirmation via Telegram</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-pink-100 text-[#d54783] text-xs font-medium shrink-0">
                        3
                      </span>
                      <span>Complete your payment to secure your spot</span>
                    </li>
                  </ol>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
