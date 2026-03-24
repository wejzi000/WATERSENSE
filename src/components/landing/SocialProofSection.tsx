'use client'

import { motion } from 'framer-motion'

export function SocialProofSection() {
  const placeholders = Array.from({ length: 5 })

  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-6xl px-6 text-center"
      >
        {/* Titre discret */}
        <p className="text-sm font-medium text-gray-400 font-sans uppercase tracking-widest mb-8">
          Partenaires et soutiens institutionnels
        </p>

        {/* Conteneur des logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {placeholders.map((_, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-32 h-12"
            >
              <div className="w-full h-8 bg-gray-200 rounded animate-pulse" />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
