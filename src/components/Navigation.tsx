'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-watersense flex justify-between items-center py-4">
        <Link href="/" className="text-2xl font-bold text-primary">
          💧 WaterSense
        </Link>
        
        <div className="hidden md:flex gap-6">
          <Link href="/#features" className="hover:text-primary transition">Fonctionnalités</Link>
          <Link href="/#benefits" className="hover:text-primary transition">Avantages</Link>
          <Link href="/#simulator" className="hover:text-primary transition">Simulateur</Link>
          <Link href="/#pricing" className="hover:text-primary transition">Tarifs</Link>
          <Link href="/#contact" className="hover:text-primary transition">Contact</Link>
          <Link href="/dashboard" className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition">
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
          <div className="absolute top-full left-0 right-0 bg-white md:hidden flex flex-col gap-4 p-4 border-t">
            <Link href="/#features" className="hover:text-primary">Fonctionnalités</Link>
            <Link href="/#benefits" className="hover:text-primary">Avantages</Link>
            <Link href="/#simulator" className="hover:text-primary">Simulateur</Link>
            <Link href="/#pricing" className="hover:text-primary">Tarifs</Link>
            <Link href="/#contact" className="hover:text-primary">Contact</Link>
            <Link href="/dashboard" className="bg-primary text-white px-4 py-2 rounded-lg text-center">
              Mon Dashboard
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
