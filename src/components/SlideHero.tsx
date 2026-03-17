'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
} as const

export function SlideHero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="slide gradient-deep relative" id="hero">
      {/* Water drop SVG background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          viewBox="0 0 400 400"
          className="absolute -right-20 top-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] opacity-[0.07]"
          style={{ transform: `translateY(calc(-50% + ${scrollY * 0.15}px))` }}
        >
          <path
            d="M200 20 C200 20 340 180 340 260 C340 340 280 380 200 380 C120 380 60 340 60 260 C60 180 200 20 200 20Z"
            fill="url(#dropGrad)"
          />
          <defs>
            <linearGradient id="dropGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0074D9" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
          </defs>
        </svg>

        {/* Floating dots */}
          {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-sky-400/10"
            style={{
              width: 4 + i * 3,
              height: 4 + i * 3,
              left: `${20 + i * 18}%`,
              top: `${25 + (i % 3) * 20}%`,
            }}
            animate={{ y: [0, -15, 0], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 glass px-5 py-2 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
          <span className="text-sm font-medium text-white/80">
            Irrigation prescriptive
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
        >
          Chaque goutte compte.{' '}
          <span className="bg-gradient-to-r from-electric to-emerald bg-clip-text text-transparent">
            Chaque goutte décide.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10"
        >
          L&apos;IA qui vous dit quand, combien et où irriguer.
          <br />
          <span className="text-emerald font-semibold">-20% d&apos;eau garanti par contrat.</span>
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <a href="#roi" className="btn-cta">
            Calculer mon ROI →
          </a>
          <a href="#techno" className="btn-outline">
            Découvrir la technologie
          </a>
        </motion.div>

        {/* Key stats */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-3 gap-4 max-w-xl mx-auto"
        >
          {[
            { value: '-20%', label: 'Eau garantie' },
            { value: '70-90%', label: 'Précision IA' },
            { value: '110-210%', label: 'ROI' },
          ].map((stat) => (
            <div key={stat.label} className="text-center py-4">
              <p className="text-2xl md:text-3xl font-bold text-sky-400">
                {stat.value}
              </p>
              <p className="text-xs text-white/40 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}
