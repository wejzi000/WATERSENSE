'use client'

import { Droplet, CheckCircle } from 'lucide-react'

interface RecommendationCardProps {
  time: string
  action: string
  duration: string
  volume: string
  confidence: string
}

export function RecommendationCard({
  time,
  action,
  duration,
  volume,
  confidence
}: RecommendationCardProps) {
  return (
    <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-6 rounded-lg border border-primary/20">
      <div className="flex items-start justify-between mb-4">
        <div className="flex gap-3">
          <Droplet className="text-primary" size={24} />
          <div>
            <p className="text-sm text-gray-600">{time}</p>
            <p className="font-bold text-lg text-gray-800">{action}</p>
          </div>
        </div>
        <CheckCircle className="text-secondary" size={24} />
      </div>

      <div className="grid grid-cols-3 gap-3 mt-4 pt-4 border-t border-primary/20">
        <div>
          <p className="text-xs text-gray-600">Durée</p>
          <p className="font-bold text-gray-800">{duration}</p>
        </div>
        <div>
          <p className="text-xs text-gray-600">Volume</p>
          <p className="font-bold text-gray-800">{volume}</p>
        </div>
        <div>
          <p className="text-xs text-gray-600">Confiance IA</p>
          <p className="font-bold text-secondary">{confidence}</p>
        </div>
      </div>
    </div>
  )
}
