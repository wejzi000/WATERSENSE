'use client'

import { Navbar } from '@/components/Navbar'
import { SlideHero } from '@/components/SlideHero'
import { SlideUrgence } from '@/components/SlideUrgence'
import { SlideTechno } from '@/components/SlideTechno'
import { SlideApp } from '@/components/SlideApp'
import { SlideROI } from '@/components/SlideROI'
import { SlideContact } from '@/components/SlideContact'

export default function Home() {
  return (
    <main>
      <Navbar />
      <SlideHero />
      <SlideUrgence />
      <SlideTechno />
      <SlideApp />
      <SlideROI />
      <SlideContact />
    </main>
  )
}
