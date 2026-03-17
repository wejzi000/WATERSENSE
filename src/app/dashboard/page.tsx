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
  { id: 'p1', name: 'Parcelle A - Mais (8 ha)', status: 'urgent' as const },
  { id: 'p2', name: 'Parcelle B - Pommes (5 ha)', status: 'ok' as const },
  { id: 'p3', name: 'Parcelle C - Betteraves (6 ha)', status: 'warning' as const },
]

const notifications = [
  {
    time: '06:12',
    type: 'prescription' as const,
    parcelle: 'Parcelle A - Mais',
    message: 'Irriguez 18 mm avant 6h demain matin',
    confidence: 85,
  },
  {
    time: '06:12',
    type: 'alerte' as const,
    parcelle: 'Parcelle C - Betteraves',
    message: 'Stress hydrique detecte. Humidite a 38%. Irrigation urgente recommandee dans les 6h.',
    confidence: 99,
  },
  {
    time: '06:12',
    type: 'info' as const,
    parcelle: 'Parcelle B - Pommes',
    message: 'Niveau optimal atteint. Pas d\'irrigation necessaire aujourd\'hui.',
    confidence: 98,
  },
]

const prescriptions = [
  { parcelle: 'Parcelle A', culture: 'Mais', dose: '18 mm', heure: 'Demain 4h15', duree: '48 min', confiance: 85 },
  { parcelle: 'Parcelle C', culture: 'Betteraves', dose: '42 mm', heure: 'Aujourd\'hui 16h30', duree: '65 min', confiance: 99 },
  { parcelle: 'Parcelle B', culture: 'Pommes', dose: '0 mm', heure: '--', duree: '--', confiance: 98 },
]

const weekData = [
  { day: 'Lun', humidity: 52, ideal: 55 },
  { day: 'Mar', humidity: 48, ideal: 55 },
  { day: 'Mer', humidity: 45, ideal: 55 },
  { day: 'Jeu', humidity: 50, ideal: 55 },
  { day: 'Ven', humidity: 47, ideal: 55 },
  { day: 'Sam', humidity: 45, ideal: 55 },
  { day: 'Dim', humidity: 46, ideal: 55 },
]

export default function FarmerDashboard() {
  const [selectedParcelle, setSelectedParcelle] = useState('p1')

  const statusColor = {
    urgent: 'bg-red-500',
    warning: 'bg-yellow-500',
    ok: 'bg-emerald-500',
  }

  const typeStyle = {
    prescription: { bg: 'bg-electric/20 border-electric/40', dot: 'bg-electric' },
    alerte: { bg: 'bg-red-500/20 border-red-500/40', dot: 'bg-red-500' },
    info: { bg: 'bg-emerald/20 border-emerald/40', dot: 'bg-emerald' },
  }

  return (
    <div className="min-h-screen bg-[#001F3F] text-white">
      {/* Top bar */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#001F3F]/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0074D9] to-[#10B981] flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
                  <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
                </svg>
              </div>
              <span className="text-lg font-bold text-white">WaterSense</span>
            </Link>
            <span className="text-white/30 mx-2">|</span>
            <span className="text-sm text-white/60">Tableau de bord</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-white/40">Demo - Exploitation Dupont (19 ha)</span>
            <Link
              href="/"
              className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-white/60 hover:bg-white/10 transition"
            >
              Retour au site
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Row 1: Stats overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Eau economisee', value: '-30%', sub: 'vs. irrigation classique', color: 'text-sky-400' },
            { label: 'Parcelles actives', value: '3', sub: '19 hectares suivis', color: 'text-white' },
            { label: 'Prochaine action', value: '16h30', sub: 'Parcelle C - Urgente', color: 'text-yellow-400' },
            { label: 'Economies estimees', value: '1 960 EUR', sub: 'net annuel', color: 'text-emerald-400' },
          ].map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-white/5 border border-white/10 p-5">
              <p className="text-xs text-white/40 uppercase tracking-wider mb-2">{stat.label}</p>
              <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
              <p className="text-xs text-white/40 mt-1">{stat.sub}</p>
            </div>
          ))}
        </div>

        {/* Row 2: Notifications + Parcelles */}
        <div className="grid md:grid-cols-[1fr_320px] gap-6 mb-8">
          {/* Notifications */}
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-bold">Notifications du jour</h2>
              <span className="text-xs text-white/40">Mis a jour a 06:12</span>
            </div>
            <div className="space-y-3">
              {notifications.map((notif, i) => (
                <div
                  key={i}
                  className={`rounded-xl p-4 border ${typeStyle[notif.type].bg} transition-colors`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-2 h-2 rounded-full ${typeStyle[notif.type].dot}`} />
                    <span className="text-xs font-semibold text-white/80 uppercase tracking-wider">
                      {notif.type === 'prescription' ? 'Prescription' : notif.type === 'alerte' ? 'Alerte' : 'Info'}
                    </span>
                    <span className="text-xs text-white/30 ml-auto">{notif.time}</span>
                  </div>
                  <p className="text-sm font-medium text-white/90">{notif.parcelle}</p>
                  <p className="text-sm text-white/60 mt-1">{notif.message}</p>
                  <div className="flex items-center gap-2 mt-3">
                    <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#0074D9] to-[#10B981] rounded-full"
                        style={{ width: `${notif.confidence}%` }}
                      />
                    </div>
                    <span className="text-xs font-semibold text-emerald-400">{notif.confidence}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Parcelles sidebar */}
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
            <h2 className="text-lg font-bold mb-5">Mes parcelles</h2>
            <div className="space-y-3">
              {parcelles.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setSelectedParcelle(p.id)}
                  className={`w-full flex items-center gap-3 p-4 rounded-xl text-left transition-all ${
                    selectedParcelle === p.id
                      ? 'bg-white/10 border border-white/20'
                      : 'bg-white/[0.02] border border-transparent hover:bg-white/5'
                  }`}
                >
                  <div className={`w-3 h-3 rounded-full ${statusColor[p.status]} ${p.status === 'urgent' ? 'animate-pulse' : ''}`} />
                  <div>
                    <p className="text-sm font-semibold text-white">{p.name}</p>
                    <p className="text-xs text-white/40">
                      {p.status === 'urgent' ? 'Action requise' : p.status === 'warning' ? 'Surveillance' : 'Tout va bien'}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Mini NDVI map */}
            <div className="mt-6 rounded-xl bg-white/5 p-4">
              <p className="text-xs text-white/40 uppercase tracking-wider mb-3">Sante vegetale (NDVI)</p>
              <div className="grid grid-cols-6 gap-1">
                {[0.8, 0.7, 0.9, 0.85, 0.6, 0.75, 0.7, 0.85, 0.8, 0.9, 0.65, 0.8, 0.9, 0.75, 0.7, 0.85, 0.8, 0.7].map((v, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-sm"
                    style={{ background: `rgba(16, 185, 129, ${v})` }}
                  />
                ))}
              </div>
              <p className="text-[10px] text-white/30 mt-2">Sentinel-2 · 12 mars 2026</p>
            </div>
          </div>
        </div>

        {/* Row 3: Prescriptions table + Chart */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Prescriptions table */}
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
            <h2 className="text-lg font-bold mb-5">Prescriptions d&apos;irrigation</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 text-xs text-white/40 font-medium">Parcelle</th>
                    <th className="text-left py-3 text-xs text-white/40 font-medium">Dose</th>
                    <th className="text-left py-3 text-xs text-white/40 font-medium">Heure</th>
                    <th className="text-left py-3 text-xs text-white/40 font-medium">Duree</th>
                    <th className="text-right py-3 text-xs text-white/40 font-medium">Confiance</th>
                  </tr>
                </thead>
                <tbody>
                  {prescriptions.map((rx, i) => (
                    <tr key={i} className="border-b border-white/5">
                      <td className="py-3">
                        <p className="font-medium text-white">{rx.parcelle}</p>
                        <p className="text-xs text-white/40">{rx.culture}</p>
                      </td>
                      <td className={`py-3 font-bold ${rx.dose === '0 mm' ? 'text-white/30' : 'text-sky-400'}`}>
                        {rx.dose}
                      </td>
                      <td className="py-3 text-white/60">{rx.heure}</td>
                      <td className="py-3 text-white/60">{rx.duree}</td>
                      <td className="py-3 text-right">
                        <span className="text-emerald-400 font-semibold">{rx.confiance}%</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Chart */}
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
            <h2 className="text-lg font-bold mb-5">Humidite du sol (7 jours)</h2>
            <ChartComponent data={weekData} />
          </div>
        </div>

        {/* Row 4: Sensors */}
        <div className="rounded-2xl bg-white/5 border border-white/10 p-6 mb-8">
          <h2 className="text-lg font-bold mb-5">Capteurs en direct</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { sensor: 'Humidite 30cm', value: '32%', status: 'low' },
              { sensor: 'Humidite 60cm', value: '28%', status: 'low' },
              { sensor: 'Temperature', value: '22 C', status: 'normal' },
              { sensor: 'ETP', value: '4.2 mm', status: 'normal' },
            ].map((s, i) => (
              <div key={i} className="rounded-xl bg-white/5 p-4 text-center">
                <p className="text-xs text-white/40 mb-2">{s.sensor}</p>
                <p className={`text-2xl font-bold ${
                  s.status === 'low' ? 'text-yellow-400' : 'text-sky-400'
                }`}>{s.value}</p>
                <p className="text-[10px] text-white/30 mt-1">
                  {s.status === 'low' ? 'Bas' : 'Normal'}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-[#0074D9]/20 to-[#10B981]/20 border border-white/10 p-6 text-center">
          <p className="text-white/40 text-xs uppercase tracking-wider mb-2">Ceci est une demonstration</p>
          <p className="text-white/70 text-sm">
            Ce tableau de bord montre un exemple de ce que l&apos;agriculteur recoit chaque matin.
            Les donnees affichees sont fictives.
          </p>
          <Link
            href="/#contact"
            className="inline-block mt-4 px-6 py-3 rounded-xl bg-gradient-to-r from-[#10B981] to-[#059669] text-white text-sm font-semibold hover:opacity-90 transition"
          >
            Demander un essai gratuit
          </Link>
        </div>
      </main>
    </div>
  )
}
