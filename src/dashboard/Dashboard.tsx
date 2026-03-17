'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { SensorCard } from './SensorCard'
import { RecommendationCard } from './RecommendationCard'
import { StatsCard } from './StatsCard'
import { AlertCard } from './AlertCard'

const ChartComponent = dynamic(
  () => import('./ChartComponent').then((mod) => mod.ChartComponent),
  {
    ssr: false,
    loading: () => (
      <div className="h-[300px] flex items-center justify-center text-gray-500">
        Chargement du graphique…
      </div>
    ),
  }
)

const fields = [
  { id: 'field1', name: 'Champ Maïs Nord (8ha)', culture: 'Maïs' },
  { id: 'field2', name: 'Verger Pommes (5ha)', culture: 'Pommes' },
  { id: 'field3', name: 'Champ Betteraves (6ha)', culture: 'Betteraves' }
]

// Données spécifiques par champ
const fieldData = {
  field1: { // Maïs
    stats: {
      humidity: { label: "Humidité du sol", value: "45%", trend: "↓ 2%", color: "blue" as const },
      temperature: { label: "Température", value: "22°C", trend: "↑ 1°C", color: "orange" as const },
      water: { label: "Eau apportée (jour)", value: "12mm", trend: "Optimal", color: "green" as const },
      yield: { label: "Rendement estimé", value: "+14%", trend: "vs. moyenne", color: "purple" as const }
    },
    sensors: [
      { sensor: "Humidité", value: "45%", status: "normal" as const },
      { sensor: "Température", value: "22°C", status: "normal" as const },
      { sensor: "Radiation", value: "850 W/m²", status: "high" as const },
      { sensor: "Vent", value: "12 km/h", status: "normal" as const }
    ],
    alerts: [
      { type: "info" as const, title: "Recommandation du jour", message: "Irriguer demain matin 4h15 pour 48 minutes (besoin: 32mm)" },
      { type: "warning" as const, title: "Pluie prévue", message: "15mm de pluie prévus demain. Irrigation peut être réduite." }
    ],
    recommendations: [
      { time: "Demain 4h15", action: "Démarrer irrigation", duration: "48 minutes", volume: "32mm", confidence: "95%" },
      { time: "Jour +2 (vendredi)", action: "Réduire irrigation", duration: "20 minutes", volume: "18mm", confidence: "87%" }
    ],
    chartData: [
      { day: 'Lun', humidity: 52, ideal: 55 },
      { day: 'Mar', humidity: 48, ideal: 55 },
      { day: 'Mer', humidity: 45, ideal: 55 },
      { day: 'Jeu', humidity: 50, ideal: 55 },
      { day: 'Ven', humidity: 47, ideal: 55 },
      { day: 'Sam', humidity: 45, ideal: 55 },
      { day: 'Dim', humidity: 46, ideal: 55 }
    ]
  },
  field2: { // Pommes
    stats: {
      humidity: { label: "Humidité du sol", value: "62%", trend: "↑ 3%", color: "blue" as const },
      temperature: { label: "Température", value: "19°C", trend: "→ 0°C", color: "orange" as const },
      water: { label: "Eau apportée (jour)", value: "8mm", trend: "Optimal", color: "green" as const },
      yield: { label: "Rendement estimé", value: "+18%", trend: "vs. moyenne", color: "purple" as const }
    },
    sensors: [
      { sensor: "Humidité", value: "62%", status: "normal" as const },
      { sensor: "Température", value: "19°C", status: "normal" as const },
      { sensor: "Radiation", value: "720 W/m²", status: "normal" as const },
      { sensor: "Vent", value: "8 km/h", status: "low" as const }
    ],
    alerts: [
      { type: "success" as const, title: "Irrigation parfaite", message: "Niveau optimal atteint. Pas d'irrigation nécessaire aujourd'hui." },
      { type: "info" as const, title: "Météo favorable", message: "Conditions idéales pour la croissance des fruits." }
    ],
    recommendations: [
      { time: "Aujourd'hui 18h00", action: "Pause irrigation", duration: "—", volume: "0mm", confidence: "98%" },
      { time: "Jour +1 (jeudi)", action: "Irrigation légère", duration: "15 minutes", volume: "10mm", confidence: "92%" }
    ],
    chartData: [
      { day: 'Lun', humidity: 58, ideal: 60 },
      { day: 'Mar', humidity: 60, ideal: 60 },
      { day: 'Mer', humidity: 62, ideal: 60 },
      { day: 'Jeu', humidity: 61, ideal: 60 },
      { day: 'Ven', humidity: 63, ideal: 60 },
      { day: 'Sam', humidity: 62, ideal: 60 },
      { day: 'Dim', humidity: 64, ideal: 60 }
    ]
  },
  field3: { // Betteraves
    stats: {
      humidity: { label: "Humidité du sol", value: "38%", trend: "↓ 5%", color: "blue" as const },
      temperature: { label: "Température", value: "24°C", trend: "↑ 2°C", color: "orange" as const },
      water: { label: "Eau apportée (jour)", value: "18mm", trend: "Elevé", color: "green" as const },
      yield: { label: "Rendement estimé", value: "+11%", trend: "vs. moyenne", color: "purple" as const }
    },
    sensors: [
      { sensor: "Humidité", value: "38%", status: "low" as const },
      { sensor: "Température", value: "24°C", status: "high" as const },
      { sensor: "Radiation", value: "920 W/m²", status: "high" as const },
      { sensor: "Vent", value: "15 km/h", status: "normal" as const }
    ],
    alerts: [
      { type: "warning" as const, title: "Stress hydrique détecté", message: "Humidité critique. Irrigation urgente recommandée dans les 6h." },
      { type: "error" as const, title: "Température élevée", message: "Chaleur excessive. Irriguer tôt le matin pour limiter l'évaporation." }
    ],
    recommendations: [
      { time: "Aujourd'hui 16h30", action: "Irrigation urgente", duration: "65 minutes", volume: "42mm", confidence: "99%" },
      { time: "Demain 5h00", action: "Complément irrigation", duration: "30 minutes", volume: "22mm", confidence: "94%" }
    ],
    chartData: [
      { day: 'Lun', humidity: 48, ideal: 50 },
      { day: 'Mar', humidity: 45, ideal: 50 },
      { day: 'Mer', humidity: 42, ideal: 50 },
      { day: 'Jeu', humidity: 40, ideal: 50 },
      { day: 'Ven', humidity: 38, ideal: 50 },
      { day: 'Sam', humidity: 38, ideal: 50 },
      { day: 'Dim', humidity: 37, ideal: 50 }
    ]
  }
}

export function Dashboard() {
  const [selectedField, setSelectedField] = useState('field1')
  
  // Récupération des données du champ sélectionné
  const currentData = fieldData[selectedField as keyof typeof fieldData]

  return (
    <div className="container-watersense py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Dashboard d'Irrigation</h1>
        <p className="text-gray-600">Suivi temps réel de vos champs et recommandations IA</p>
      </div>

      {/* Field Selection */}
      <div className="mb-8 flex gap-4 overflow-x-auto pb-2">
        {fields.map(field => (
          <button
            key={field.id}
            onClick={() => setSelectedField(field.id)}
            className={`px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition ${
              selectedField === field.id
                ? 'bg-primary text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:border-primary'
            }`}
          >
            {field.name}
          </button>
        ))}
      </div>

      {/* Alerts */}
      <div className="mb-8 grid md:grid-cols-2 gap-4">
        {currentData.alerts.map((alert, index) => (
          <AlertCard 
            key={index}
            type={alert.type}
            title={alert.title}
            message={alert.message}
          />
        ))}
      </div>

      {/* Main Stats */}
      <div className="grid md:grid-cols-4 gap-4 mb-8">
        <StatsCard {...currentData.stats.humidity} />
        <StatsCard {...currentData.stats.temperature} />
        <StatsCard {...currentData.stats.water} />
        <StatsCard {...currentData.stats.yield} />
      </div>

      {/* Sensor Cards */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Capteurs Actifs</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {currentData.sensors.map((sensor, index) => (
            <SensorCard 
              key={index}
              sensor={sensor.sensor}
              value={sensor.value}
              status={sensor.status}
            />
          ))}
        </div>
      </div>

      {/* Recommendations */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Recommandations IA</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {currentData.recommendations.map((rec, index) => (
            <RecommendationCard
              key={index}
              time={rec.time}
              action={rec.action}
              duration={rec.duration}
              volume={rec.volume}
              confidence={rec.confidence}
            />
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white p-6 rounded-lg card-shadow">
        <h2 className="text-2xl font-bold mb-6">Évolution de l'humidité (7 jours)</h2>
        <ChartComponent data={currentData.chartData} />
      </div>
    </div>
  )
}
