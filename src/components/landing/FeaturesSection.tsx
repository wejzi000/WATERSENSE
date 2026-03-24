'use client'

import { motion } from 'framer-motion'
import { Search, LineChart, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: Search,
    title: 'Détection Précoce des Fuites',
    description:
      "Nos capteurs intelligents identifient les micro-fuites instantanément, évitant des mètres cubes de gaspillage invisible.",
  },
  {
    icon: LineChart,
    title: 'Suivi Granulaire en Temps Réel',
    description:
      "Visualisez votre consommation par site, par service ou par équipement pour identifier les sources d'optimisation.",
  },
  {
    icon: ShieldCheck,
    title: 'Rapports de Conformité RSE',
    description:
      "Générez automatiquement des rapports certifiés pour votre bilan RSE, prouvant votre engagement environnemental.",
  },
]

export function FeaturesSection() {
  return (
    <section id="solution" className="bg-[#F3F4F6] py-20 mt-16 px-6">
      <div className="mx-auto max-w-6xl">

        {/* Titre de section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-accent font-sans uppercase tracking-wide">
            L'efficacité prouvée
          </p>
          <h2 className="font-display text-4xl font-extrabold text-primary mt-2 tracking-tight">
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
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              {/* Conteneur de l'icône */}
              <div className="bg-primary/5 w-16 h-16 rounded-full flex items-center justify-center mb-6 border border-primary/10">
                <feat.icon className="w-8 h-8 text-accent" />
              </div>

              {/* Texte */}
              <h3 className="font-display text-2xl font-semibold text-ink mb-3">
                {feat.title}
              </h3>
              <p className="font-sans text-base text-ink/60 leading-relaxed">
                {feat.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
