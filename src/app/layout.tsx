import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WaterSense — Irrigation Prescriptive pour les Exploitations 100-500 ha',
  description: "Plateforme IoT + STICS-ML + Sentinel-2. Prescriptivité 70-90%, économie d'eau 20-35%, ROI 110-210%. Conçue pour les exploitations de 100 à 500 ha.",
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'WaterSense'
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <meta name="theme-color" content="#1F4E79" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/logo-watersense.png" />
        <link rel="apple-touch-icon" href="/logo-watersense.png" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

