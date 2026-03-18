"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { HiMenu, HiX } from "react-icons/hi"

const links = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState("")
  const [scrolled, setScrolled] = useState(false)

  // 🔥 Detect scroll (for glass effect)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = links.map((l) => l.href.replace("#", ""))
      sections.forEach((id) => {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(id)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#020617]/80 backdrop-blur-lg border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        {/* 🔥 Logo with hover */}
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-white font-semibold text-lg tracking-wide cursor-pointer"
        >
          Abdul Qadir
        </motion.h1>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">

          {links.map((link) => {
            const isActive = active === link.href.replace("#", "")

            return (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-gray-300 hover:text-white transition"
              >
                {link.name}

                {/* 🔥 Active + hover underline */}
                <motion.span
                  className="absolute left-0 -bottom-1 h-[2px] bg-indigo-500"
                  initial={{ width: 0 }}
                  animate={{ width: isActive ? "100%" : "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            )
          })}

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-indigo-500 hover:bg-indigo-600 text-sm px-4 py-2 rounded-lg text-white shadow-md shadow-indigo-500/30"
          >
            Resume
          </motion.button>

        </div>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button
            aria-label="Toggle menu"
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white"
          >
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-[#020617]/95 backdrop-blur-xl flex flex-col items-center justify-center"
    >

      {/* Close button (top right) */}
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-6 right-6 text-gray-300 hover:text-white"
      >
        <HiX size={30} />
      </button>

      {/* Links */}
      <div className="flex flex-col items-center gap-8">

        {links.map((link, i) => {
          const isActive = active === link.href.replace("#", "")

          return (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-2xl font-semibold transition ${
                  isActive ? "text-indigo-400" : "text-gray-300"
                }`}
              >
                {link.name}
              </Link>
            </motion.div>
          )
        })}

      </div>

      {/* CTA */}
      <motion.button
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        whileHover={{ scale: 1.05 }}
        className="mt-12 bg-indigo-500 hover:bg-indigo-600 px-8 py-3 rounded-lg text-white font-semibold shadow-lg shadow-indigo-500/30"
      >
        Download Resume
      </motion.button>

    </motion.div>
  )}
</AnimatePresence>

      </nav>
    </header>
  )
}