"use client"

import { motion } from "framer-motion"
import CodeWindow from "./CodeWindow"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 relative overflow-hidden">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-indigo-400 mb-4"
          >
            Frontend Developer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold leading-tight text-white"
          >
            I build modern web apps with React & Next.js
          </motion.h1>

          <p className="mt-6 text-gray-400 max-w-lg">
            Frontend developer with 3+ years of experience building
            scalable, performant web applications and modern UI
            experiences.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-lg text-gray-100">
              View Projects
            </button>

            <button className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-white/5 text-white">
              Contact Me
            </button>
          </div>

        </div>

        <div className="relative flex justify-center">

          <div className="absolute top-40 left-1/2 -translate-x-1/2 w-150 h-150 bg-indigo-500/20 blur-[120px] rounded-full"></div>

          <CodeWindow />

        </div>

      </div>

    </section>
  )
}