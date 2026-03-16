import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'WaterSense — Irrigation Prescriptive 100–500 ha',
  description: 'Triple Intelligence STICS-ML + Sentinel-2 + IoT. Économie eau 20–35 %, ROI 110–210 %.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.variable}>
      <head>
        <meta name="theme-color" content="#1F4E79" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-watersense.png" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
