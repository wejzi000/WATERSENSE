'use client'

import { motion } from 'framer-motion'
import { ContactForm } from '../ContactForm'

export function ContactSection() {
  return (
    <section>
      <div>
        <div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
