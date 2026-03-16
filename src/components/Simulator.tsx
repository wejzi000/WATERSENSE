'use client'

import { useState, useMemo } from 'react'

// V20 reference constants (verified against rapport V20)
const WATER_M3_PER_HA = 600        // m³/ha/year  (vérifié : 120 000 m³ / 200 ha)
const WATER_COST_EUR_M3 = 0.12     // €/m³
const ENERGY_EUR_PER_HA = 24       // €/ha/year  (vérifié : 4 800 € / 200 ha)
const SAVING_RATE = 0.30           // 30 % de réduction (fourchette réelle 20–35 %)

function getPlanTier(ha: number): { name: string; rate: number } {
  if (ha < 100) return { name: 'Essentiel', rate: 12.5 }
  if (ha <= 300) return { name: 'Standard', rate: 19 }
  return { name: 'Premium', rate: 31.5 }
}

export function Simulator() {
  const [hectares, setHectares] = useState(200)

  const res = useMemo(() => {
    const tier = getPlanTier(hectares)

    // Gross savings: water + energy
    const waterSaved = Math.round(hectares * WATER_M3_PER_HA * SAVING_RATE)
    const waterEur   = hectares * WATER_M3_PER_HA * SAVING_RATE * WATER_COST_EUR_M3
    const energyEur  = hectares * ENERGY_EUR_PER_HA * SAVING_RATE
    const gross      = Math.round(waterEur + energyEur)

    // Subscription
    const sub = Math.round(hectares * tier.rate)

    // Net direct economy
    const net = gross - sub

    // Indicative material cost (one-time hardware kit)
    const material = Math.max(1500, Math.round(hectares * 10))

    // Payback in months
    const payback = net > 0 ? Math.round((material / net) * 12 * 10) / 10 : null

    return { tier, waterSaved, gross, sub, net, material, payback }
  }, [hectares])

  const fmt = (n: number) => n.toLocaleString('fr-FR')

  return (
    <section id="simulateur" className="py-20 bg-white">
      <div className="container-watersense max-w-3xl">
        <div className="text-center mb-12">
          <span className="section-tag">Simulateur</span>
          <h2 className="section-title mt-3">Estimez votre économie annuelle</h2>
          <p className="section-subtitle">
            Calcul basé sur les valeurs de référence V20 : 600 m³/ha/an, 0,12 €/m³,
            réduction de 30 % (fourchette réelle 20–35 %).
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl border border-gray-100 p-8">
          {/* Slider */}
          <div className="mb-8">
            <div className="flex items-baseline justify-between mb-3">
              <label className="text-sm font-semibold text-gray-700">Surface exploitée</label>
              <span className="text-2xl font-extrabold text-primary">{hectares} ha</span>
            </div>
            <input
              type="range"
              min={50}
              max={500}
              step={10}
              value={hectares}
              onChange={e => setHectares(Number(e.target.value))}
              className="w-full h-2 rounded-full appearance-none bg-gray-200 accent-primary cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1.5">
              <span>50 ha</span>
              <span>500 ha</span>
            </div>
          </div>

          {/* Plan badge */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-xs text-gray-500">Plan recommandé :</span>
            <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
              {res.tier.name} — {res.tier.rate} €/ha/an
            </span>
          </div>

          {/* Results grid */}
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-white rounded-xl p-4 border border-gray-100">
              <p className="text-xs text-gray-400 mb-1">Eau économisée</p>
              <p className="text-xl font-extrabold text-gray-900">{fmt(res.waterSaved)} m³</p>
              <p className="text-xs text-gray-400">≈ 30 % consommation</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-gray-100">
              <p className="text-xs text-gray-400 mb-1">Économies brutes</p>
              <p className="text-xl font-extrabold text-gray-900">{fmt(res.gross)} €</p>
              <p className="text-xs text-gray-400">eau + énergie pompage</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-gray-100">
              <p className="text-xs text-gray-400 mb-1">Abonnement annuel</p>
              <p className="text-xl font-extrabold text-primary">−{fmt(res.sub)} €</p>
              <p className="text-xs text-gray-400">{res.tier.rate} €/ha × {hectares} ha</p>
            </div>
            <div
              className={`rounded-xl p-4 border ${
                res.net >= 0
                  ? 'bg-emerald-50 border-emerald-100'
                  : 'bg-amber-50 border-amber-100'
              }`}
            >
              <p className="text-xs text-gray-400 mb-1">Économie nette directe</p>
              <p
                className={`text-xl font-extrabold ${
                  res.net >= 0 ? 'text-secondary' : 'text-amber-600'
                }`}
              >
                {res.net >= 0 ? '+' : ''}{fmt(res.net)} €/an
              </p>
              <p className="text-xs text-gray-400">hors gains indirects</p>
            </div>
          </div>

          {/* Payback note */}
          {res.payback !== null && res.net > 0 && (
            <div className="bg-primary/5 border border-primary/10 rounded-xl p-4 text-center">
              <p className="text-sm text-gray-700">
                Investissement matériel estimé <strong>~{fmt(res.material)} €</strong>
                {' '}· Retour sur investissement en{' '}
                <strong className="text-primary">~{res.payback} mois</strong>
              </p>
              <p className="text-xs text-gray-400 mt-1">
                ROI matériel 110–210 % en incluant les aides France 2030 (30–50 % du matériel)
              </p>
            </div>
          )}

          {res.net < 0 && (
            <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 text-center">
              <p className="text-xs text-amber-700">
                Pour les exploitations de moins de 100 ha, les gains indirects (PAC, qualité des
                récoltes, moins d’intrants) représentent 10 000–15 000 €/an et compensent
                largement le solde direct.
              </p>
            </div>
          )}
        </div>

        <p className="text-center text-xs text-gray-400 mt-4">
          Simulation indicative · Référence : INRAE, plan V20 WaterSense ·
          Les gains indirects (conformité PAC, rendements) ne sont pas inclus
        </p>
      </div>
    </section>
  )
}
