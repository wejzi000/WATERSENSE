'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

export function SlideContact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-150px' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="slide gradient-deep relative" id="contact" ref={ref}>
      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <p className="text-emerald font-semibold text-sm uppercase tracking-[0.2em] mb-3">
            Prêt à économiser ?
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-3">
            Parlons de{' '}
            <span className="bg-gradient-to-r from-electric to-emerald bg-clip-text text-transparent">
              votre exploitation
            </span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Essai gratuit 30 jours · Sans engagement · Déploiement en 48h
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Left: Contact form */}
          <div className="glass p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-10">
                <span className="text-5xl mb-4">✅</span>
                <h3 className="text-2xl font-bold text-white mb-2">Message envoyé !</h3>
                <p className="text-white/60">
                  Notre équipe vous recontacte sous 24h.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-sm text-white/60 font-medium">Nom complet</label>
                  <input
                    type="text"
                    required
                    placeholder="Jean Dupont"
                    className="w-full mt-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-electric focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm text-white/60 font-medium">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="jean@exploitation.fr"
                    className="w-full mt-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-electric focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm text-white/60 font-medium">Surface irriguée (ha)</label>
                  <input
                    type="number"
                    placeholder="ex: 120"
                    className="w-full mt-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-electric focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm text-white/60 font-medium">Message (optionnel)</label>
                  <textarea
                    rows={3}
                    placeholder="Parlez-nous de vos cultures, votre système d'irrigation actuel..."
                    className="w-full mt-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-electric focus:outline-none transition-colors resize-none"
                  />
                </div>
                <button type="submit" className="btn-cta w-full text-center">
                  Demander mon essai gratuit →
                </button>
              </form>
            )}
          </div>

          {/* Right: Info cards */}
          <div className="space-y-4">
            {[
              {
                emoji: '📞',
                title: 'Par téléphone',
                text: 'Du lundi au vendredi, 8h-18h',
                detail: 'Contactez votre coopérative partenaire',
              },
              {
                emoji: '⚡',
                title: 'Déploiement rapide',
                text: 'Installation en 1/2 journée',
                detail: 'Capteurs posés et app configurée en 48h',
              },
              {
                emoji: '🤝',
                title: 'Accompagnement inclus',
                text: 'Un agronome dédié',
                detail: 'Formation sur site + support technique toute la saison',
              },
              {
                emoji: '🛡️',
                title: 'Zéro risque',
                text: '30 jours d\'essai gratuit',
                detail: '-20% d\'eau garanti par contrat ou remboursé',
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="glass p-5 flex items-start gap-4 hover:bg-white/10 transition-colors"
              >
                <span className="text-3xl flex-shrink-0">{item.emoji}</span>
                <div>
                  <h4 className="font-semibold text-white">{item.title}</h4>
                  <p className="text-white/70 text-sm">{item.text}</p>
                  <p className="text-white/40 text-xs mt-1">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 text-center"
        >
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} WaterSense · Agriculture durable · ODD 6 & 13
          </p>
        </motion.div>
      </div>
    </section>
  )
}
