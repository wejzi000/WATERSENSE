'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    description: 'Exploitations < 100 ha. Maraîchage, petites structures.',
    price: '15',
    period: '€/ha/an',
    features: [
      'Jusqu\'à 5 capteurs',
      'Plateforme web de base',
      'Alertes SMS & recommandations',
      'Support email (réponse 48h)',
      'Essai gratuit 30 jours',
    ],
    cta: 'Commencer',
    highlighted: false,
  },
  {
    name: 'Professional',
    description: 'Exploitations 100-300 ha. Offre cœur de cible.',
    price: '19',
    period: '€/ha/an',
    features: [
      'Jusqu\'à 20 capteurs',
      'Dashboard complet + météo avancée',
      'Alertes email + SMS + app mobile',
      'Consultations agronomiques trimestrielles',
      'Intégration météo avancée',
      'Support prioritaire (réponse 24h)',
    ],
    cta: 'Choisir Professional',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    description: 'Exploitations > 300 ha. Tarification sur mesure.',
    price: 'Sur devis',
    period: '€/ha/an',
    features: [
      'Capteurs illimités',
      'Tout le plan Professional',
      'Intégration ERP & API propriétaire',
      'Support dédié personnel WaterSense',
      'Déploiement multi-sites',
      'Account manager dédié',
    ],
    cta: 'Nous contacter',
    highlighted: false,
  },
]

export function PricingSection() {
  return (
    <section id="tarifs" className="bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-accent font-sans uppercase tracking-wide">
            Tarifs
          </p>
          <h2 className="font-display text-4xl font-extrabold text-primary mt-2 tracking-tight">
            Un plan adapté à chaque besoin
          </h2>
          <p className="mt-4 text-base text-ink/60 max-w-xl mx-auto leading-relaxed font-sans">
            Pas de frais cachés. Déploiement inclus. Résiliable à tout moment.
          </p>
          <p className="mt-2 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent-dark">
            Offre lancement : -30 % la première année
          </p>
        </motion.div>

        {/* Grille tarifs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative flex flex-col rounded-xl border p-8 ${
                plan.highlighted
                  ? 'border-primary bg-white shadow-lg scale-[1.03]'
                  : 'border-gray-200 bg-white shadow-sm'
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-white">
                  Populaire
                </span>
              )}

              <h3 className="font-display text-xl font-bold text-ink">
                {plan.name}
              </h3>
              <p className="mt-2 text-sm text-ink/60 font-sans">
                {plan.description}
              </p>

              <div className="mt-6 mb-6">
                <span className={`font-display font-extrabold text-ink ${
                  plan.price.length > 6 ? 'text-2xl' : 'text-4xl'
                }`}>
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-sm text-ink/50 font-sans">
                    {' '}{plan.period}
                  </span>
                )}
              </div>

              <ul className="flex-1 space-y-3 mb-8">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2 text-sm text-ink/70 font-sans">
                    <Check size={16} className="mt-0.5 shrink-0 text-accent" />
                    {feat}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block w-full rounded-lg py-3 text-center text-sm font-semibold transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-primary text-white hover:bg-primary-dark'
                    : 'border border-border text-ink hover:bg-primary/5'
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
