'use client'

import { motion } from 'framer-motion'
import { Search, LineChart, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: Search,
    title: 'Recommandations Prescriptives',
    description:
      "Recevez des recommandations chiffrées : quand irriguer, quel volume, sur quelle parcelle. Fini l'interprétation de données brutes.",
  },
  {
    icon: LineChart,
    title: 'Suivi Parcellaire Temps Réel',
    description:
      "Visualisez le stress hydrique parcelle par parcelle, avec carte géolocalisée et priorités d'irrigation en temps réel.",
  },
  {
    icon: ShieldCheck,
    title: 'Modèles Calibrés France',
    description:
      "Algorithmes calibrés sur les cultures françaises (blé, maïs, colza) et les données Météo France pour des recommandations localisées.",
  },
]

export function FeaturesSection() {
  return (
    <section id="solution" className="py-20 mt-16 px-6">
      <div className="mx-auto max-w-6xl">

        {/* Titre de section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-cyan-400 font-sans uppercase tracking-wide">
            L'efficacité prouvée
          </p>
          <h2 className="font-display text-4xl font-extrabold bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent mt-2 tracking-tight">
            Comment WaterSense réduit votre facture d'eau
          </h2>
        </motion.div>

        {/* Grille des cartes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-gray-950/40 backdrop-blur-lg border border-cyan-900/50 rounded-2xl shadow-glow-cyan p-8 hover:border-cyan-500/80 hover:shadow-glow-cyan-strong transition-all duration-300"
            >
              {/* Conteneur de l'icône */}
              <div className="bg-primary/5 w-16 h-16 rounded-full flex items-center justify-center mb-6 border border-primary/10">
                <feat.icon className="w-8 h-8 text-accent" />
              </div>

              {/* Texte */}
              <h3 className="font-display text-2xl font-semibold text-cyan-400 mb-3">
                {feat.title}
              </h3>
              <p className="font-sans text-base text-gray-300 leading-relaxed">
                {feat.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
