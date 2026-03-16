'use client'

import { useState } from 'react'
import { Brain, Satellite, Cpu, Droplets, BarChart2, ShieldCheck, ArrowLeft, ArrowRight } from 'lucide-react'

const slides = [
  {
    icon: Brain,
    tag: 'Modèle IA',
    title: 'STICS-ML',
    sub: 'Intelligence Bayésienne propriétaire',
    body: "Le modèle INRAE STICS enrichi par machine learning. Il apprend de votre sol, de votre historique cultural, de votre météo locale. Prescriptivité 70 % dès J+1, 90 % après 2 saisons.",
    stat: '90 %',
    statLabel: 'précision Y2',
    color: 'from-[#1F4E79] to-[#0F2D4A]',
  },
  {
    icon: Satellite,
    tag: 'Satellite',
    title: 'Sentinel-2',
    sub: 'Surveillance NDVI 10 m · 5 jours',
    body: "Imagerie satellite ESA gratuite. Détection précoce du stress hydrique sur chaque parcelle. Continuité de service totale même si un capteur est hors ligne.",
    stat: '10 m',
    statLabel: 'résolution',
    color: 'from-[#075985] to-[#0369A1]',
  },
  {
    icon: Cpu,
    tag: 'IoT Terrain',
    title: '6 capteurs / site',
    sub: 'LoRaWAN · 4G · Redondant',
    body: "Tensiomètres, hygromètres, température, pluviomètre, capteur feuille, sonde racinaire. Collecte toutes les 15 minutes. Aucune compétence technique requise.",
    stat: '15 min',
    statLabel: 'fréquence',
    color: 'from-[#164E63] to-[#0E7490]',
  },
  {
    icon: Droplets,
    tag: 'Automatisation',
    title: 'Pilotage auto',
    sub: 'Prescriptions journalières horodatées',
    body: "Recommandations envoyées directement à votre centrale d’irrigation et sur mobile. Réduction 20–35 % d’eau sur maïs, blé, betteraves.",
    stat: '−35 %',
    statLabel: 'eau économisée',
    color: 'from-[#1D4ED8] to-[#1E40AF]',
  },
  {
    icon: BarChart2,
    tag: 'Analytique',
    title: 'Tableau de bord',
    sub: 'Temps réel · Multi-sites',
    body: "Stress hydrique, bilans, projections J+7. Rapport de saison exportable. API ouverte pour votre ERP coopérative. Accès mobile et desktop.",
    stat: 'J+7',
    statLabel: 'projection',
    color: 'from-[#312E81] to-[#4338CA]',
  },
  {
    icon: ShieldCheck,
    tag: 'Sécurité',
    title: 'OVHCloud ANSSI',
    sub: 'SecNumCloud · AES-256 · RGPD',
    body: "Hébergement souverain français certifié ANSSI. Chiffrement AES-256 transit et repos. MQTT TLS 1.3. Rotation KMS 90 jours. Privacy by Design Art. 25.",
    stat: 'ANSSI',
    statLabel: 'certifié',
    color: 'from-[#14532D] to-[#166534]',
  },
]

export function FeatureSlider() {
  const [idx, setIdx] = useState(0)

  const prev = () => setIdx(i => (i - 1 + slides.length) % slides.length)
  const next = () => setIdx(i => (i + 1) % slides.length)

  const s = slides[idx]
  const Icon = s.icon

  return (
    <section id="technologie" className="py-24 bg-[#F8FAFC]">
      <div className="wrap">
        <div className="text-center mb-12">
          <span className="eyebrow">Technologie</span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-3 tracking-tight">
            Triple Intelligence
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          {/* Slide panel */}
          <div
            key={idx}
            className={`rounded-2xl bg-gradient-to-br ${s.color} text-white p-8 md:p-10 flex flex-col justify-between min-h-[340px] animate-slide-in`}
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs font-bold tracking-widest uppercase text-white/60">{s.tag}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-black mb-1">{s.title}</h3>
              <p className="text-white/60 text-sm mb-5">{s.sub}</p>
              <p className="text-white/80 text-sm leading-relaxed">{s.body}</p>
            </div>
            <div className="mt-8 pt-6 border-t border-white/15 flex items-end justify-between">
              <div>
                <div className="text-3xl font-black">{s.stat}</div>
                <div className="text-white/50 text-xs mt-0.5">{s.statLabel}</div>
              </div>
              <div className="flex gap-2">
                {slides.map((_, i) => (
                  <button key={i} onClick={() => setIdx(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${i === idx ? 'bg-white w-6' : 'bg-white/30 w-1.5'}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar nav */}
          <div className="flex flex-col gap-2 justify-between">
            {slides.map((sl, i) => {
              const SIcon = sl.icon
              return (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-200 border ${
                    i === idx
                      ? 'bg-white border-primary shadow-md'
                      : 'bg-white/50 border-transparent hover:bg-white hover:border-gray-200'
                  }`}
                >
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                    i === idx ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400'
                  }`}>
                    <SIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className={`text-sm font-bold ${i === idx ? 'text-primary' : 'text-gray-600'}`}>{sl.title}</div>
                    <div className="text-xs text-gray-400 truncate">{sl.sub}</div>
                  </div>
                </button>
              )
            })}
            <div className="flex gap-3 pt-2">
              <button onClick={prev} className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-gray-200 hover:bg-white hover:border-primary hover:text-primary transition text-gray-400 text-sm font-medium">
                <ArrowLeft className="w-4 h-4" /> Préc.
              </button>
              <button onClick={next} className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-gray-200 hover:bg-white hover:border-primary hover:text-primary transition text-gray-400 text-sm font-medium">
                Suiv. <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
