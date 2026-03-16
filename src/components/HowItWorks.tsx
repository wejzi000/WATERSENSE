'use client'

import { useEffect, useRef, useState } from 'react'

const steps = [
  {
    num: '01',
    title: 'Déploiement',
    body: 'Le technicien de votre coopérative installe le kit IoT en 48 h. Aucune compétence technique requise.',
    detail: 'LoRaWAN ou 4G · 6 capteurs / parcelle',
  },
  {
    num: '02',
    title: 'Calibration IA',
    body: 'STICS-ML analyse votre sol, votre historique et la météo locale. Prescriptivité 70 % dès le premier jour.',
    detail: '70 % dès J+1 · 90 % après 2 saisons',
  },
  {
    num: '03',
    title: 'Prescriptions',
    body: 'Recommandations quotidiennes transmises à votre centrale et sur mobile. Surveillance satellite continue.',
    detail: 'Sentinel-2 NDVI · Rapport saisonnier',
  },
]

export function HowItWorks() {
  const ref  = useRef<HTMLDivElement>(null)
  const [vis, setVis] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true) }, { threshold: 0.2 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="fonctionnement" ref={ref} className="py-24 bg-white">
      <div className="wrap">
        <div className="text-center mb-14">
          <span className="eyebrow">Mise en oeuvre</span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-3 tracking-tight">
            Opérationnel en 72 h
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-6 left-[calc(50%/3+1rem)] right-[calc(50%/3+1rem)] h-px bg-gray-100 z-0" />
          {steps.map((s, i) => (
            <div
              key={i}
              className="relative z-10 text-center transition-all duration-500"
              style={{ opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(24px)', transitionDelay: `${i * 150}ms` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary text-white text-xl font-black mb-4 shadow-lg">
                {s.num}
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-3 max-w-xs mx-auto">{s.body}</p>
              <span className="inline-block text-xs text-primary/70 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">{s.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
