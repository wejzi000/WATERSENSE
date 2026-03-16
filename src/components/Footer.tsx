'use client'

import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white pt-14 pb-8">
      <div className="container-watersense">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <Image src="/logo-watersense.png" alt="WaterSense" width={36} height={36} className="rounded-lg" />
              <span className="font-bold text-lg">WaterSense</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Irrigation prescriptive pour le mid-market agricole (100–500 ha).
              Partenariat INRAE · Triple Intelligence STICS-ML.
            </p>
          </div>

          {/* Solution */}
          <div>
            <h4 className="font-bold text-sm mb-3 text-gray-300 uppercase tracking-wider">Solution</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#technologie" className="hover:text-white transition">Technologie</a></li>
              <li><a href="#offres" className="hover:text-white transition">Offres & Tarifs</a></li>
              <li><a href="#simulateur" className="hover:text-white transition">Simulateur ROI</a></li>
              <li><a href="#avantages" className="hover:text-white transition">Avantages</a></li>
            </ul>
          </div>

          {/* Partenaires */}
          <div>
            <h4 className="font-bold text-sm mb-3 text-gray-300 uppercase tracking-wider">Écosystème</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>INRAE (partenariat envisagé)</li>
              <li>15 coopératives agricoles</li>
              <li>Chambres d'Agriculture</li>
              <li>France 2030 — subventions</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm mb-3 text-gray-300 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#contact" className="hover:text-white transition">Demander une démo</a></li>
              <li><a href="#contact" className="hover:text-white transition">Test gratuit</a></li>
            </ul>
            <p className="text-xs text-gray-600 mt-4 leading-relaxed">
              Régions prioritaires : Beauce, Sud-Ouest, Rhône
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© 2026 WaterSense. Tous droits réservés.</p>
          <p>Prescriptivité 70–90 % · ROI 110–210 % · Économie eau 20–35 %</p>
        </div>
      </div>
    </footer>
  )
}
