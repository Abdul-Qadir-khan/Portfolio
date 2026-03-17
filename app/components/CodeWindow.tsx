"use client"

import { motion } from "framer-motion"

export default function CodeWindow() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="bg-[#0d1117] rounded-xl shadow-2xl border border-gray-800 w-full max-w-md"
    >
      {/* top bar */}
      <div className="flex gap-2 px-4 py-3 border-b border-gray-800">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>

      {/* code */}
      <pre className="p-6 text-sm leading-relaxed text-gray-300">
{`const developer = {
  name: "Abdul Qadir",
  role: "Frontend Developer",
  experience: "3+ years",
  stack: [
    "React",
    "Next.js",
    "JavaScript",
    "Tailwind"
  ],
  passion: "Building modern web apps"
}

export default developer`}
      </pre>
    </motion.div>
  )
}