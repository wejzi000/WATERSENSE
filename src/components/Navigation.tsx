'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#technologie', label: 'Technologie' },
  { href: '#fonctionnement', label: 'Fonctionnement' },
  { href: '#avantages', label: 'Avantages' },
  { href: '#offres', label: 'Tarifs' },
  { href: '#simulateur', label: 'Simulateur' },
  { href: '#contact', label: 'Contact' },
]

export function Navigation() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container-watersense flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2.5 flex-shrink-0">
          <Image src="/logo-watersense.png" alt="WaterSense" width={34} height={34} className="rounded-lg" />
          <span className="font-bold text-primary text-lg tracking-tight">WaterSense</span>
        </a>

        <ul className="hidden md:flex items-center gap-7">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex bg-primary text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-navy transition-colors"
        >
          Demander une démo
        </a>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
          onClick={() => setOpen(!open)}
          aria-label="Ouvrir le menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 pt-4 pb-5 flex flex-col gap-2">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-gray-700 hover:text-primary transition py-2 border-b border-gray-50 last:border-0"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-3 bg-primary text-white text-sm font-bold px-5 py-3 rounded-full text-center hover:bg-navy transition"
          >
            Demander une démo
          </a>
        </div>
      )}
    </nav>
  )
}
