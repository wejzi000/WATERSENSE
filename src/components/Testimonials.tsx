'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: 'Jean-Pierre M.',
    role: 'Céréalier — 280 ha, Beauce',
    quote:
      "Dès la première saison, le modèle STICS-ML avait cerné mes parcelles argilo-calcaires. Résultat : 28 % d’eau en moins, 1 960 € d’économie nette directe que je réinvestis en semences. Le tableau de bord m’a évité deux passages intémpestifs au plus fort de l’été.",
  },
  {
    name: 'Sophie L.',
    role: 'Associée GAEC — 420 ha, Sud-Ouest',
    quote:
      "On hésitait entre un système de pointe à 40 000 € et WaterSense. En choisissant WaterSense, on a gardé de la trésorerie tout en obtenant les prescriptions les plus fiables que j’aie vues. La coopérative suit nos résultats et nous accompagne.",
  },
  {
    name: 'Marc D.',
    role: 'Exploitant — 150 ha, Rhône',
    quote:
      "Les images Sentinel-2 détectent le stress hydrique avant que je le voie sur le terrain. En deux saisons, la calibration a atteint 87 % de précision. Un vrai outil de gestion, pas juste un gadget connecté.",
  },
]

export function Testimonials() {
  const [idx, setIdx] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setIdx(i => (i + 1) % testimonials.length), 6000)
    return () => clearInterval(t)
  }, [paused])

  const prev = () => {
    setPaused(true)
    setIdx(i => (i - 1 + testimonials.length) % testimonials.length)
  }
  const next = () => {
    setPaused(true)
    setIdx(i => (i + 1) % testimonials.length)
  }

  const t = testimonials[idx]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-watersense max-w-3xl text-center">
        <span className="section-tag">Témoignages</span>
        <h2 className="section-title mt-3 mb-12">Ce que disent les exploitants</h2>

        <div className="relative bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-10">
          <blockquote>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed italic mb-6">
              &ldquo;{t.quote}&rdquo;
            </p>
            <footer>
              <p className="font-bold text-gray-900">{t.name}</p>
              <p className="text-sm text-gray-400">{t.role}</p>
            </footer>
          </blockquote>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:border-primary hover:text-primary transition"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setPaused(true); setIdx(i) }}
                className={`h-2 rounded-full transition-all ${i === idx ? 'bg-primary w-5' : 'bg-gray-200 w-2'}`}
                aria-label={`Témoignage ${i + 1}`}
              />
            ))}
            <button
              onClick={next}
              className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:border-primary hover:text-primary transition"
              aria-label="Témoignage suivant"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
