"use client"

import { useState } from "react"
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

  return (
    <header className="fixed w-full top-0 z-50 backdrop-blur-md bg-[#0f172a]/70 border-b border-white/10">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <h1 className="text-white font-semibold text-lg tracking-wide">
          Abdul Qadir
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">

          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-gray-300 hover:text-white transition"
            >
              {link.name}
              <motion.span
                className="absolute left-0 -bottom-1 h-[2px] w-0 bg-indigo-500"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          ))}

          <button className="bg-indigo-500 hover:bg-indigo-600 text-sm px-4 py-2 rounded-lg text-gray-100">
            Resume
          </button>

        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            aria-label="Toggle menu"
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-[#0f172a]/95 backdrop-blur-md border-t border-white/10 flex flex-col items-center py-6 md:hidden"
            >
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-white py-2 text-lg"
                >
                  {link.name}
                </Link>
              ))}
              <button className="mt-4 bg-indigo-500 hover:bg-indigo-600 text-sm px-6 py-2 rounded-lg text-gray-100">
                Resume
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </nav>
    </header>
  )
}