'use client'

import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { StatsStrip } from '@/components/StatsStrip'
import { FeatureSlider } from '@/components/FeatureSlider'
import { Testimonials } from '@/components/Testimonials'
import { Pricing } from '@/components/Pricing'
import { Simulator } from '@/components/Simulator'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <StatsStrip />
      <FeatureSlider />
      <Simulator />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
