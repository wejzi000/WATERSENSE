'use client'

import { Header }             from '@/components/landing/Header'
import { HeroSection }        from '@/components/landing/HeroSection'
import { ROICalculator }      from '@/components/landing/ROICalculator'
import { FeaturesSection }    from '@/components/landing/FeaturesSection'
import { PricingSection }     from '@/components/landing/PricingSection'
import { LiveDashboard }      from '@/components/dashboard/LiveDashboard'
import { ContactSection }     from '@/components/landing/ContactSection'
import { CtaSection }         from '@/components/landing/CtaSection'
import { Footer }             from '@/components/landing/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <ROICalculator />
      <FeaturesSection />
      <LiveDashboard />
      <PricingSection />
      <CtaSection />
      <ContactSection />
      <Footer />
    </>
  )
}
