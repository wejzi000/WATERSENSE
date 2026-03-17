'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const screens = [
  {
    title: 'Prescription du jour',
    content: (
      <div className="p-4 space-y-3">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-emerald-400 text-xs font-semibold">En direct</span>
        </div>
        <div className="bg-white/5 rounded-xl p-3">
          <p className="text-[10px] text-white/40 uppercase tracking-wider">Parcelle A · Maïs</p>
          <p className="text-2xl font-bold text-white mt-1">18 mm</p>
          <p className="text-xs text-white/50">à irriguer avant 6h demain</p>
        </div>
        <div className="bg-white/5 rounded-xl p-3">
          <p className="text-[10px] text-white/40 uppercase tracking-wider">Confiance</p>
          <div className="flex items-center gap-2 mt-1">
            <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full w-[85%] bg-gradient-to-r from-electric to-emerald-400 rounded-full" />
            </div>
            <span className="text-sm font-bold text-emerald-400">85%</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-white/5 rounded-lg p-2 text-center">
            <p className="text-[10px] text-white/40">Humidité 30cm</p>
            <p className="text-sm font-bold text-sky-400">32%</p>
          </div>
          <div className="bg-white/5 rounded-lg p-2 text-center">
            <p className="text-[10px] text-white/40">Humidité 60cm</p>
            <p className="text-sm font-bold text-sky-400">28%</p>
          </div>
          <div className="bg-white/5 rounded-lg p-2 text-center">
            <p className="text-[10px] text-white/40">ETP</p>
            <p className="text-sm font-bold text-orange-400">4.2mm</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Vue parcellaire',
    content: (
      <div className="p-4 space-y-3">
        <div className="bg-white/5 rounded-xl p-3">
          <p className="text-[10px] text-white/40 uppercase tracking-wider mb-2">NDVI Satellite</p>
          {/* Fake heatmap */}
          <div className="grid grid-cols-6 gap-1">
            {[0.8, 0.7, 0.9, 0.85, 0.6, 0.75, 0.7, 0.85, 0.8, 0.9, 0.65, 0.8, 0.9, 0.75, 0.7, 0.85, 0.8, 0.7].map((v, i) => (
              <div
                key={i}
                className="aspect-square rounded-sm"
                style={{
                  background: `rgba(16, 185, 129, ${v})`,
                }}
              />
            ))}
          </div>
          <p className="text-[10px] text-white/40 mt-2">Sentinel-2 · Résolution 10m · 12 mars 2026</p>
        </div>
        <div className="bg-white/5 rounded-xl p-3 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
            <span className="text-emerald-400 text-lg">✓</span>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Bonne santé</p>
            <p className="text-xs text-white/50">NDVI moyen : 0.78</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Historique & Tendances',
    content: (
      <div className="p-4 space-y-3">
        <div className="bg-white/5 rounded-xl p-3">
          <p className="text-[10px] text-white/40 uppercase tracking-wider mb-2">Économies cumulées</p>
          <p className="text-3xl font-bold text-emerald-400">1 960 €</p>
          <p className="text-xs text-white/50">net annuel (200 ha irrigués)</p>
        </div>
        {/* Mini chart bars */}
        <div className="bg-white/5 rounded-xl p-3">
          <p className="text-[10px] text-white/40 uppercase tracking-wider mb-3">Eau économisée (m³/mois)</p>
          <div className="flex items-end gap-2 h-20">
            {[40, 65, 80, 95, 100, 85, 70].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className="w-full rounded-t bg-gradient-to-t from-electric to-sky"
                  style={{ height: `${h}%` }}
                />
                <span className="text-[8px] text-white/30">
                  {['Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct'][i]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
]

export function SlideApp() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-150px' })
  const [activeScreen, setActiveScreen] = useState(0)

  return (
    <section className="slide gradient-deep relative overflow-hidden" id="app" ref={ref}>
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-emerald font-semibold text-sm uppercase tracking-[0.2em] mb-3">
              Simplifié à l&apos;essentiel
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              3 réponses.{' '}
              <span className="bg-gradient-to-r from-electric to-emerald bg-clip-text text-transparent">
                Chaque matin.
              </span>
            </h2>
            <p className="text-white/60 text-lg mb-8">
              Combien de mm ? Quand irriguer ? Quel niveau de confiance ?
              <br />
              Accessible sur le bout du champ, même en 3G.
            </p>

            {/* Screen selector */}
            <div className="flex flex-col gap-3">
              {screens.map((screen, i) => (
                <button
                  key={screen.title}
                  onClick={() => setActiveScreen(i)}
                  className={`flex items-center gap-3 p-3 rounded-xl text-left transition-all w-full ${
                    activeScreen === i ? 'glass bg-white/10' : 'hover:bg-white/5'
                  }`}
                >
                  <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold ${
                    activeScreen === i
                      ? 'bg-gradient-to-r from-electric to-emerald text-white'
                      : 'bg-white/10 text-white/50'
                  }`}>
                    {i + 1}
                  </span>
                  <span className={activeScreen === i ? 'text-white font-semibold' : 'text-white/50'}>
                    {screen.title}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right: Mockups — Browser (web) + Phone (mobile) side by side, aligned top */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col items-center"
          >
            {/* Top labels: PC / Mobile */}
            <div className="flex items-center justify-center gap-12 md:gap-20 mb-4 w-full">
              <div className="hidden md:flex items-center gap-2">
                <svg className="w-6 h-6 text-electric" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path d="M8 21h8m-4-4v4" />
                </svg>
                <span className="text-sm text-white/70 font-semibold">Version Web</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-emerald" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="5" y="2" width="14" height="20" rx="2" />
                  <path d="M12 18h.01" />
                </svg>
                <span className="text-sm text-white/70 font-semibold">App Mobile</span>
              </div>
            </div>

            {/* Mockups aligned from top */}
            <div className="flex items-start justify-center gap-5 md:gap-8">
              {/* Browser mockup (website) */}
              <div className="hidden md:block">
                <div className="browser-frame">
                  <div className="browser-bar">
                    <div className="browser-dot bg-red-400" />
                    <div className="browser-dot bg-yellow-400" />
                    <div className="browser-dot bg-green-400" />
                    <div className="flex-1 bg-white/5 rounded-md mx-3 h-5 flex items-center px-2">
                      <span className="text-[9px] text-white/30">app.watersense.fr</span>
                    </div>
                  </div>
                  <div className="overflow-hidden" style={{ height: 400 }}>
                    <motion.div
                      key={`browser-${activeScreen}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="p-2"
                    >
                      {/* Header bar */}
                      <div className="flex items-center justify-between px-3 py-2 border-b border-white/5">
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-gradient-to-r from-electric to-emerald" />
                          <span className="text-[10px] font-bold text-white">WaterSense</span>
                        </div>
                        <div className="flex gap-3">
                          {['Dashboard', 'Parcelles', 'Alertes'].map((t) => (
                            <span key={t} className="text-[9px] text-white/30">{t}</span>
                          ))}
                        </div>
                      </div>
                      {screens[activeScreen].content}
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Phone mockup (mobile) */}
              <div>
                <div className="phone-frame">
                  <div className="phone-notch" />
                  <div className="overflow-hidden" style={{ height: 490 }}>
                    <motion.div
                      key={`phone-${activeScreen}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="pt-8"
                    >
                      {/* Status bar */}
                      <div className="flex justify-between items-center px-4 pb-2">
                        <span className="text-[9px] text-white/40">9:41</span>
                        <div className="flex gap-1">
                          <div className="w-3 h-1.5 rounded-sm bg-white/30" />
                          <div className="w-3 h-1.5 rounded-sm bg-white/30" />
                          <div className="w-4 h-2 rounded-sm bg-emerald-400" />
                        </div>
                      </div>
                      {/* App header */}
                      <div className="flex items-center gap-2 px-4 py-2 border-b border-white/5">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-electric to-emerald" />
                        <span className="text-xs font-bold text-white">WaterSense</span>
                      </div>
                      {screens[activeScreen].content}
                    </motion.div>
                  </div>
                  {/* Bottom nav */}
                  <div className="absolute bottom-0 inset-x-0 flex justify-around py-3 border-t border-white/5 bg-[#0F172A]">
                    {['🏠', '🗺️', '📊', '⚙️'].map((icon, i) => (
                      <span key={i} className={`text-base ${i === 0 ? '' : 'opacity-40'}`}>{icon}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
