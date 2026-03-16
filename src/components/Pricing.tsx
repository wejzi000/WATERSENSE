'use client'

import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Essentiel',
    target: '100–150 ha',
    priceLabel: '12 €/ha/an',
    example: '1 800 €/an pour 150 ha',
    featured: false,
    features: [
      '3 capteurs IoT / parcelle',
      'Modèle STICS-ML de base',
      'Prescriptions hebdomadaires',
      'Tableau de bord standard',
      'Support email',
      'Rapport saisonnier',
    ],
  },
  {
    name: 'Standard',
    target: '150–300 ha',
    priceLabel: '19 €/ha/an',
    example: '3 800 €/an pour 200 ha',
    featured: true,
    features: [
      '6 capteurs IoT / parcelle',
      'STICS-ML + Sentinel-2 NDVI',
      'Prescriptions quotidiennes',
      'Tableau de bord avancé',
      'Support téléphonique prioritaire',
      'Certificat ESG annuel',
      'API coopérative incluse',
    ],
  },
  {
    name: 'Premium',
    target: '300–500 ha',
    priceLabel: '31 €/ha/an',
    example: '10 850 €/an pour 350 ha',
    featured: false,
    features: [
      '6 capteurs IoT + sonde racinaire',
      'Triple Intelligence complète',
      'Prescriptions temps réel',
      'Tableau de bord multi-sites',
      'Responsable compte dédié',
      'Simulateur ROI offline',
      'Audit annuel certifié',
      'Data-as-a-Service inclus Y5',
    ],
  },
]

export function Pricing() {
  return (
    <section id="offres" className="py-20 bg-gray-50">
      <div className="container-watersense">
        <div className="text-center mb-14">
          <span className="section-tag">Tarifs</span>
          <h2 className="section-title mt-3">Abonnement annuel par hectare</h2>
          <p className="section-subtitle">
            Tarification transparente. Aucun frais caché. Éligible aux subventions France 2030 et
            régionales (30–50 % du matériel). ROI sur investissement matériel : 110–210 %.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((p, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl border-2 p-7 relative ${
                p.featured
                  ? 'border-primary shadow-xl ring-2 ring-primary/10'
                  : 'border-gray-200 shadow-sm'
              }`}
            >
              {p.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                  Le plus populaire
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-extrabold text-lg text-gray-900">{p.name}</h3>
                <p className="text-xs text-gray-400 mb-4">{p.target}</p>
                <div className="text-3xl font-extrabold text-primary">{p.priceLabel}</div>
                <p className="text-xs text-gray-400 mt-1">{p.example}</p>
              </div>

              <ul className="space-y-2.5 mb-8">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center text-sm font-bold py-3 rounded-full transition ${
                  p.featured
                    ? 'bg-primary text-white hover:bg-navy'
                    : 'border border-primary text-primary hover:bg-primary/5'
                }`}
              >
                {p.featured ? 'Démarrer maintenant' : 'Demander un devis'}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-8">
          Tarifs HT · Matériel IoT non inclus (env. 10 €/ha, subventionnable à 30–50 %) ·
          Engagement 12 mois reconductible · Résiliation sans frais avec préavis de 90 jours
        </p>
      </div>
    </section>
  )
}
