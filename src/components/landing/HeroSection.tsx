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
              WaterSense combine capteurs IoT et modèles agronomiques calibrés
              pour transformer chaque mètre cube en décision mesurable. Moins
              d'eau, rendement préservé.
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

          {/* ── Visual ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="relative hidden lg:block"
          >
            {/* Parcelles fictives pour la démo */}
            {(() => {
              const PARCELLES = [
                {
                  name: 'Parcelle Sud',
                  kpis: { eau: 25, amort: 6, pilotes: 5 },
                  chart: [40, 55, 38, 62, 48, 70, 58, 75, 65, 80, 72, 85],
                },
                {
                  name: 'Champ Nord',
                  kpis: { eau: 18, amort: 8, pilotes: 3 },
                  chart: [30, 45, 28, 52, 38, 60, 48, 65, 55, 70, 62, 75],
                },
                {
                  name: 'Blé Est',
                  kpis: { eau: 32, amort: 5, pilotes: 2 },
                  chart: [50, 65, 48, 72, 58, 80, 68, 85, 75, 90, 82, 95],
                },
              ]
              const [selected, setSelected] = useState(0)
              const parcelle = PARCELLES[selected]
              return (
                <div className="relative mx-auto w-full max-w-md">
                  <div className="rounded-xl border border-border bg-white p-6 shadow-card">
                    {/* Mini header + sélecteur */}
                    <div className="mb-5 flex items-center justify-between">
                      <span className="font-display text-sm font-semibold text-ink">
                        Tableau de bord —
                        <select
                          className="ml-2 bg-transparent font-display text-sm text-primary outline-none border-b border-accent/40 focus:border-accent"
                          value={selected}
                          onChange={e => setSelected(Number(e.target.value))}
                        >
                          {PARCELLES.map((p, i) => (
                            <option key={p.name} value={i}>{p.name}</option>
                          ))}
                        </select>
                      </span>
                      <span className="rounded-btn bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent-dark">
                        Simulation
                      </span>
                    </div>

                    {/* KPI row animée */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="rounded-lg border border-border bg-surface px-3 py-4 text-center">
                        <p className="font-display text-xl font-bold text-primary">
                          <CountUp end={-parcelle.kpis.eau} duration={1} /> %
                        </p>
                        <p className="mt-1 text-[11px] text-ink/50">Eau consommée</p>
                      </div>
                      <div className="rounded-lg border border-border bg-surface px-3 py-4 text-center">
                        <p className="font-display text-xl font-bold text-accent-dark">
                          {'< '}
                          <CountUp end={parcelle.kpis.amort} duration={1} /> mois
                        </p>
                        <p className="mt-1 text-[11px] text-ink/50">Amortissement</p>
                      </div>
                      <div className="rounded-lg border border-border bg-surface px-3 py-4 text-center">
                        <p className="font-display text-xl font-bold text-primary">
                          <CountUp end={parcelle.kpis.pilotes} duration={1} />
                        </p>
                        <p className="mt-1 text-[11px] text-ink/50">Parcelles pilotes</p>
                      </div>
                    </div>

                    {/* Mini chart interactif */}
                    <div className="mt-5 h-24 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={parcelle.chart.map((v, i) => ({ name: `M${i+1}`, value: v }))}>
                          <defs>
                            <linearGradient id="heroChart" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#5FA8D3" stopOpacity={0.8} />
                              <stop offset="95%" stopColor="#5FA8D3" stopOpacity={0} />
                            </linearGradient>
                          </defs>
                          <Area type="monotone" dataKey="value" stroke="#5FA8D3" fill="url(#heroChart)" strokeWidth={2} dot={false} />
                        </AreaChart>
                      </ResponsiveContainer>
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
              )
            })()}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
