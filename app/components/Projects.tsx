"use client"

import { motion } from "framer-motion"
import { projects } from "../data/projects"
import { FiExternalLink, FiGithub } from "react-icons/fi"

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 bg-[#020617] relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[400px] h-[400px] bg-indigo-500/10 blur-[120px] top-0 left-0 rounded-full" />
        <div className="absolute w-[400px] h-[400px] bg-purple-500/10 blur-[120px] bottom-0 right-0 rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl font-bold text-white">
            Featured Projects
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Real-world projects focused on performance, scalability, and user experience.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -12 }}
              className="group relative rounded-xl overflow-hidden border border-slate-800 bg-slate-900/60 backdrop-blur"
            >

              {/* 🖼 Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">

                  <a
                    href={project.live}
                    target="_blank"
                    className="bg-indigo-500 hover:bg-indigo-600 p-3 rounded-full"
                  >
                    <FiExternalLink />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    className="border border-white/30 p-3 rounded-full hover:bg-white/10"
                  >
                    <FiGithub />
                  </a>

                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between">

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* 🔥 Highlight */}
                  <p className="text-indigo-400 text-xs mt-3">
                    {project.highlight}
                  </p>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-indigo-500/20 text-indigo-400 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-6">

                  <a
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-2 text-sm bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-md font-semibold transition"
                  >
                    Live Demo <FiExternalLink size={16} />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 text-sm border border-slate-600 px-4 py-2 rounded-md hover:bg-white/10 text-gray-100 font-semibold transition"
                  >
                    GitHub <FiGithub size={16} />
                  </a>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}