"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

export type ServiceCardProps = {
  service: {
    title: string
    description: string
    icon: ReactNode
    gradient?: string
  }
  index: number
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      whileHover={{
        scale: 1.1,
        y: -8,
        boxShadow: `0 20px 40px rgba(99,102,241,0.4), 0 0 20px rgba(255,255,255,0.1)`,
      }}
      className="relative bg-slate-900/30 backdrop-blur-2xl border border-slate-700 rounded-3xl flex flex-col items-center text-center p-10 cursor-pointer transition-all duration-500 hover:shadow-indigo-500/30"
    >
      {/* Floating gradient icon */}
      <motion.div
        whileHover={{ rotate: 20, scale: 1.3 }}
        className={`w-20 h-20 flex items-center justify-center rounded-full mb-6 bg-gradient-to-br ${service.gradient} shadow-lg`}
      >
        {service.icon}
      </motion.div>

      <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-md">
        {service.title}
      </h3>
      <p className="text-gray-300 text-base leading-relaxed">{service.description}</p>

      {/* Neon glow effect */}
      <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 hover:opacity-10 transition-all duration-500 pointer-events-none" />
    </motion.div>
  )
}