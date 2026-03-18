"use client"

import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa"
import { SiNextdotjs, SiTailwindcss, SiFigma } from "react-icons/si"
import { motion } from "framer-motion"

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 w-8 h-8" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 w-8 h-8" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400 w-8 h-8" /> },
  { name: "React", icon: <FaReact className="text-cyan-400 w-8 h-8" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white w-8 h-8" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400 w-8 h-8" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500 w-8 h-8" /> },
  { name: "Figma", icon: <SiFigma className="text-pink-500 w-8 h-8" /> },
]

export default function About() {
  return (
    <section id="about" className="py-32 px-6 bg-[#020617] relative overflow-hidden">

      {/* 🌌 Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[400px] h-[400px] bg-indigo-500/10 blur-[120px] top-10 left-0 rounded-full" />
        <div className="absolute w-[400px] h-[400px] bg-purple-500/10 blur-[120px] bottom-0 right-0 rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-slate-900/60 backdrop-blur border border-slate-800 rounded-2xl p-8"
        >
          <h2 className="text-4xl font-bold mb-6 text-white">
            About Me
          </h2>

          <p className="text-gray-400 leading-relaxed">
            I'm a{" "}
            <span className="text-white font-medium">
              frontend developer
            </span>{" "}
            focused on building{" "}
            <span className="text-indigo-400">
              fast, scalable, and modern web applications
            </span>{" "}
            using React and Next.js.
          </p>

          <p className="text-gray-400 mt-4 leading-relaxed">
            I enjoy turning complex ideas into{" "}
            <span className="text-white">
              simple, beautiful, and intuitive interfaces
            </span>{" "}
            that deliver real user value.
          </p>

          <p className="text-gray-400 mt-4 leading-relaxed">
            My focus is on{" "}
            <span className="text-indigo-400">
              performance, clean architecture, and great UX
            </span>{" "}
            — building products that are not just functional,
            but enjoyable to use.
          </p>
        </motion.div>

        {/* RIGHT SKILLS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6"
        >
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="group bg-slate-800/60 border border-slate-700 rounded-xl p-5 flex flex-col items-center justify-center text-gray-300 backdrop-blur hover:border-indigo-500/40 hover:shadow-lg hover:shadow-indigo-500/20"
            >
              {/* Icon */}
              <div className="transition-transform duration-300 group-hover:scale-110">
                {skill.icon}
              </div>

              {/* Name */}
              <span className="mt-3 text-sm font-medium group-hover:text-white">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}