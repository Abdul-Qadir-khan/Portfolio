"use client"

import TestimonialCard from "./TestimonialCard"

const testimonials = [
  { name: "Alice", role: "CEO", quote: "Amazing service! They exceeded all expectations." },
  { name: "Bob", role: "Developer", quote: "Highly recommended. Professional and efficient." },
  { name: "Charlie", role: "Designer", quote: "Great experience. Creative and reliable." },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-32 px-6 bg-gradient-to-b from-[#0a0f2e] to-[#020617] overflow-hidden">
      
      {/* Floating background shapes */}
      <div className="absolute top-0 left-10 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-10 right-10 w-56 h-56 bg-pink-500/20 rounded-full blur-2xl animate-blob animation-delay-2000" />

      <div className="max-w-6xl mx-auto relative z-10 text-center">

        {/* Section Title */}
        <div className="mb-20">
          <h2 className="text-5xl font-extrabold text-white drop-shadow-lg">
            What Clients Say
          </h2>
          <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
            Hear from some of the people I’ve had the pleasure to work with.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}