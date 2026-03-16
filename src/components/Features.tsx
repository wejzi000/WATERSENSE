'use client'

import { Brain, Satellite, Cpu, Droplets, BarChart2, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'STICS-ML — IA Bayésienne',
    desc: "Modèle INRAE STICS enrichi par machine learning. Calibration automatique sur l’historique pédoclimatique local. Prescriptivité 70 % dès le déploiement, 90 % après deux saisons.",
    tag: 'Propriétaire',
  },
  {
    icon: Satellite,
    title: 'Sentinel-2 — Imagerie NDVI',
    desc: "Surveillance continue du couvert végétal par satellite (résolution 10 m, fréquence 5 j). Détection précoce du stress hydrique. Continuité de service en cas de défaillance capteur.",
    tag: 'Spatial',
  },
  {
    icon: Cpu,
    title: 'IoT sol — 6 capteurs / site',
    desc: "Tensiomètres, hygromètres, température, pluviomètre, capteur feuille, sonde racinaire. Collecte à 15 min. Communication LoRaWAN/4G avec redondance. 6,1 M mesures/an à 115 clients.",
    tag: 'Terrain',
  },
  {
    icon: Droplets,
    title: "Pilotage d’irrigation automatique",
    desc: "Prescriptions journalières horodatées transmises à votre centrale d’irrigation. Réduction de la consommation d’eau de 20 à 35 % sur maïs, blé et betteraves.",
    tag: 'Automatisé',
  },
  {
    icon: BarChart2,
    title: 'Tableau de bord agronomique',
    desc: "Visualisation temps réel des indicateurs de stress, bilans hydriques, projections à J+7. Rapport de saison exportable. API ouverte pour intégration ERP coopérative.",
    tag: 'Analytique',
  },
  {
    icon: ShieldCheck,
    title: 'Sécurité & Souveraineté',
    desc: "Hébergement OVHCloud SecNumCloud (ANSSI). Chiffrement AES-256 transit et repos. MQTT TLS 1.3. Rotation KMS 90 jours. Conformité RGPD Art. 25 Privacy by Design.",
    tag: 'Certifié',
  },
]

export function Features() {
  return (
    <section id="technologie" className="py-20 bg-white">
      <div className="container-watersense">
        <div className="text-center mb-14">
          <span className="section-tag">Technologie</span>
          <h2 className="section-title mt-3">Triple Intelligence WaterSense</h2>
          <p className="section-subtitle">
            Trois couches complémentaires — modèle agronomique, satellite et terrain — pour une prescription
            irriquée sans compromis entre précision et robustesse.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon
            return (
              <div key={i} className="card group">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-primary/60 bg-primary/5 rounded-full px-2.5 py-1">
                    {f.tag}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{f.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
