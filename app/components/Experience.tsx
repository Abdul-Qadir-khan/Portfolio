"use client"

import { motion, useInView, useAnimation } from "framer-motion"
import { useEffect, useRef } from "react"
import { experience } from "../data/experience"

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) controls.start("visible")
  }, [isInView, controls])

  return (
    <section id="experience" className="py-32 px-6 bg-[#020617] relative overflow-visible">

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

          {/* Animated Vertical Line */}
          <motion.div
            ref={ref}
            initial={{ height: 0 }}
            animate={controls}
            variants={{
              visible: { height: "100%" },
              hidden: { height: 0 },
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-4 top-0 w-[4px] rounded-full bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 origin-top"
            style={{ transformOrigin: "top" }}
          />

          <div className="space-y-16 relative z-10">

            {experience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative pl-14 md:pl-20`}
              >

                {/* Animated Dot */}
                <motion.span
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 }}
                  className="absolute left-[6px] top-5 w-5 h-5 rounded-full border-4 border-[#020617] bg-indigo-500 shadow-lg"
                />

                {/* Card */}
                <motion.div
                  whileHover={{ scale: 1.03, boxShadow: "0 0 15px rgba(99, 102, 241, 0.5)" }}
                  className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 cursor-pointer transition duration-300"
                >
                  <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                  <p className="text-indigo-400 text-sm mt-1">{item.company}</p>
                  <span className="text-xs text-gray-500">{item.period}</span>
                  <p className="text-gray-400 text-sm mt-4 leading-relaxed">{item.description}</p>
                </motion.div>

              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  )
}