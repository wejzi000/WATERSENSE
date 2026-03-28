'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-gray-950/80 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="container-watersense flex justify-between items-center py-4">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo-officiel-watersense.png" alt="WaterSense Logo" className="h-10 w-auto" />
          <span className="text-2xl font-bold bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">WaterSense</span>
        </Link>
        
        <div className="hidden md:flex gap-6">
          <Link href="/#features" className="text-white hover:text-cyan-400 transition-colors">Fonctionnalités</Link>
          <Link href="/#benefits" className="text-white hover:text-cyan-400 transition-colors">Avantages</Link>
          <Link href="/#simulator" className="text-white hover:text-cyan-400 transition-colors">Simulateur</Link>
          <Link href="/#pricing" className="text-white hover:text-cyan-400 transition-colors">Tarifs</Link>
          <Link href="/#contact" className="text-white hover:text-cyan-400 transition-colors">Contact</Link>
          <Link href="/dashboard" className="bg-cyan-500 text-gray-950 px-4 py-2 rounded-full shadow-glow-cyan-btn hover:bg-cyan-400 hover:shadow-glow-cyan-strong transition-all">
            Mon Dashboard
          </Link>
        </div>

        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-gray-950/95 backdrop-blur-sm border-t border-gray-800 md:hidden flex flex-col gap-4 p-4">
            <Link href="/#features" className="text-gray-300 hover:text-cyan-400 transition-colors">Fonctionnalités</Link>
            <Link href="/#benefits" className="text-gray-300 hover:text-cyan-400 transition-colors">Avantages</Link>
            <Link href="/#simulator" className="text-gray-300 hover:text-cyan-400 transition-colors">Simulateur</Link>
            <Link href="/#pricing" className="text-gray-300 hover:text-cyan-400 transition-colors">Tarifs</Link>
            <Link href="/#contact" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</Link>
            <Link href="/dashboard" className="bg-cyan-500 text-gray-950 px-4 py-2 rounded-full shadow-glow-cyan-btn hover:bg-cyan-400 hover:shadow-glow-cyan-strong text-center transition-all">
              Mon Dashboard
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
