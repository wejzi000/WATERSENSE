import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'

import './globals.css'
import { BackgroundBeams } from '../components/ui/BackgroundBeams'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  title: 'WaterSense - Gestion intelligente de l\'eau agricole',
  description: 'Réduisez vos coûts liés à l\'eau de 20 % grâce à l\'IoT et l\'IA. Plateforme SaaS pour l\'irrigation de précision.',
  manifest: '/manifest.json',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'WaterSense'
  },
  formatDetection: {
    telephone: false
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <meta name="theme-color" content="#0F4C5C" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/logo.svg" />
        <link rel="apple-touch-icon" href="/logo.svg" />
      </head>
      <body
        className="font-sans antialiased bg-[#030712] text-gray-100"
        style={{
          backgroundImage:
            'radial-gradient(at 10% 10%, #0c1a3a 0px, transparent 50%), radial-gradient(at 90% 90%, #071228 0px, transparent 50%)',
        }}
      >
        <BackgroundBeams />
        {children}
        <script dangerouslySetInnerHTML={{
          __html: `
            if ('serviceWorker' in navigator) {
              navigator.serviceWorker.register('/sw.js')
                .then(reg => console.log('✅ Service Worker installé'))
                .catch(err => console.log('Service Worker erreur:', err))
            }
          `
        }} />
      </body>
    </html>
  )
}

