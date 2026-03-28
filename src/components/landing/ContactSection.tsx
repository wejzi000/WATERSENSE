'use client'

import { motion } from 'framer-motion'
import { ContactForm } from '../ContactForm'

export function ContactSection() {
  return (
    <section id="contact" className="pt-40 pb-20 bg-white">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-4xl font-extrabold mb-4 text-primary">🚀 Prêt à passer à l’action&nbsp;?</h2>
        <p className="mb-8 text-lg text-gray-700 text-center max-w-2xl">Remplissez le formulaire ci-dessous pour demander une démo, un devis ou poser toutes vos questions à notre équipe. Nous vous répondrons sous 24h.</p>
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
