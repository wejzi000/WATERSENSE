'use client'

import { useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const ChartComponent = dynamic(
  () => import('@/dashboard/ChartComponent').then((mod) => mod.ChartComponent),
  {
    ssr: false,
    loading: () => (
      <div className="h-[200px] flex items-center justify-center text-white/30">
        Chargement...
      </div>
    ),
  }
)

const parcelles = [
  { id: 'p1', name: 'Parcelle A - Mais', surface: '8 ha', status: 'urgent' as const },
  { id: 'p2', name: 'Parcelle B - Pommes', surface: '5 ha', status: 'ok' as const },
  { id: 'p3', name: 'Parcelle C - Betteraves', surface: '6 ha', status: 'warning' as const },
]

const parcelleData = {
  p1: {
    stats: [
      { label: 'Humidite sol', value: '32%', sub: 'Seuil critique : 40%', color: 'text-red-400' },
      { label: 'Temperature', value: '26 C', sub: 'Evapotranspiration forte', color: 'text-orange-400' },
      { label: 'Prochaine irrigation', value: '4h15', sub: 'Demain matin', color: 'text-sky-400' },
      { label: 'Dose prescrite', value: '18 mm', sub: 'Duree : 48 min', color: 'text-emerald-400' },
    ],
    notifications: [
      {
        time: '06:12',
        type: 'prescription' as const,
        message: 'Irriguez 18 mm avant 6h demain matin. Duree estimee : 48 minutes.',
        confidence: 85,
      },
      {
        time: '05:40',
        type: 'alerte' as const,
        message: 'Humidite a 32% (seuil critique 40%). Stress hydrique en cours.',
        confidence: 92,
      },
    ],
    sensors: [
      { name: 'Humidite 30 cm', value: '32%', status: 'critical' as const },
      { name: 'Humidite 60 cm', value: '28%', status: 'critical' as const },
      { name: 'Temperature sol', value: '26 C', status: 'high' as const },
      { name: 'ETP journaliere', value: '5.8 mm', status: 'high' as const },
    ],
    prescription: { dose: '18 mm', heure: 'Demain 4h15', duree: '48 min', confiance: 85 },
    chart: [
      { day: 'Lun', humidity: 48, ideal: 50 },
      { day: 'Mar', humidity: 44, ideal: 50 },
      { day: 'Mer', humidity: 40, ideal: 50 },
      { day: 'Jeu', humidity: 37, ideal: 50 },
      { day: 'Ven', humidity: 35, ideal: 50 },
      { day: 'Sam', humidity: 33, ideal: 50 },
      { day: 'Dim', humidity: 32, ideal: 50 },
    ],
    ndvi: [0.55, 0.5, 0.6, 0.45, 0.4, 0.5, 0.55, 0.45, 0.5, 0.6, 0.35, 0.5, 0.6, 0.45, 0.5, 0.55, 0.4, 0.5],
  },
  p2: {
    stats: [
      { label: 'Humidite sol', value: '62%', sub: 'Niveau optimal', color: 'text-emerald-400' },
      { label: 'Temperature', value: '19 C', sub: 'Conditions ideales', color: 'text-sky-400' },
      { label: 'Prochaine irrigation', value: '--', sub: 'Aucune necessaire', color: 'text-white/40' },
      { label: 'Dose prescrite', value: '0 mm', sub: 'Repos aujourd\'hui', color: 'text-white/40' },
    ],
    notifications: [
      {
        time: '06:12',
        type: 'info' as const,
        message: 'Niveau optimal atteint. Pas d\'irrigation necessaire aujourd\'hui.',
        confidence: 98,
      },
    ],
    sensors: [
      { name: 'Humidite 30 cm', value: '62%', status: 'normal' as const },
      { name: 'Humidite 60 cm', value: '58%', status: 'normal' as const },
      { name: 'Temperature sol', value: '19 C', status: 'normal' as const },
      { name: 'ETP journaliere', value: '2.1 mm', status: 'normal' as const },
    ],
    prescription: { dose: '0 mm', heure: '--', duree: '--', confiance: 98 },
    chart: [
      { day: 'Lun', humidity: 58, ideal: 60 },
      { day: 'Mar', humidity: 60, ideal: 60 },
      { day: 'Mer', humidity: 62, ideal: 60 },
      { day: 'Jeu', humidity: 61, ideal: 60 },
      { day: 'Ven', humidity: 63, ideal: 60 },
      { day: 'Sam', humidity: 62, ideal: 60 },
      { day: 'Dim', humidity: 62, ideal: 60 },
    ],
    ndvi: [0.85, 0.9, 0.88, 0.92, 0.87, 0.9, 0.85, 0.88, 0.9, 0.92, 0.86, 0.9, 0.88, 0.85, 0.9, 0.92, 0.87, 0.88],
  },
  p3: {
    stats: [
      { label: 'Humidite sol', value: '38%', sub: 'Proche du seuil critique', color: 'text-yellow-400' },
      { label: 'Temperature', value: '29 C', sub: 'Chaleur elevee', color: 'text-red-400' },
      { label: 'Prochaine irrigation', value: '16h30', sub: 'Aujourd\'hui - Urgent', color: 'text-red-400' },
      { label: 'Dose prescrite', value: '42 mm', sub: 'Duree : 65 min', color: 'text-sky-400' },
    ],
    notifications: [
      {
        time: '06:12',
        type: 'alerte' as const,
        message: 'Stress hydrique detecte. Irrigation urgente recommandee avant 16h30.',
        confidence: 99,
      },
      {
        time: '05:50',
        type: 'prescription' as const,
        message: 'Irriguez 42 mm cet apres-midi. Complement de 22 mm demain a 5h.',
        confidence: 94,
      },
    ],
    sensors: [
      { name: 'Humidite 30 cm', value: '38%', status: 'high' as const },
      { name: 'Humidite 60 cm', value: '34%', status: 'critical' as const },
      { name: 'Temperature sol', value: '29 C', status: 'critical' as const },
      { name: 'ETP journaliere', value: '6.4 mm', status: 'critical' as const },
    ],
    prescription: { dose: '42 mm', heure: 'Aujourd\'hui 16h30', duree: '65 min', confiance: 99 },
    chart: [
      { day: 'Lun', humidity: 50, ideal: 50 },
      { day: 'Mar', humidity: 47, ideal: 50 },
      { day: 'Mer', humidity: 44, ideal: 50 },
      { day: 'Jeu', humidity: 42, ideal: 50 },
      { day: 'Ven', humidity: 40, ideal: 50 },
      { day: 'Sam', humidity: 39, ideal: 50 },
      { day: 'Dim', humidity: 38, ideal: 50 },
    ],
    ndvi: [0.7, 0.65, 0.72, 0.68, 0.6, 0.65, 0.7, 0.62, 0.68, 0.72, 0.58, 0.65, 0.7, 0.6, 0.68, 0.72, 0.62, 0.65],
  },
}

export default function FarmerDashboard() {
  const [selectedParcelle, setSelectedParcelle] = useState('p1')
  const data = parcelleData[selectedParcelle as keyof typeof parcelleData]
  const parcelle = parcelles.find((p) => p.id === selectedParcelle)!

  const statusColor = { urgent: 'bg-red-500', warning: 'bg-yellow-500', ok: 'bg-emerald-500' }
  const statusLabel = { urgent: 'Action requise', warning: 'Surveillance', ok: 'Tout va bien' }
  const typeStyle = {
    prescription: { border: 'border-sky-500/30', dot: 'bg-sky-400' },
    alerte: { border: 'border-red-500/30', dot: 'bg-red-500' },
    info: { border: 'border-emerald-500/30', dot: 'bg-emerald-500' },
  }
  const sensorColor = {
    normal: 'text-emerald-400',
    high: 'text-yellow-400',
    critical: 'text-red-400',
  }

  return (
    <div className="min-h-screen bg-[#0A1628] text-white">
      {/* Top bar */}
      <header className="sticky top-0 z-50 bg-[#0A1628]/90 backdrop-blur-lg border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-sky-500 to-emerald-500 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="currentColor">
                  <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
                </svg>
              </div>
              <span className="font-bold text-white">WaterSense</span>
            </Link>
            <span className="text-white/20">|</span>
            <span className="text-sm text-white/50">Tableau de bord</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-white/30 hidden sm:block">Demo · Exploitation Dupont · 19 ha</span>
            <Link
              href="/"
              className="px-3 py-1.5 rounded-lg text-xs text-white/50 border border-white/10 hover:bg-white/5 transition"
            >
              Retour au site
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8 space-y-6">
        {/* Parcelle selector (horizontal) */}
        <div className="flex gap-3 overflow-x-auto pb-1">
          {parcelles.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelectedParcelle(p.id)}
              className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                selectedParcelle === p.id
                  ? 'bg-white/[0.08] border border-white/[0.15] text-white'
                  : 'text-white/40 hover:text-white/60 hover:bg-white/[0.03] border border-transparent'
              }`}
            >
              <div className={`w-2 h-2 rounded-full ${statusColor[p.status]} ${p.status === 'urgent' ? 'animate-pulse' : ''}`} />
              <span>{p.name}</span>
              <span className="text-white/20">{p.surface}</span>
            </button>
          ))}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {data.stats.map((s) => (
            <div key={s.label} className="bg-white/[0.04] border border-white/[0.06] rounded-2xl p-5">
              <p className="text-[11px] text-white/30 uppercase tracking-wider mb-3">{s.label}</p>
              <p className={`text-2xl font-semibold ${s.color}`}>{s.value}</p>
              <p className="text-[11px] text-white/30 mt-1">{s.sub}</p>
            </div>
          ))}
        </div>

        {/* Notifications + NDVI */}
        <div className="grid lg:grid-cols-[1fr_300px] gap-6">
          <div className="bg-white/[0.04] border border-white/[0.06] rounded-2xl p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-semibold">Notifications</h2>
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${statusColor[parcelle.status]}`} />
                <span className="text-xs text-white/40">{statusLabel[parcelle.status]}</span>
              </div>
            </div>
            <div className="space-y-3">
              {data.notifications.map((n, i) => (
                <div key={i} className={`rounded-xl p-4 border ${typeStyle[n.type].border} bg-white/[0.02]`}>
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${typeStyle[n.type].dot}`} />
                    <span className="text-[10px] font-medium text-white/50 uppercase tracking-wider">
                      {n.type}
                    </span>
                    <span className="text-[10px] text-white/20 ml-auto">{n.time}</span>
                  </div>
                  <p className="text-sm text-white/70 leading-relaxed">{n.message}</p>
                  <div className="flex items-center gap-2 mt-3">
                    <div className="flex-1 h-1 bg-white/[0.06] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-sky-500 to-emerald-500 rounded-full"
                        style={{ width: `${n.confidence}%` }}
                      />
                    </div>
                    <span className="text-[10px] font-medium text-emerald-400">{n.confidence}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* NDVI + Prescription card */}
          <div className="space-y-4">
            <div className="bg-white/[0.04] border border-white/[0.06] rounded-2xl p-5">
              <p className="text-[11px] text-white/30 uppercase tracking-wider mb-3">Prescription</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-xs text-white/40">Dose</span>
                  <span className={`text-sm font-semibold ${data.prescription.dose === '0 mm' ? 'text-white/30' : 'text-sky-400'}`}>{data.prescription.dose}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-white/40">Heure</span>
                  <span className="text-sm text-white/60">{data.prescription.heure}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-white/40">Duree</span>
                  <span className="text-sm text-white/60">{data.prescription.duree}</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-white/[0.06]">
                  <span className="text-xs text-white/40">Confiance IA</span>
                  <span className="text-sm font-semibold text-emerald-400">{data.prescription.confiance}%</span>
                </div>
              </div>
            </div>

            <div className="bg-white/[0.04] border border-white/[0.06] rounded-2xl p-5">
              <p className="text-[11px] text-white/30 uppercase tracking-wider mb-3">Sante vegetale (NDVI)</p>
              <div className="grid grid-cols-6 gap-1">
                {data.ndvi.map((v, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded"
                    style={{ background: `rgba(16, 185, 129, ${v})` }}
                  />
                ))}
              </div>
              <p className="text-[10px] text-white/20 mt-2">Sentinel-2 · 12 mars 2026</p>
            </div>
          </div>
        </div>

        {/* Chart + Sensors */}
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-white/[0.04] border border-white/[0.06] rounded-2xl p-6">
            <h2 className="font-semibold mb-5">Humidite du sol (7 jours)</h2>
            <ChartComponent data={data.chart} />
          </div>

          <div className="bg-white/[0.04] border border-white/[0.06] rounded-2xl p-6">
            <h2 className="font-semibold mb-5">Capteurs en direct</h2>
            <div className="grid grid-cols-2 gap-3">
              {data.sensors.map((s, i) => (
                <div key={i} className="bg-white/[0.03] rounded-xl p-4">
                  <p className="text-[10px] text-white/30 mb-2">{s.name}</p>
                  <p className={`text-xl font-semibold ${sensorColor[s.status]}`}>{s.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Demo banner */}
        <div className="rounded-2xl border border-white/[0.06] p-6 text-center bg-white/[0.02]">
          <p className="text-white/30 text-[11px] uppercase tracking-wider mb-1">Demonstration</p>
          <p className="text-white/50 text-sm">
            Ceci est un exemple de ce que l&apos;agriculteur recoit chaque matin. Donnees fictives.
          </p>
          <Link
            href="/#contact"
            className="inline-block mt-4 px-5 py-2.5 rounded-xl bg-emerald-500 text-white text-sm font-medium hover:bg-emerald-600 transition"
          >
            Demander un essai gratuit
          </Link>
        </div>
      </main>
    </div>
  )
}
