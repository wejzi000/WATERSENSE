'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const techCards = [
  {
    step: '01',
    title: 'Capteurs IoT WaterSense',
    subtitle: 'LoRaWAN / 4G · 3 profondeurs',
    description:
      'Sondes d\'humidité capacitives multi-profondeur (30, 60, 90 cm) + station météo locale. Mesures toutes les 15 min, chiffrées AES-256.',
    specs: ['Kit : 1 400 € (3 sondes + station)', 'Installation : 600 €', 'Autonomie : 5 ans'],
    color: 'from-electric to-sky',
  },
  {
    step: '02',
    title: 'Intelligence STICS-ML',
    subtitle: 'INRAE × Machine Learning',
    description:
      'Le modèle STICS de l\'INRAE (40 ans de données) couplé à un réseau de neurones qui apprend le comportement spécifique de chaque parcelle.',
    specs: ['Prescriptivité : 70-90%', 'Précision J+1 dès Y1', 'Calibré par culture & sol'],
    color: 'from-emerald to-emerald-d',
  },
  {
    step: '03',
    title: 'Satellite Sentinel-2',
    subtitle: 'Copernicus · NDVI · 10 m',
    description:
      'Imagerie Sentinel-2 (revisite 5 jours, résolution 10 m) pour validation croisée NDVI et continuité de service en cas d\'aléa matériel.',
    specs: ['Résolution : 10 m/pixel', 'Revisite : 5 jours', 'Redondance opérationnelle'],
    color: 'from-sky to-electric',
  },
]

export function SlideTechno() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-150px' })
  const [active, setActive] = useState(0)

  return (
    <section className="slide gradient-tech relative" id="techno" ref={ref}>
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <p className="text-emerald font-semibold text-sm uppercase tracking-[0.2em] mb-3">
            Preuve scientifique
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-3">
            L&apos;intelligence hybride{' '}
            <span className="bg-gradient-to-r from-electric to-emerald bg-clip-text text-transparent">
              STICS-ML
            </span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            La rigueur de l&apos;INRAE couplée à l&apos;apprentissage local de vos parcelles
          </p>
        </motion.div>

        {/* Cards stacking / tabs */}
        <div className="grid md:grid-cols-[280px_1fr] gap-6">
          {/* Left: tab buttons */}
          <div className="flex md:flex-col gap-3">
            {techCards.map((card, i) => (
              <motion.button
                key={card.step}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                onClick={() => setActive(i)}
                className={`flex items-center gap-3 p-4 rounded-xl text-left transition-all duration-300 w-full ${
                  active === i
                    ? 'glass bg-white/10 glow-blue'
                    : 'hover:bg-white/5'
                }`}
              >
                <span
                  className={`text-2xl font-bold bg-gradient-to-r ${card.color} bg-clip-text text-transparent`}
                >
                  {card.step}
                </span>
                <div>
                  <p className="font-semibold text-sm">{card.title}</p>
                  <p className="text-white/40 text-xs">{card.subtitle}</p>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Right: active card detail */}
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="glass p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <span
                className={`text-4xl font-bold bg-gradient-to-r ${techCards[active].color} bg-clip-text text-transparent`}
              >
                {techCards[active].step}
              </span>
              <div>
                <h3 className="text-xl md:text-2xl font-bold">{techCards[active].title}</h3>
                <p className="text-white/50 text-sm">{techCards[active].subtitle}</p>
              </div>
            </div>

            <p className="text-white/70 leading-relaxed mb-6">{techCards[active].description}</p>

            {/* Specs chips */}
            <div className="flex flex-wrap gap-3">
              {techCards[active].specs.map((spec) => (
                <span
                  key={spec}
                  className="glass px-4 py-2 text-sm font-medium text-white/80 rounded-full"
                >
                  {spec}
                </span>
              ))}
            </div>

            {/* Visual: 3D-ish sensor illustration */}
            <div className="mt-8 flex justify-center">
              <div className="relative w-48 h-48">
                {/* Central circle */}
                <div className={`absolute inset-8 rounded-full bg-gradient-to-br ${techCards[active].color} opacity-20 animate-pulse`} />
                <div className={`absolute inset-12 rounded-full bg-gradient-to-br ${techCards[active].color} opacity-40`} />
                <div className={`absolute inset-16 rounded-full bg-gradient-to-br ${techCards[active].color} flex items-center justify-center`}>
                  <span className="text-2xl font-bold text-white">{techCards[active].step}</span>
                </div>
                {/* Orbiting dots */}
                {[0, 120, 240].map((deg) => (
                  <motion.div
                    key={deg}
                    className="absolute w-3 h-3 rounded-full bg-white/60"
                    style={{
                      top: `${50 + 42 * Math.sin((deg * Math.PI) / 180)}%`,
                      left: `${50 + 42 * Math.cos((deg * Math.PI) / 180)}%`,
                    }}
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: deg / 360 }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
