"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import CodeWindow from "./CodeWindow"

const roles = [
  "Frontend Developer",
  "React Specialist",
  "Next.js Engineer",
]

export default function Hero() {
  const [text, setText] = useState("")
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  // Typing effect
  useEffect(() => {
    if (subIndex === roles[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000)
      return
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false)
      setIndex((prev) => (prev + 1) % roles.length)
      return
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1))
      setText(roles[index].substring(0, subIndex))
    }, deleting ? 40 : 80)

    return () => clearTimeout(timeout)
  }, [subIndex, index, deleting])

  return (
    <section className="min-h-screen flex items-center px-6 relative overflow-hidden">

      {/* 🌌 Animated background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-indigo-500/20 blur-[120px] rounded-full top-[-100px] left-[-100px] animate-pulse" />
        <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full bottom-[-100px] right-[-100px] animate-pulse" />
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div>

          {/* ✨ Typing role */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-indigo-400 mb-4 h-6"
          >
            {text}
            <span className="animate-pulse">|</span>
          </motion.p>

          {/* 🔥 Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold leading-tight text-white"
          >
            I build modern, high-performance web apps
          </motion.h1>

          {/* ✍️ Improved description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-gray-400 max-w-lg"
          >
            I help startups and businesses build fast, scalable, and visually
            engaging web applications using React, Next.js, and modern UI tools.
          </motion.p>

          {/* 🚀 CTA Buttons */}
          <div className="flex gap-4 mt-8">

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-lg text-white shadow-lg shadow-indigo-500/30 transition"
            >
              See My Work
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-white/10 text-white transition"
            >
              Hire Me
            </motion.button>

          </div>

        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center">

          {/* 💡 Glow behind code */}
          <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-indigo-500/20 blur-[120px] rounded-full"></div>

          {/* ✨ Floating animation */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <CodeWindow />
          </motion.div>

        </div>

      </div>
    </section>
  )
}