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
                <svg className="w-14 h-14 text-emerald-400 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
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
                    placeholder="Patrick Leleu"
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
                icon: (
                  <svg className="w-7 h-7 text-electric" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                ),
                title: 'Par téléphone',
                text: 'Du lundi au vendredi, 8h-18h',
                detail: 'Contactez votre coopérative partenaire',
              },
              {
                icon: (
                  <svg className="w-7 h-7 text-emerald" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                ),
                title: 'Déploiement rapide',
                text: 'Installation en 1/2 journée',
                detail: 'Capteurs posés et app configurée en 48h',
              },
              {
                icon: (
                  <svg className="w-7 h-7 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
                  </svg>
                ),
                title: 'Accompagnement inclus',
                text: 'Un agronome dédié',
                detail: 'Formation sur site + support technique toute la saison',
              },
              {
                icon: (
                  <svg className="w-7 h-7 text-emerald-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                ),
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
                <span className="flex-shrink-0">{item.icon}</span>
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
