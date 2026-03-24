'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, User, MessageSquare } from 'lucide-react'

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // TODO : brancher EmailJS ou API backend
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-[#F3F4F6] py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Colonne gauche : texte */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-accent font-sans uppercase tracking-wide">
              Contact
            </p>
            <h2 className="font-display text-4xl font-extrabold text-primary mt-2 tracking-tight">
              Parlons de votre projet
            </h2>
            <p className="mt-4 text-base text-ink/60 leading-relaxed font-sans">
              Remplissez le formulaire ci-contre et notre équipe vous recontacte
              sous 24h avec une proposition personnalisée.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                'Audit gratuit de votre consommation',
                'Démonstration personnalisée',
                'Devis sur mesure sous 48h',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-ink/70 font-sans">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/10">
                    <Send size={12} className="text-accent" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Colonne droite : formulaire */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {submitted ? (
              <div className="rounded-xl border border-border bg-white p-10 text-center shadow-sm">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                  <Send size={24} className="text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold text-ink">
                  Message envoyé !
                </h3>
                <p className="mt-2 text-sm text-ink/60 font-sans">
                  Notre équipe vous recontacte sous 24h.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-xl border border-border bg-white p-8 shadow-sm space-y-5"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-ink mb-2 font-sans">
                    Nom complet
                  </label>
                  <div className="relative">
                    <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink/30" />
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Jean Dupont"
                      className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-white text-ink text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-ink mb-2 font-sans">
                    Email professionnel
                  </label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink/30" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="jean@entreprise.com"
                      className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-white text-ink text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-ink mb-2 font-sans">
                    Votre besoin
                  </label>
                  <div className="relative">
                    <MessageSquare size={16} className="absolute left-3 top-3.5 text-ink/30" />
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="Décrivez brièvement votre projet..."
                      className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-white text-ink text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary-dark hover:-translate-y-0.5"
                >
                  Envoyer ma demande
                  <Send size={16} />
                </button>

                <p className="text-center text-xs text-ink/40 font-sans">
                  Vos données sont protégées. Aucun spam.
                </p>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
