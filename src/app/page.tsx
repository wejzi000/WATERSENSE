'use client'

import { Navigation }  from '@/components/Navigation'
import { Hero }         from '@/components/Hero'
import { StatsStrip }   from '@/components/StatsStrip'
import { FeatureSlider } from '@/components/FeatureSlider'
import { HowItWorks }   from '@/components/HowItWorks'
import { Simulator }    from '@/components/Simulator'
import { Pricing }      from '@/components/Pricing'
import { Testimonials } from '@/components/Testimonials'
import { Contact }      from '@/components/Contact'
import { Footer }       from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <StatsStrip />
      <FeatureSlider />
      <HowItWorks />
      <Simulator />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
