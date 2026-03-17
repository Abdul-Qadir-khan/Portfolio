"use client"
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa"
import { SiNextdotjs, SiTailwindcss, SiFigma } from "react-icons/si"
import { motion } from "framer-motion"

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 w-8 h-8 mx-auto" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 w-8 h-8 mx-auto" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400 w-8 h-8 mx-auto" /> },
  { name: "React", icon: <FaReact className="text-cyan-400 w-8 h-8 mx-auto" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white w-8 h-8 mx-auto" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400 w-8 h-8 mx-auto" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500 w-8 h-8 mx-auto" /> },
  { name: "Figma", icon: <SiFigma className="text-pink-500 w-8 h-8 mx-auto" /> },
]

export default function About() {
  return (
    <section id="about" className="py-32 px-6 bg-[#020617]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-white">
            About Me
          </h2>

          <p className="text-xl text-gray-400 leading-relaxed">
            I'm a frontend developer with 3+ years of experience
            building modern, responsive web applications using
            React, Next.js, and modern JavaScript tools.
          </p>

          <p className="text-xl text-gray-400 mt-4 leading-relaxed">
            I focus on performance, accessibility, and building
            scalable UI architectures for production-ready
            applications.
          </p>

          <p className="text-xl text-gray-400 mt-4 leading-relaxed">
            My goal is to create fast, accessible, and visually
            engaging experiences for users while maintaining
            clean and maintainable code.
          </p>
        </motion.div>

        {/* RIGHT SIDE SKILLS */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              whileHover={{ scale: 1.1 }}
              className="bg-slate-800/70 border border-slate-700 rounded-xl p-5 flex flex-col items-center justify-center text-gray-300 transition-shadow shadow-sm hover:shadow-indigo-500/50"
            >
              {skill.icon}
              <span className="mt-2 text-sm font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}