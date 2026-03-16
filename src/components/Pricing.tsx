'use client'

import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Essentiel',
    range: '100–150 ha',
    price: '12 €',
    unit: '/ha/an',
    example: '∼ 1 800 €/an · 150 ha',
    featured: false,
    features: ['3 capteurs IoT', 'STICS-ML de base', 'Prescriptions hebdo', 'Dashboard standard'],
  },
  {
    name: 'Standard',
    range: '150–300 ha',
    price: '19 €',
    unit: '/ha/an',
    example: '∼ 3 800 €/an · 200 ha',
    featured: true,
    features: ['6 capteurs IoT', 'STICS-ML + Sentinel-2', 'Prescriptions quotidiennes', 'Dashboard avancé', 'Certificat ESG annuel', 'API coopérative'],
  },
  {
    name: 'Premium',
    range: '300–500 ha',
    price: '31 €',
    unit: '/ha/an',
    example: '∼ 10 850 €/an · 350 ha',
    featured: false,
    features: ['Triple Intelligence complète', 'Prescriptions temps réel', 'Multi-sites', 'Compte dédié', 'Data-as-a-Service Y5'],
  },
]

export function Pricing() {
  return (
    <section id="offres" className="py-24 bg-white">
      <div className="wrap">
        <div className="text-center mb-14">
          <span className="eyebrow">Tarifs</span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-3 tracking-tight">Simple. Par hectare.</h2>
          <p className="text-gray-400 text-sm mt-3 max-w-md mx-auto">
            Éligible aux aides France 2030 · ROI matériel 110–210 %
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 items-start">
          {plans.map((p, i) => (
            <div key={i} className={`rounded-2xl p-7 relative border-2 transition-all ${
              p.featured
                ? 'border-primary bg-primary text-white shadow-2xl scale-[1.02]'
                : 'border-gray-100 bg-white hover:border-gray-200 hover:shadow-md'
            }`}>
              {p.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-white text-primary text-xs font-black px-4 py-1 rounded-full shadow whitespace-nowrap">
                  Recommandé
                </div>
              )}
              <div className="mb-6">
                <h3 className={`font-black text-lg ${p.featured ? 'text-white' : 'text-gray-900'}`}>{p.name}</h3>
                <p className={`text-xs mb-4 ${p.featured ? 'text-white/60' : 'text-gray-400'}`}>{p.range}</p>
                <div className="flex items-end gap-1">
                  <span className={`text-4xl font-black ${p.featured ? 'text-white' : 'text-primary'}`}>{p.price}</span>
                  <span className={`text-xs pb-1 ${p.featured ? 'text-white/60' : 'text-gray-400'}`}>{p.unit}</span>
                </div>
                <p className={`text-xs mt-1 ${p.featured ? 'text-white/50' : 'text-gray-400'}`}>{p.example}</p>
              </div>
              <ul className="space-y-2.5 mb-7">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2.5 text-sm">
                    <Check className={`w-4 h-4 flex-shrink-0 ${p.featured ? 'text-sky' : 'text-secondary'}`} />
                    <span className={p.featured ? 'text-white/80' : 'text-gray-600'}>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`block text-center py-3 rounded-full text-sm font-bold transition ${
                p.featured
                  ? 'bg-white text-primary hover:bg-gray-50'
                  : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
              }`}>
                Commencer
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
