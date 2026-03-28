'use client'

import { motion } from 'framer-motion'
import { ContactForm } from '../ContactForm'

export function ContactSection() {
  return (
    <section id="contact" className="pt-40 pb-20">
      <div className="flex flex-col items-center justify-center bg-gray-950/40 backdrop-blur-lg border border-cyan-900/50 rounded-2xl shadow-glow-cyan p-8 w-full max-w-2xl mx-auto hover:border-cyan-500/80 hover:shadow-glow-cyan-strong transition-all duration-300">
        <h2 className="text-4xl font-extrabold mb-4 text-cyan-400">Prêt à passer à l’action&nbsp;?</h2>
        <p className="mb-8 text-lg text-gray-100 text-center max-w-2xl">Remplissez le formulaire ci-dessous pour demander une démo, un devis ou poser toutes vos questions à notre équipe. Nous vous répondrons sous 24h.</p>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  )
}
