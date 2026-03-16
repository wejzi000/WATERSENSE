'use client'

import { Activity } from 'lucide-react'

interface SensorCardProps {
  sensor: string
  value: string
  status: 'normal' | 'high' | 'low' | 'critical'
}

export function SensorCard({ sensor, value, status }: SensorCardProps) {
  const statusColors = {
    normal: 'border-l-4 border-l-secondary',
    high: 'border-l-4 border-l-accent',
    low: 'border-l-4 border-l-blue-500',
    critical: 'border-l-4 border-l-red-500'
  }

  return (
    <div className={`bg-white p-4 rounded-lg card-shadow ${statusColors[status]}`}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-gray-600 text-sm font-medium">{sensor}</span>
        <Activity size={16} className="text-secondary" />
      </div>
      <p className="text-3xl font-bold text-gray-800">{value}</p>
      <div className="mt-2 flex items-center gap-1">
        <span className={`w-2 h-2 rounded-full ${
          status === 'normal' ? 'bg-secondary' :
          status === 'high' ? 'bg-accent' :
          status === 'low' ? 'bg-blue-500' :
          'bg-red-500'
        }`}></span>
        <span className="text-xs text-gray-500">
          {status === 'normal' ? 'Optimal' :
           status === 'high' ? 'Élevé' :
           status === 'low' ? 'Faible' :
           'Critique'}
        </span>
      </div>
    </div>
  )
}
