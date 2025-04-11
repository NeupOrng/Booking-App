"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function WorkshopTypesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-[#1150ab] mb-16"
        >
          Private, Public & corporate Workshops
          <div className="w-32 h-1.5 bg-[#d54783] mx-auto rounded-md my-6"></div>
        </motion.h2>

         {/* Corporate Workshop */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://kandlebar-admin.buyemerch.com/uploads/c317d0b01cfc52718871fe8e4de76b68_f6df468eb8.jpg"
              alt="Corporate team building workshop with people making candles together"
              className="w-full h-auto rounded-md shadow-md"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-center md:text-left text-3xl font-bold text-[#000000] mb-6">CORPORATE WORKSHOP</h3>
            <p className="text-gray-700 leading-relaxed">
              The perfect team activity that combines collaboration, relaxation and the joy of crafting. Ignite your
              team's creativity and bond over the art of candle making.
            </p>

            <div className="flex w-full justify-center md:justify-start my-8">
                <Button className="bg-[#1128ab] hover:bg-[#d54783] text-white rounded-md px-8 py-6 h-auto">CONTACT US</Button>
            </div>
          </motion.div>
        </div>

        {/* Private Candle Party */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h3 className="text-center md:text-left text-3xl font-bold text-black mb-6">Private Candle Party</h3>
            <p className="text-black leading-relaxed">
              Celebrating a birthday, bachelorette party, bridal shower or baby shower. Or, just looking to get a group
              of friends together for a good time. Join us for a private candle-making party!
            </p>
            <div className="flex w-full justify-center md:justify-start my-8">
                <Button className="bg-[#1128ab] hover:bg-[#d54783] text-white rounded-md px-8 py-6 h-auto">CONTACT US</Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <img
              src="https://kandlebar-admin.buyemerch.com/uploads/51d196f14a1f8cceb21a56e0a31bcbc9_a0ec6c25f9.jpg"
              alt="Private candle party setup with crystal chandelier and elegant table setting"
              className="w-full h-auto rounded-md shadow-md"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
