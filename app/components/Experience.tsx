"use client"

import { motion } from "framer-motion"
import { experience } from "../data/experience"

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 bg-[#020617]">

      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            My Experience
          </h2>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            My professional journey building modern websites and responsive
            interfaces for businesses and startups.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-4 top-0 h-full w-[2px] bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500"></div>

          <div className="space-y-12">

            {experience.map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative pl-14"
              >

                {/* Dot */}
                <span className="absolute left-[6px] top-3 w-4 h-4 bg-indigo-500 rounded-full border-4 border-[#020617]"></span>

                {/* Card */}
                <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 hover:border-indigo-500 transition duration-300 hover:shadow-lg hover:shadow-indigo-500/10">

                  <h3 className="text-xl font-semibold text-white">
                    {item.role}
                  </h3>

                  <p className="text-indigo-400 text-sm mt-1">
                    {item.company}
                  </p>

                  <span className="text-xs text-gray-500">
                    {item.period}
                  </span>

                  <p className="text-gray-400 text-sm mt-4 leading-relaxed">
                    {item.description}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </section>
  )
}