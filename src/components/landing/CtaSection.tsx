'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function CtaSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Effets de fond décoratifs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[400px] h-[400px] rounded-full bg-accent/10 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto px-6 text-center relative z-10"
      >
        {/* Titre accrocheur */}
        <h2 className="font-display text-4xl md:text-5xl font-extrabold bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent mb-6 tracking-tight leading-tight">
          Prêt à transformer vos pertes en{' '}
          <span className="text-cyan-400">économies nettes ?</span>
        </h2>

        {/* Sous-titre rassurant */}
        <p className="font-sans text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Rejoignez nos premiers exploitants pilotes et réduisez votre budget
          irrigation de 20-30&nbsp;%. Offre early adopter : -30&nbsp;% la
          première année.
        </p>

        {/* Boutons d'action */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Bouton Primaire */}
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 bg-cyan-500 text-gray-950 font-semibold rounded-full shadow-glow-cyan-btn transition-all hover:bg-cyan-400 hover:shadow-glow-cyan-strong flex items-center justify-center gap-2 group"
          >
            Demander une démo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Bouton Secondaire */}
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 bg-gray-950/40 text-cyan-400 font-semibold rounded-full border border-cyan-900/50 hover:border-cyan-500/80 hover:bg-cyan-400/10 hover:text-cyan-300 shadow-glow-cyan-btn transition-all flex items-center justify-center"
          >
            Contacter les ventes
          </a>
        </div>

        {/* Rassurance */}
        <p className="mt-6 text-sm text-cyan-200/60 font-sans">
          Sans engagement • Mise en service accompagnée
        </p>
      </motion.div>
    </section>
  )
}
