'use client'

import { TrendingUp, Sprout, Leaf, ShieldCheck, Users, Database } from 'lucide-react'

const items = [
  {
    icon: TrendingUp,
    title: 'ROI 110–210 % sur le matériel',
    text: "Économies directes annuelles de 1 960 € (200 ha) : 4 320 € eau + 1 440 € énergie, moins 3 800 € d’abonnement. Retour sur matériel en moins de 12 mois avec les aides France 2030.",
  },
  {
    icon: Sprout,
    title: 'Impact ODD 6 — Eau',
    text: "Réduction de la consommation d’eau de 20 à 35 % par exploitation. Projectif : 1,4 à 2,5 millions de m³ économisés annuellement à 115 clients. Conforme Plan Eau 2023 (mesure 38).",
  },
  {
    icon: Leaf,
    title: 'Impact ODD 13 — Climat',
    text: "Réduction de 0,8 à 1,2 tonne de CO₂ par exploitation et par an (pompage électrique : 58 gCO₂/kWh, RTE 2023). Certificat d’impact co-brandé avec la coopérative, annuel.",
  },
  {
    icon: ShieldCheck,
    title: 'Sécurité OVHCloud ANSSI',
    text: "Hébergement SecNumCloud certifié ANSSI. Données souveraines françaises. AES-256, MQTT TLS 1.3, rotation KMS 90 jours. Conformité RGPD Privacy by Design (Art. 25).",
  },
  {
    icon: Users,
    title: 'Distribution coopérative — 80 %',
    text: "Partenariats Euralis, Arterris, Natup, Axereal et autres coopératives. Kit de co-branding, portail partenaire et simulateur ROI offline pour les conseillers terrain.",
  },
  {
    icon: Database,
    title: 'Data-as-a-Service — Y5',
    text: "Valorisation des 6,1 millions de mesures annuelles : assureurs (20–60 k€/contrat), semenciers (Limagrain, RAGT), BRGM. Marge attendue > 80 % sur ce levier à partir de l’année 5.",
  },
]

export function Benefits() {
  return (
    <section id="avantages" className="py-20 bg-white">
      <div className="container-watersense">
        <div className="text-center mb-14">
          <span className="section-tag">Pourquoi WaterSense</span>
          <h2 className="section-title mt-3">Impact économique, environnemental et stratégique</h2>
          <p className="section-subtitle">
            La seule solution mid-market combinant prescriptivité élevée (70–90 %), prix accessible
            (10–35 €/ha/an) et modèle distribué via coopérative.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((b, i) => {
            const Icon = b.icon
            return (
              <div key={i} className="flex gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-1 text-gray-900">{b.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{b.text}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
