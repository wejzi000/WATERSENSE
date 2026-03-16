'use client'

import { Package, FlaskConical, Zap } from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: Package,
    title: 'Déploiement en 48 h',
    desc: "Installation du kit IoT (6 capteurs/parcelle) par le technicien partenaire de votre coopérative. Connexion LoRaWAN ou 4G. Aucune compétence technique requise.",
  },
  {
    num: '02',
    icon: FlaskConical,
    title: 'Calibration STICS-ML',
    desc: "Ingestion de vos données sol, historique cultural et météo locale. L’IA Bayésienne affine le modèle INRAE STICS pour votre contexte pédoclimatique spécifique. Prescriptivité 70 % dès J+1.",
  },
  {
    num: '03',
    icon: Zap,
    title: 'Prescriptions automatiques',
    desc: "Recommandations journalières horodatées envoyées à votre centrale d’irrigation et sur l’application mobile. Surveillance continue par satellite Sentinel-2. Rapports de saison en un clic.",
  },
]

export function HowItWorks() {
  return (
    <section id="fonctionnement" className="py-20 bg-gray-50">
      <div className="container-watersense">
        <div className="text-center mb-14">
          <span className="section-tag">Mise en œuvre</span>
          <h2 className="section-title mt-3">Opérationnel en trois étapes</h2>
          <p className="section-subtitle">
            Du déploiement terrain à la première prescription : moins de 72 heures.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-8 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px bg-gray-200 z-0" />

          {steps.map((s, i) => {
            const Icon = s.icon
            return (
              <div key={i} className="relative z-10 text-center">
                <div className="inline-flex flex-col items-center mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center shadow-md mb-2">
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-bold text-primary/50 tracking-widest uppercase">{s.num}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">{s.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
