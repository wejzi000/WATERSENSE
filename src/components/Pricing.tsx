'use client'

import { useState } from 'react'

export function Pricing() {
  const plans = [
    {
      name: 'Essentiel',
      surface: '< 150 ha (exploitation)',
      yearly: 550,
      pricePerHa: '10-15 €/ha irrigué/an',
      features: [
        'Recommandations quotidiennes',
        'Modèle STICS calibré INRAE',
        'Application mobile',
        'Support email',
        'Garantie -20% eau'
      ]
    },
    {
      name: 'Standard',
      surface: '150-300 ha (exploitation)',
      yearly: 1050,
      pricePerHa: '18-25 €/ha irrigué/an',
      features: [
        'Tout Essentiel +',
        'Alertes SMS temps réel',
        'Tableaux de bord avancés',
        'Support téléphonique',
        'Rapports agronomiques',
        'ROI 110-210% sur matériel'
      ],
      highlighted: true
    },
    {
      name: 'Premium',
      surface: '> 300 ha (exploitation)',
      yearly: 2500,
      pricePerHa: '28-35 €/ha irrigué/an',
      features: [
        'Tout Standard +',
        'Automatisation irrigation',
        'API intégration ERP',
        'Account manager dédié',
        'Audit terrain annuel',
        'Multi-exploitations'
      ]
    }
  ]

  const [selected, setSelected] = useState('Standard')

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container-watersense">
        <div className="flex flex-col items-center gap-4 mb-10">
          <h2 className="text-4xl font-bold text-center">Tarification</h2>
          <p className="text-gray-600 text-center max-w-2xl">
            Offres adaptées aux exploitations de 100 à 500 hectares.
            Tarification par hectare irrigué — l'exploitation moyenne du segment irrigue environ 55 ha.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => {
            const isSelected = selected === plan.name
            return (
              <div 
                key={idx} 
                className={`p-8 rounded-lg card-shadow card-hover transition ${
                  plan.highlighted ? 'ring-2 ring-primary' : ''
                } ${isSelected ? 'selected-card' : ''}`}
                onClick={() => setSelected(plan.name)}
                role="button"
                tabIndex={0}
              >
                <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{plan.surface}</p>
                <p className="text-4xl font-bold text-primary mb-1">
                  <span className="text-base font-normal text-gray-500">à partir de </span>
                  {plan.yearly.toLocaleString('fr-FR')}€ <span className="text-base font-normal text-gray-500">/an</span>
                </p>
                <p className="text-sm text-secondary font-medium mb-6">{plan.pricePerHa}</p>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-secondary">✓</span> {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-bold transition ${
                  plan.highlighted || isSelected
                    ? 'bg-primary text-white hover:bg-opacity-90'
                    : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
                }`}>
                  {isSelected ? 'Plan sélectionné' : 'Choisir ce plan'}
                </button>
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            <strong>Kit capteurs :</strong> 1 400 € (3 sondes + station météo) | <strong>Installation-formation :</strong> 600 € | Option Sérénité 5 €/ha (remplacement illimité)
          </p>
          <p className="text-sm text-gray-500">
            Subventions Agences de l'Eau et France 2030 : 30 à 50% du coût matériel. Facilité de paiement en 12 mensualités via Crédit Agricole.
          </p>
        </div>
      </div>
    </section>
  )
}
