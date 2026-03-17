"use client"

import { motion } from "framer-motion"
import { projects } from "../data/projects"

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">

      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-white">
            Featured Projects
          </h2>
          <p className="text-gray-400 mt-4">
            Some of the projects I've built recently.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-slate-800/70 border border-slate-700 rounded-xl p-6 hover:border-indigo-500 transition"
            >

              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>

              <p className="text-gray-400 mt-3 text-sm">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-6">

                <a
                  href={project.live}
                  className="text-sm bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-md"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  className="text-sm border border-slate-600 px-4 py-2 rounded-md hover:bg-white/5 text-gray-100"
                >
                  GitHub
                </a>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  )
}