"use client"

import { motion } from "framer-motion"
import { projects } from "../data/projects"
import { FiExternalLink, FiGithub } from "react-icons/fi"

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 bg-[#020617]">

      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-white">
            Featured Projects
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Some of the projects I've built recently.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: "0 10px 20px rgba(99,102,241,0.4)" }}
              className="bg-slate-800/80 border border-slate-700 rounded-xl p-6 flex flex-col justify-between transition-transform cursor-pointer"
            >

              <div>
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.1, color: "#6366F1" }}
                      className="text-xs bg-indigo-500/20 text-indigo-400 px-3 py-1 rounded-full transition-colors cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-6">

                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 text-sm bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-md font-semibold transition"
                >
                  Live Demo <FiExternalLink size={16} />
                </motion.a>

                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 text-sm border border-slate-600 px-4 py-2 rounded-md hover:bg-white/10 text-gray-100 font-semibold transition"
                >
                  GitHub <FiGithub size={16} />
                </motion.a>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  )
}