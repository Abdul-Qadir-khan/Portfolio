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
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/10"
    >

      {/* 🔥 Top gradient line */}
      <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${service.gradient} opacity-70`} />

      {/* Icon */}
      <div className="mb-6">
        <div className={`w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient} shadow-md group-hover:scale-110 transition`}>
          {service.icon}
        </div>
      </div>

      {/* Content */}
      <div>
        <h3 className="text-xl font-semibold text-white mb-3">
          {service.title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* 🔥 Bottom interaction */}
      <div className="mt-6 flex items-center text-sm text-indigo-400 opacity-0 group-hover:opacity-100 transition">
        Learn more →
      </div>

    </motion.div>
  )
}