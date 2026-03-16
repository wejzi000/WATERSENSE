'use client'

import { useEffect, useRef } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'

export function Hero() {
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = lineRef.current
    if (!el) return
    let frame: number
    let w = 0
    const animate = () => {
      w = Math.min(w + 0.8, 100)
      el.style.width = w + '%'
      if (w < 100) frame = requestAnimationFrame(animate)
    }
    const t = setTimeout(() => { frame = requestAnimationFrame(animate) }, 400)
    return () => { clearTimeout(t); cancelAnimationFrame(frame) }
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#0F2D4A] via-[#1F4E79] to-[#1a4a8a]">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-sky/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/20 blur-3xl" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <span className="inline-block text-sky/80 text-xs font-bold tracking-[0.2em] uppercase mb-6">
            Triple Intelligence · STICS-ML · Sentinel-2 · IoT
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-[1.05] tracking-tight mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          L’irrigation<br />
          <span className="text-sky">qui pense</span><br />
          pour vous.
        </h1>

        {/* Animated underline */}
        <div className="flex justify-center my-6">
          <div className="h-px bg-white/10 w-64 relative overflow-hidden">
            <div ref={lineRef} className="absolute inset-y-0 left-0 bg-sky" style={{ width: '0%', transition: 'none' }} />
          </div>
        </div>

        <p className="text-lg text-white/60 max-w-xl mx-auto mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Prescriptions IA pour les exploitations de 100 à 500 ha.<br />
          − 20 à 35 % d’eau. ROI 110–210 %.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <a href="#contact" className="btn-primary bg-white text-primary hover:bg-gray-100 shadow-xl px-8 py-4 text-sm">
            Demander une démo
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#simulateur" className="btn-ghost border-white/30 text-white hover:bg-white/10 px-8 py-4 text-sm">
            Calculer mon économie
          </a>
        </div>
      </div>

      <a href="#stats" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/70 transition animate-bounce">
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  )
}
