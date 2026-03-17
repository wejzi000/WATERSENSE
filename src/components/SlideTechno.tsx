'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const techCards = [
  {
    step: '01',
    title: 'Des capteurs dans vos parcelles',
    subtitle: 'Mesure en continu · Sans fil',
    icon: 'sensor',
    description:
      'On installe 3 petites sondes dans le sol (à 30, 60 et 90 cm) + une mini station météo. Elles mesurent l\'humidité toutes les 15 minutes et envoient les données automatiquement.',
    specs: ['Kit complet : 1 400 €', 'Posé en 1/2 journée : 600 €', 'Dure 5 ans sans entretien'],
    color: 'from-electric to-sky',
  },
  {
    step: '02',
    title: 'Une IA qui apprend votre terrain',
    subtitle: 'Basée sur 40 ans de recherche agronomique',
    icon: 'brain',
    description:
      'Notre algorithme combine 40 ans de données scientifiques avec ce que vos capteurs mesurent chaque jour. Plus il tourne, plus il connaît vos parcelles et plus ses recommandations sont précises.',
    specs: ['Fiabilité : 70-90%', 'Précis dès la 1ère saison', 'S\'adapte à chaque culture'],
    color: 'from-emerald to-emerald-d',
  },
  {
    step: '03',
    title: 'Le satellite confirme tout',
    subtitle: 'Vue aérienne européenne gratuite',
    icon: 'satellite',
    description:
      'Toutes les semaines, un satellite européen photographie vos parcelles depuis l\'espace. Ça permet de vérifier la santé de vos cultures et de garder le système fiable même si un capteur a un souci.',
    specs: ['Photo tous les 5 jours', 'Précision : 10 m', 'Sécurité en cas de panne'],
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
            Comment ça marche ?
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-3">
            3 étapes,{' '}
            <span className="bg-gradient-to-r from-electric to-emerald bg-clip-text text-transparent">
              zéro prise de tête
            </span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            De la science robuste, traduite en recommandations simples pour votre quotidien
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
                <span className="w-8 h-8 ml-auto rounded-full bg-gradient-to-r from-electric to-emerald opacity-60" />
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

            {/* Visual: icon */}
            <div className="mt-6 flex justify-center">
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${techCards[active].color} flex items-center justify-center`}>
                <span className="text-3xl font-black text-white">{techCards[active].step}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
