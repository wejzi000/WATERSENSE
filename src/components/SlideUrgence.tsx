'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

function CountUp({ target, suffix = '', duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (!inView) return
    const start = performance.now()
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, target, duration])

  return (
    <span ref={ref}>
      {count.toLocaleString('fr-FR')}{suffix}
    </span>
  )
}

const urgencyData = [
  {
    value: 500,
    suffix: '+',
    label: 'Arrêtés sécheresse en France',
    sub: '(saison 2024)',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    value: 35,
    suffix: '%',
    label: 'Hausse du coût de l\'eau',
    sub: 'depuis 2019',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    value: 60,
    suffix: '%',
    label: 'Des nappes sous le seuil critique',
    sub: 'été 2024 (BRGM)',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export function SlideUrgence() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-200px' })

  return (
    <section className="slide gradient-dark relative" id="urgence" ref={ref}>
      {/* Red pulse background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-red-500/5 animate-pulse" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-red-400 font-semibold text-sm uppercase tracking-[0.2em] mb-4"
        >
          Le constat est alarmant
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-5xl font-bold mb-4"
        >
          Ne subissez plus.{' '}
          <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
            Anticipez.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/60 text-lg mb-14 max-w-2xl mx-auto"
        >
          L&apos;eau devient la ressource la plus stratégique de l&apos;agriculture française.
          Chaque m³ gaspillé est un coût que vous pouvez éviter.
        </motion.p>

        {/* Count-up cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {urgencyData.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 + i * 0.2 }}
              className="glass p-8 text-center group hover:bg-white/10 transition-colors duration-300"
            >
              <div className="text-red-400 flex justify-center mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <p className="text-5xl md:text-6xl font-bold text-white mb-2">
                <CountUp target={item.value} suffix={item.suffix} />
              </p>
              <p className="text-white/80 font-medium">{item.label}</p>
              <p className="text-white/40 text-sm mt-1">{item.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-12 glass px-8 py-5 inline-block"
        >
          <p className="text-white/60 text-sm italic">
            &laquo; Le coût de l&apos;eau a bondi de 35%. À 0,12 €/m³ et 600 m³/ha/an,
            chaque hectare irrigué représente 72 € de charge directe. &raquo;
          </p>
        </motion.div>
      </div>
    </section>
  )
}
