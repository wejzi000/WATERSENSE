'use client'

import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-[#0A1929] text-white py-14">
      <div className="wrap">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <Image src="/logo-watersense.png" alt="" width={32} height={32} className="rounded-lg" />
              <span className="font-black text-base">WaterSense</span>
            </div>
            <p className="text-sm text-white/40 leading-relaxed">
              Irrigation prescriptive<br />100–500 ha · Triple Intelligence STICS-ML
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/30 mb-4">Solution</h4>
            <ul className="space-y-2 text-sm text-white/50">
              {[['#technologie','Technologie'],['#offres','Tarifs'],['#simulateur','Simulateur'],['#fonctionnement','Fonctionnement']].map(([h,l]) => (
                <li key={h}><a href={h} className="hover:text-white transition">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/30 mb-4">Écosystème</h4>
            <ul className="space-y-2 text-sm text-white/30">
              <li>INRAE (partenariat)</li>
              <li>Euralis · Arterris · Natup</li>
              <li>Chambres d’Agriculture</li>
              <li>France 2030</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/30 mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-white/50">
              <li><a href="#contact" className="hover:text-white transition">Démo interactive</a></li>
              <li><a href="#contact" className="hover:text-white transition">Test gratuit</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/25">
          <p>© 2026 WaterSense. Tous droits réservés.</p>
          <p>Prescriptivité 70–90 % · ROI 110–210 % · Économie eau 20–35 %</p>
        </div>
      </div>
    </footer>
  )
}
