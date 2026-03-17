"use client"

import ServiceCard from "./ServiceCard"
import { FaLaptopCode, FaPalette, FaRocket } from "react-icons/fa"

const services = [
  {
    title: "Web Development",
    description:
      "Creating responsive, modern websites with a focus on performance and accessibility.",
    icon: <FaLaptopCode size={36} className="text-white" />,
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    title: "UI/UX Design",
    description:
      "Designing engaging user experiences with elegant, intuitive interfaces.",
    icon: <FaPalette size={36} className="text-white" />,
    gradient: "from-pink-500 to-red-500",
  },
  {
    title: "SEO Optimization",
    description:
      "Boosting website visibility and driving organic traffic effectively.",
    icon: <FaRocket size={36} className="text-white" />,
    gradient: "from-green-400 to-teal-400",
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-32 px-6 bg-gradient-to-b from-[#0a0f2e] to-[#020617] overflow-hidden"
    >
      {/* Floating shapes for depth */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-20 right-10 w-56 h-56 bg-pink-500/20 rounded-full blur-2xl animate-blob animation-delay-2000" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Title */}
        <div className="mb-20 text-center">
          <h2 className="text-5xl font-extrabold text-white tracking-wide drop-shadow-lg">
            My Expertise
          </h2>
          <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
            Combining design, development, and strategy to create high-impact digital experiences.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}