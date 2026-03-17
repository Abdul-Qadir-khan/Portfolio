"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 px-6 bg-gradient-to-b from-[#020617] to-[#0f172a]"
    >
      <div className="max-w-4xl mx-auto text-center">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white"
        >
          Let's Work Together 🚀
        </motion.h2>

        <p className="text-gray-400 mt-4 text-lg">
          I'm currently open to remote frontend developer roles and freelance opportunities.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-6 mt-12">

          {/* Email */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:your-email@example.com"
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-7 py-3 rounded-lg font-medium shadow-lg shadow-indigo-600/30 transition"
          >
            <Mail size={18} />
            Email Me
          </motion.a>

          {/* Github */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/yourusername"
            target="_blank"
            className="flex items-center gap-2 border border-slate-600 text-gray-200 px-7 py-3 rounded-lg hover:bg-slate-800 transition"
          >
            <Github size={18} />
            GitHub
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            className="flex items-center gap-2 border border-slate-600 text-gray-200 px-7 py-3 rounded-lg hover:bg-slate-800 transition"
          >
            <Linkedin size={18} />
            LinkedIn
          </motion.a>

        </div>
      </div>
    </section>
  )
}