'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useMemo } from 'react'

export function SlideROI() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-150px' })
  const [hectares, setHectares] = useState(200)

  const results = useMemo(() => {
    const waterCost = 0.12
    const waterPerHa = 600
    const savingsRate = 0.30
    const energyCostPerHa = 24
    const energySavingsRate = 0.30
    const pricePerHa = 19
    const kitBase = 2000
    const subsidyRate = 0.30

    const waterSaved = hectares * waterPerHa * savingsRate
    const waterEuro = waterSaved * waterCost
    const energyEuro = hectares * energyCostPerHa * energySavingsRate
    const totalSaved = waterEuro + energyEuro
    const subscription = hectares * pricePerHa
    const netBenefit = totalSaved - subscription

    const kitCost = kitBase * Math.max(1, Math.ceil(hectares / 80))
    const kitAfterSubsidy = kitCost * (1 - subsidyRate)
    const roiMaterial = netBenefit > 0 ? Math.round((netBenefit / kitAfterSubsidy) * 100) : 0

    return {
      waterSaved,
      waterEuro,
      energyEuro,
      totalSaved,
      subscription,
      netBenefit,
      kitCost,
      kitAfterSubsidy,
      roiMaterial,
    }
  }, [hectares])

  return (
    <section className="slide gradient-emerald relative" id="roi" ref={ref}>
      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <p className="text-emerald-300 font-semibold text-sm uppercase tracking-[0.2em] mb-3">
            Votre retour sur investissement
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-3">
            Calculez votre{' '}
            <span className="bg-gradient-to-r from-emerald-300 to-white bg-clip-text text-transparent">
              économie nette
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="glass p-6 md:p-10"
        >
          {/* Slider */}
          <div className="mb-8">
            <div className="flex justify-between items-end mb-3">
              <label className="text-white/60 text-sm font-medium">
                Surface irriguée
              </label>
              <span className="text-3xl font-bold text-white">
                {hectares} <span className="text-lg text-white/60">ha</span>
              </span>
            </div>
            <input
              type="range"
              min={20}
              max={500}
              step={10}
              value={hectares}
              onChange={(e) => setHectares(Number(e.target.value))}
              className="w-full h-2 rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #10B981 0%, #10B981 ${
                  ((hectares - 20) / 480) * 100
                }%, rgba(255,255,255,0.1) ${((hectares - 20) / 480) * 100}%, rgba(255,255,255,0.1) 100%)`,
              }}
            />
            <div className="flex justify-between text-xs text-white/30 mt-1">
              <span>20 ha</span>
              <span>500 ha</span>
            </div>
          </div>

          {/* Results grid */}
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <p className="text-xs text-white/40 uppercase tracking-wider mb-1">Eau économisée</p>
              <p className="text-2xl font-bold text-sky-400">
                {results.waterSaved.toLocaleString('fr-FR')} m³
              </p>
              <p className="text-sm text-white/50">
                = {results.waterEuro.toLocaleString('fr-FR')} €
              </p>
            </div>
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <p className="text-xs text-white/40 uppercase tracking-wider mb-1">Éco. énergie</p>
              <p className="text-2xl font-bold text-orange-400">
                {results.energyEuro.toLocaleString('fr-FR')} €
              </p>
              <p className="text-sm text-white/50">pompage -30%</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <p className="text-xs text-white/40 uppercase tracking-wider mb-1">Abonnement</p>
              <p className="text-2xl font-bold text-white/80">
                {results.subscription.toLocaleString('fr-FR')} €
              </p>
              <p className="text-sm text-white/50">Standard · 19 €/ha/an</p>
            </div>
            <div className="bg-emerald-500/20 rounded-xl p-4 text-center border border-emerald-400/30">
              <p className="text-xs text-emerald-300 uppercase tracking-wider mb-1">Bénéfice net</p>
              <p className="text-3xl font-bold text-emerald-400">
                {results.netBenefit > 0 ? '+' : ''}{results.netBenefit.toLocaleString('fr-FR')} €
              </p>
              <p className="text-sm text-white/50">par an</p>
            </div>
          </div>

          {/* Material ROI bar */}
          <div className="bg-white/5 rounded-xl p-5">
            <div className="flex justify-between items-center mb-3">
              <div>
                <p className="text-sm font-semibold text-white">ROI Matériel</p>
                <p className="text-xs text-white/40">
                  Kit {results.kitCost.toLocaleString('fr-FR')} € — subvention 30% → {results.kitAfterSubsidy.toLocaleString('fr-FR')} € net
                </p>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-300 to-sky-300 bg-clip-text text-transparent">
                {results.roiMaterial}%
              </span>
            </div>
            <div className="h-3 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-emerald-400 to-sky-400 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(results.roiMaterial / 3, 100)}%` }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              />
            </div>
            <p className="text-xs text-white/30 mt-2 text-center">
              ROI cible V21 : 110 – 210%
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-10"
        >
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta inline-block text-lg"
          >
            Demander mon essai gratuit de 30 jours →
          </a>
          <p className="text-white/40 text-sm mt-4">
            Sans engagement · Déploiement en 48h · Support agronomique inclus
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {[
              'Recherche agronomique française',
              'Satellite européen Copernicus',
              '-20% garanti par contrat',
              'Agriculture durable (ODD 6 & 13)',
            ].map((badge) => (
              <span
                key={badge}
                className="glass px-4 py-2 text-xs font-medium text-white/60"
              >
                {badge}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
