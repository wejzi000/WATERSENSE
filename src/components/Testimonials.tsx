'use client'

import { useState, useEffect } from 'react'

const items = [
  {
    quote: "Dès la première saison, STICS-ML a cerné mes parcelles argilo-calcaires. 28 % d’eau en moins, 1 960 € d’économie nette.",
    name:  'Jean-Pierre M.',
    role:  'Céréalier — 280 ha, Beauce',
  },
  {
    quote: "On hésitait à 40 00 € pour un autre système. WaterSense nous a donné les prescriptions les plus fiables à un prix accessible.",
    name:  'Sophie L.',
    role:  'Associée GAEC — 420 ha, Sud-Ouest',
  },
  {
    quote: "Sentinel-2 détecte le stress avant que je le vois sur le terrain. En deux saisons, 87 % de précision.",
    name:  'Marc D.',
    role:  'Exploitant — 150 ha, Rhône',
  },
]

export function Testimonials() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % items.length), 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="wrap max-w-2xl text-center">
        <span className="eyebrow">Témoignages</span>

        <div className="mt-10 relative min-h-[140px]">
          {items.map((it, i) => (
            <div
              key={i}
              className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-500"
              style={{ opacity: i === idx ? 1 : 0, transform: i === idx ? 'none' : 'translateY(10px)', pointerEvents: i === idx ? 'auto' : 'none' }}
            >
              <blockquote className="text-lg md:text-xl font-medium text-gray-800 leading-relaxed mb-6">
                &ldquo;{it.quote}&rdquo;
              </blockquote>
              <p className="font-bold text-gray-900 text-sm">{it.name}</p>
              <p className="text-xs text-gray-400">{it.role}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-12">
          {items.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === idx ? 'bg-primary w-6' : 'bg-gray-200 w-1.5'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
