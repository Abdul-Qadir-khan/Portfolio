"use client"

import StatCard from "./StatCard"
import { FaAward, FaSmile, FaProjectDiagram } from "react-icons/fa"

const stats = [
  { title: "Projects Completed", value: 120, icon: <FaProjectDiagram size={28} />, color: "bg-indigo-500" },
  { title: "Happy Clients", value: 80, icon: <FaSmile size={28} />, color: "bg-pink-500" },
  { title: "Awards Won", value: 15, icon: <FaAward size={28} />, color: "bg-green-400" },
]

export default function FunStats() {
  return (
    <section id="fun-stats" className="relative py-32 px-6 bg-[#0a0f2e]">
      <div className="max-w-6xl mx-auto text-center">

        {/* Section Title */}
        <div className="mb-20">
          <h2 className="text-5xl font-extrabold text-white drop-shadow-lg">
            My Achievements
          </h2>
          <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
            Stats that showcase my professional milestones.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}