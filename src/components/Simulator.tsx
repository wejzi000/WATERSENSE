'use client'

import { useState, useMemo } from 'react'

const W_M3   = 600     // m³/ha/an
const W_COST = 0.12    // €/m³
const E_HA   = 24      // €/ha/an énergie
const SAVE   = 0.30    // 30%

function tier(ha: number) {
  if (ha <  100) return { name: 'Essentiel', rate: 12.5 }
  if (ha <= 300) return { name: 'Standard',  rate: 19   }
  return               { name: 'Premium',    rate: 31.5 }
}

const fmt = (n: number) => n.toLocaleString('fr-FR')

export function Simulator() {
  const [ha, setHa] = useState(200)

  const r = useMemo(() => {
    const t     = tier(ha)
    const gross = Math.round(ha * (W_M3 * SAVE * W_COST + E_HA * SAVE))
    const sub   = Math.round(ha * t.rate)
    const net   = gross - sub
    const mat   = Math.max(1500, ha * 10)
    const pay   = net > 0 ? Math.round(mat / net * 12 * 10) / 10 : null
    const water = Math.round(ha * W_M3 * SAVE)
    return { t, gross, sub, net, mat, pay, water }
  }, [ha])

  const pct = ((ha - 50) / 450) * 100

  return (
    <section id="simulateur" className="py-24 bg-[#F8FAFC]">
      <div className="wrap max-w-2xl">
        <div className="text-center mb-12">
          <span className="eyebrow">Simulateur</span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-3 tracking-tight">
            Votre économie en 10 secondes
          </h2>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          {/* Slider */}
          <div className="mb-8">
            <div className="flex justify-between items-baseline mb-4">
              <span className="text-sm font-semibold text-gray-600">Surface irriguée</span>
              <span className="text-4xl font-black text-primary tabular-nums">{ha}<span className="text-xl font-bold text-gray-400 ml-1">ha</span></span>
            </div>
            <div className="relative">
              <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
                <div className="h-full bg-primary rounded-full transition-all duration-150" style={{ width: pct + '%' }} />
              </div>
              <input type="range" min={50} max={500} step={10} value={ha}
                onChange={e => setHa(+e.target.value)}
                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
              />
              <div className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-primary border-2 border-white shadow-md pointer-events-none transition-all duration-150"
                style={{ left: `calc(${pct}% - 10px)` }} />
            </div>
            <div className="flex justify-between text-xs text-gray-300 mt-2">
              <span>50 ha</span><span>500 ha</span>
            </div>
          </div>

          {/* Plan */}
          <div className="flex justify-center mb-6">
            <span className="bg-primary/10 text-primary text-xs font-bold px-4 py-1.5 rounded-full">
              Plan {r.t.name} — {r.t.rate} €/ha/an
            </span>
          </div>

          {/* Results */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="rounded-xl bg-gray-50 p-4">
              <p className="text-xs text-gray-400 mb-1">Eau économisée</p>
              <p className="text-xl font-black text-gray-800">{fmt(r.water)}<span className="text-sm font-semibold text-gray-400 ml-1">m³</span></p>
            </div>
            <div className="rounded-xl bg-gray-50 p-4">
              <p className="text-xs text-gray-400 mb-1">Économies brutes</p>
              <p className="text-xl font-black text-gray-800">{fmt(r.gross)}<span className="text-sm font-semibold text-gray-400 ml-1">€</span></p>
            </div>
            <div className="rounded-xl bg-gray-50 p-4">
              <p className="text-xs text-gray-400 mb-1">Abonnement</p>
              <p className="text-xl font-black text-primary">−{fmt(r.sub)}<span className="text-sm font-semibold text-primary/50 ml-1">€</span></p>
            </div>
            <div className={`rounded-xl p-4 ${r.net >= 0 ? 'bg-green-50' : 'bg-amber-50'}`}>
              <p className="text-xs text-gray-400 mb-1">Économie nette</p>
              <p className={`text-xl font-black ${r.net >= 0 ? 'text-green-700' : 'text-amber-600'}`}>
                {r.net >= 0 ? '+' : ''}{fmt(r.net)}<span className="text-sm font-semibold ml-1">€</span>
              </p>
            </div>
          </div>

          {r.pay !== null && r.net > 0 && (
            <div className="rounded-xl bg-primary/5 border border-primary/10 p-4 text-center">
              <p className="text-sm font-semibold text-gray-800">
                Matériel ~{fmt(r.mat)} € · Retour en <span className="text-primary font-black">{r.pay} mois</span>
              </p>
              <p className="text-xs text-gray-400 mt-1">ROI 110–210 % avec les aides France 2030</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
