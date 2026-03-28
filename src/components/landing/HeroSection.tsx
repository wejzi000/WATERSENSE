'use client'


import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Droplets, BarChart3, ShieldCheck } from 'lucide-react'
import { AreaChart, Area, ResponsiveContainer } from 'recharts'
import CountUp from 'react-countup'

const badges = [
  { icon: Droplets,    label: "Économie 20-30 % d'eau" },
  { icon: BarChart3,   label: "ROI estimé dès la 1re saison" },
  { icon: ShieldCheck, label: "Données hébergées en Europe (RGPD)" },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-transparent pt-28 pb-20 lg:pt-36 lg:pb-28">
      {/* Subtle gradient ornament */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 h-[600px] w-[600px] rounded-full opacity-[0.07]"
        style={{
          background: 'radial-gradient(circle, #5FA8D3 0%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="max-w-xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Irrigation de précision
          </p>
          <h1 className="font-display text-4xl font-bold leading-[1.15] bg-gradient-to-b from-white to-gray-100 bg-clip-text text-transparent sm:text-5xl">
            Réduisez vos coûts liés à l'eau{' '}
            <span className="text-cyan-400">de 20 %.</span>
          </h1>
          <p className="mt-5 text-base leading-relaxed text-gray-100 sm:text-lg">
            WaterSense combine capteurs IoT et modèles agronomiques calibrés
            pour transformer chaque mètre cube en décision mesurable. Moins
            d'eau, rendement préservé.
          </p>

          {/* CTA group */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-500 text-gray-950 font-semibold px-6 py-3 shadow-glow-cyan-btn transition-all hover:bg-cyan-400 hover:shadow-glow-cyan-strong"
            >
              Demander une démo
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-900/50 text-cyan-400 px-6 py-3 font-semibold bg-gray-950/40 hover:border-cyan-500/80 hover:bg-cyan-400/10 hover:text-cyan-300 shadow-glow-cyan-btn transition-all"
            >
              Contacter les ventes
            </a>
          </div>

          {/* Trust badges */}
          <ul className="mt-10 flex flex-wrap gap-6">
            {badges.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-sm text-cyan-400">
                <Icon size={16} className="text-cyan-400" />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
