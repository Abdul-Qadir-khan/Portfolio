"use client"

import { motion, useInView } from "framer-motion"
import { useEffect, useRef, useState, ReactNode } from "react"

type StatCardProps = {
  stat: {
    title: string
    value: number
    icon: ReactNode
    color?: string
  }
  index: number
}

export default function StatCard({ stat, index }: StatCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const end = stat.value
    const duration = 1500
    const increment = end / (duration / 30)

    const counter = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(counter)
      } else {
        setCount(Math.floor(start))
      }
    }, 30)

    return () => clearInterval(counter)
  }, [isInView, stat.value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="flex flex-col items-center text-center cursor-default"
    >
      {/* Circle Icon */}
      <motion.div
        whileHover={{ scale: 1.2 }}
        className={`w-28 h-28 flex items-center justify-center rounded-full mb-6 ${stat.color || "bg-indigo-500"} shadow-lg text-white text-3xl`}
      >
        {stat.icon}
      </motion.div>

      {/* Animated Number */}
      <span className="text-4xl font-bold text-white mb-2">{count}</span>
      <p className="text-gray-300 text-lg">{stat.title}</p>
    </motion.div>
  )
}