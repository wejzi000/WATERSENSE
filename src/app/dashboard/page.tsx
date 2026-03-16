'use client'

import { Navigation } from '@/components/Navigation'
import { Dashboard } from '@/dashboard/Dashboard'

export default function FarmerDashboard() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      <Dashboard />
    </main>
  )
}
