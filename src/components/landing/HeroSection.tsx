'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Droplets, BarChart3, ShieldCheck } from 'lucide-react'

const badges = [
  { icon: Droplets,    label: "Économie 20-35 % d'eau" },
  { icon: BarChart3,   label: "ROI dès la 1re saison" },
  { icon: ShieldCheck, label: "Données hébergées en France" },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-surface pt-28 pb-20 lg:pt-36 lg:pb-28">
      {/* Subtle gradient ornament */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 h-[600px] w-[600px] rounded-full opacity-[0.07]"
        style={{
          background: 'radial-gradient(circle, #5FA8D3 0%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* ── Copy ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-xl"
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
              Irrigation de précision
            </p>
            <h1 className="font-display text-4xl font-bold leading-[1.15] text-ink sm:text-5xl">
              Réduisez vos coûts liés à l'eau{' '}
              <span className="text-primary">de 20 %.</span>
            </h1>
            <p className="mt-5 text-base leading-relaxed text-ink/70 sm:text-lg">
              WaterSense combine capteurs IoT et modèle agronomique STICS pour
              transformer chaque mètre cube en décision mesurable. Moins d'eau,
              plus de rendement.
            </p>

            {/* CTA group */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#roi"
                className="inline-flex items-center gap-2 rounded-btn bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Calculer mon ROI
                <ArrowRight size={16} />
              </a>
              <a
                href="#solution"
                className="inline-flex items-center gap-2 rounded-btn border border-border px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-primary/5"
              >
                Découvrir la solution
              </a>
            </div>

            {/* Trust badges */}
            <ul className="mt-10 flex flex-wrap gap-6">
              {badges.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2 text-sm text-ink/60">
                  <Icon size={16} className="text-accent" />
                  {label}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Visual ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="relative hidden lg:block"
          >
            <div className="relative mx-auto w-full max-w-md">
              {/* Card dashboard mock */}
              <div className="rounded-xl border border-border bg-white p-6 shadow-card">
                {/* Mini header */}
                <div className="mb-5 flex items-center justify-between">
                  <span className="font-display text-sm font-semibold text-ink">
                    Tableau de bord — Parcelle Sud
                  </span>
                  <span className="rounded-btn bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent-dark">
                    En direct
                  </span>
                </div>

                {/* KPI row */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { value: '−28 %', sub: 'Eau consommée',  color: 'text-primary' },
                    { value: '71 %',  sub: 'Prescriptivité', color: 'text-accent-dark' },
                    { value: '4,2x',  sub: 'ROI matériel',   color: 'text-primary' },
                  ].map((kpi) => (
                    <div
                      key={kpi.sub}
                      className="rounded-lg border border-border bg-surface px-3 py-4 text-center"
                    >
                      <p className={`font-display text-xl font-bold ${kpi.color}`}>
                        {kpi.value}
                      </p>
                      <p className="mt-1 text-[11px] text-ink/50">{kpi.sub}</p>
                    </div>
                  ))}
                </div>

                {/* Mini chart placeholder */}
                <div className="mt-5 flex items-end gap-[3px]">
                  {[40, 55, 38, 62, 48, 70, 58, 75, 65, 80, 72, 85].map(
                    (h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm bg-accent/30"
                        style={{ height: `${h}px` }}
                      />
                    )
                  )}
                </div>
                <p className="mt-2 text-center text-[10px] text-ink/40">
                  Économies cumulées — 12 derniers mois
                </p>
              </div>

              {/* Floating accent dot */}
              <div
                aria-hidden="true"
                className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-accent/10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
