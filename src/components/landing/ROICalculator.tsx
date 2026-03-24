'use client'

import { useState } from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

export function ROICalculator() {
  const [waterVolume, setWaterVolume] = useState(5000)
  const [currentCost, setCurrentCost] = useState(3.5)
  const [solutionCost, setSolutionCost] = useState(2500)

  // Logique mathématique de base
  const newVolume = waterVolume * 0.80
  const waterSaved = waterVolume - newVolume
  const annualSavings = waterSaved * currentCost

  const monthlySavings = annualSavings / 12
  const paybackMonths = annualSavings > 0 ? Math.ceil(solutionCost / monthlySavings) : 0

  // Génération des données pour le graphique (Projection sur 5 ans)
  const chartData = Array.from({ length: 5 }, (_, i) => {
    const year = i + 1
    const netSavings = annualSavings * year - solutionCost
    return {
      name: `Année ${year}`,
      Economies: Math.max(0, netSavings),
    }
  })

  return (
    <section id="roi" className="bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section heading */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            Simulateur
          </p>
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            Estimez votre retour sur investissement
          </h2>
          <p className="mt-3 text-base leading-relaxed text-ink/60">
            Renseignez votre consommation actuelle. Le simulateur calcule
            automatiquement vos économies avec une réduction de 20&nbsp;%.
          </p>
        </div>

        {/* Carte principale */}
        <div className="max-w-5xl mx-auto rounded-xl border border-border bg-surface p-6 shadow-card">

          {/* Haut : Les Inputs et le Résultat immédiat */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">

            {/* Colonne Gauche : Inputs */}
            <div className="space-y-6">
              <h3 className="font-display text-xl font-semibold text-ink">Vos paramètres</h3>

              <div>
                <label htmlFor="waterVolume" className="block text-sm font-medium text-ink mb-2 font-sans">
                  Volume d'eau annuel (en m³)
                </label>
                <input
                  id="waterVolume"
                  type="number"
                  value={waterVolume}
                  onChange={(e) => setWaterVolume(Number(e.target.value))}
                  className="w-full p-3 border border-border rounded-btn bg-white text-ink focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                />
              </div>

              <div>
                <label htmlFor="currentCost" className="block text-sm font-medium text-ink mb-2 font-sans">
                  Coût actuel (en € par m³)
                </label>
                <input
                  id="currentCost"
                  type="number"
                  step="0.1"
                  value={currentCost}
                  onChange={(e) => setCurrentCost(Number(e.target.value))}
                  className="w-full p-3 border border-border rounded-btn bg-white text-ink focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                />
              </div>

              <div className="pt-4 border-t border-border">
                <label htmlFor="solutionCost" className="block text-sm font-medium text-ink mb-2 font-sans">
                  Coût de l'installation WaterSense (€)
                </label>
                <input
                  id="solutionCost"
                  type="number"
                  value={solutionCost}
                  onChange={(e) => setSolutionCost(Number(e.target.value))}
                  className="w-full p-3 border border-border rounded-btn bg-white text-ink focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>
            </div>

            {/* Colonne Droite : Résultat Principal */}
            <div className="bg-primary p-8 rounded-lg flex flex-col justify-center items-center text-center shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-white opacity-5" />
              <h3 className="text-lg font-medium text-cyan-100 mb-2 font-sans z-10">
                Économies annuelles brutes
              </h3>
              <p className="font-display text-5xl font-bold text-white mb-6 z-10">
                {annualSavings.toLocaleString('fr-FR', { maximumFractionDigits: 0 })} €
              </p>
              <div className="w-full bg-white/10 p-5 rounded-btn mt-2 z-10 backdrop-blur-sm border border-white/20">
                <p className="text-sm font-sans text-cyan-50 mb-1">Amortissement estimé en :</p>
                <p className="text-2xl font-bold font-display text-accent">
                  {paybackMonths > 0 ? `${paybackMonths} mois` : 'N/A'}
                </p>
              </div>
            </div>

          </div>

          {/* Bas : Le Graphique */}
          <div className="pt-8 border-t border-border">
            <h3 className="font-display text-xl font-semibold text-ink mb-6">
              Projection des gains nets sur 5 ans
            </h3>
            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorEconomies" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#5FA8D3" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#5FA8D3" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#64748B', fontSize: 14 }}
                    dy={10}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#64748B', fontSize: 14 }}
                    dx={-10}
                    tickFormatter={(value: number) => `${value} €`}
                  />
                  <Tooltip
                    contentStyle={{
                      borderRadius: '8px',
                      border: 'none',
                      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                    }}
                    itemStyle={{ color: '#0F4C5C', fontWeight: 'bold' }}
                    formatter={(value: number) => [`${value} €`, 'Bénéfice Net']}
                  />
                  <Area
                    type="monotone"
                    dataKey="Economies"
                    stroke="#0F4C5C"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorEconomies)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
