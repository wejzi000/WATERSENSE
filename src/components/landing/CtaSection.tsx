'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function CtaSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-primary">
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
        <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
          Prêt à transformer vos pertes en{' '}
          <span className="text-accent">économies nettes ?</span>
        </h2>

        {/* Sous-titre rassurant */}
        <p className="font-sans text-lg md:text-xl text-cyan-100 mb-10 max-w-2xl mx-auto leading-relaxed">
          Rejoignez les entreprises qui ont déjà réduit leur facture d'eau de
          20&nbsp;% dès le premier trimestre d'utilisation de WaterSense.
        </p>

        {/* Boutons d'action */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Bouton Primaire */}
          <button className="w-full sm:w-auto px-8 py-4 bg-white text-primary font-semibold font-sans rounded-lg shadow-[0_8px_30px_rgb(255,255,255,0.1)] hover:shadow-[0_8px_30px_rgb(255,255,255,0.2)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group">
            Demander une démo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Bouton Secondaire */}
          <button className="w-full sm:w-auto px-8 py-4 bg-transparent text-white font-semibold font-sans rounded-lg border border-white/30 hover:bg-white/10 transition-all duration-300">
            Contacter les ventes
          </button>
        </div>

        {/* Rassurance */}
        <p className="mt-6 text-sm text-cyan-200/60 font-sans">
          Sans engagement • Déploiement en 48h
        </p>
      </motion.div>
    </section>
  )
}
