"use client"

import { motion } from "framer-motion"

type TestimonialCardProps = {
  testimonial: {
    name: string
    role: string
    quote: string
  }
  index: number
}

export default function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      whileHover={{
        scale: 1.05,
        y: -5,
        boxShadow: "0 20px 40px rgba(99,102,241,0.3), 0 0 20px rgba(255,255,255,0.05)",
      }}
      className="relative bg-slate-900/30 backdrop-blur-2xl border border-slate-700 rounded-3xl flex flex-col items-center text-center p-8 cursor-pointer transition-all duration-500"
    >
      {/* Quote */}
      <p className="text-gray-300 italic text-base leading-relaxed mb-6">"{testimonial.quote}"</p>

      {/* Client Info */}
      <div className="flex flex-col items-center">
        {/* Placeholder avatar circle */}
        <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mb-3 text-white font-bold text-xl">
          {testimonial.name.charAt(0)}
        </div>
        <h4 className="font-semibold text-white">{testimonial.name}</h4>
        <span className="text-sm text-indigo-400">{testimonial.role}</span>
      </div>

      {/* Neon glow overlay */}
      <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 hover:opacity-10 transition-all duration-500 pointer-events-none" />
    </motion.div>
  )
}