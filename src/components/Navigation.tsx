'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#fonctionnement', label: 'Comment ça marche' },
  { href: '#offres',         label: 'Tarifs' },
  { href: '#simulateur',     label: 'Simulateur' },
  { href: '#contact',        label: 'Contact' },
]

export function Navigation() {
  const [open,     setOpen]     = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="wrap flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2.5 flex-shrink-0">
          <Image src="/logo-watersense.png" alt="WaterSense" width={32} height={32} className="rounded-lg" />
          <span className={`font-bold text-base tracking-tight transition-colors ${scrolled ? 'text-primary' : 'text-white'}`}>
            WaterSense
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className={`text-sm font-medium transition-colors ${
                scrolled ? 'text-gray-600 hover:text-primary' : 'text-white/80 hover:text-white'
              }`}>{l.label}</a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="hidden md:inline-flex btn-primary text-sm py-2.5 px-5">
          Démo gratuite
        </a>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open
            ? <X  className={`w-5 h-5 ${scrolled ? 'text-gray-800' : 'text-white'}`} />
            : <Menu className={`w-5 h-5 ${scrolled ? 'text-gray-800' : 'text-white'}`} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-5 flex flex-col gap-3">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
               className="text-sm font-medium text-gray-700 hover:text-primary py-1.5">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-2 justify-center">
            Démo gratuite
          </a>
        </div>
      )}
    </nav>
  )
}
