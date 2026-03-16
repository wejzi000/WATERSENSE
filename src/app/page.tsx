'use client'

import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { HowItWorks } from '@/components/HowItWorks'
import { Benefits } from '@/components/Benefits'
import { Pricing } from '@/components/Pricing'
import { Simulator } from '@/components/Simulator'
import { Testimonials } from '@/components/Testimonials'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <HowItWorks />
      <Benefits />
      <Pricing />
      <Simulator />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
