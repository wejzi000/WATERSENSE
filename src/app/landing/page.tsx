'use client'

import { Header }             from '@/components/landing/Header'
import { HeroSection }        from '@/components/landing/HeroSection'
import { ROICalculator }      from '@/components/landing/ROICalculator'
import { FeaturesSection }    from '@/components/landing/FeaturesSection'
import { SocialProofSection } from '@/components/landing/SocialProofSection'
import { PricingSection }     from '@/components/landing/PricingSection'
import { ContactSection }     from '@/components/landing/ContactSection'
import { CtaSection }         from '@/components/landing/CtaSection'
import { Footer }             from '@/components/landing/Footer'

export default function LandingPage() {
  return (
    <>
      <Header />
      <HeroSection />
      <ROICalculator />
      <FeaturesSection />
      <SocialProofSection />
      <PricingSection />
      <ContactSection />
      <CtaSection />
      <Footer />
    </>
  )
}
