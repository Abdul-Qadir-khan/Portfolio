"use client"

import { motion } from "framer-motion"

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">

      <div className="max-w-4xl mx-auto text-center">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-white"
        >
          Let's Work Together
        </motion.h2>

        <p className="text-gray-400 mt-4">
          I'm currently open to remote frontend developer roles and freelance opportunities.
        </p>

        {/* Contact Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">

          <a
            href="mailto:your-email@example.com"
            className="bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-lg text-sm font-medium transition"
          >
            Email Me
          </a>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            className="border border-slate-600 px-6 py-3 rounded-lg text-sm hover:bg-white/5 transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            className="border border-slate-600 px-6 py-3 rounded-lg text-sm hover:bg-white/5 transition"
          >
            LinkedIn
          </a>

        </div>

      </div>

    </section>
  )
}