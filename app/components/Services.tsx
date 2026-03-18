"use client"

import ServiceCard from "./ServiceCard"
import { FaLaptopCode, FaPalette, FaRocket } from "react-icons/fa"

const services = [
  {
    title: "Web Development",
    description:
      "Building fast, scalable, and responsive web applications using modern technologies.",
    icon: <FaLaptopCode size={28} className="text-white" />,
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    title: "UI/UX Design",
    description:
      "Designing clean, intuitive interfaces focused on usability and user experience.",
    icon: <FaPalette size={28} className="text-white" />,
    gradient: "from-pink-500 to-red-500",
  },
  {
    title: "Performance & SEO",
    description:
      "Optimizing applications for speed, accessibility, and better search rankings.",
    icon: <FaRocket size={28} className="text-white" />,
    gradient: "from-green-400 to-teal-400",
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-32 px-6 bg-[#020617] overflow-hidden"
    >

      {/* 🌌 Subtle background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[400px] h-[400px] bg-indigo-500/10 blur-[120px] top-0 left-0 rounded-full" />
        <div className="absolute w-[400px] h-[400px] bg-purple-500/10 blur-[120px] bottom-0 right-0 rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            My Expertise
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            I design and build modern digital products with a focus on performance,
            scalability, and user experience.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

      </div>
    </section>
  )
}