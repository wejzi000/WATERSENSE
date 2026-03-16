'use client'

interface StatsCardProps {
  label: string
  value: string
  trend: string
  color: 'blue' | 'orange' | 'green' | 'purple'
}

export function StatsCard({ label, value, trend, color }: StatsCardProps) {
  const bgColors = {
    blue: 'bg-blue-50 border-blue-200',
    orange: 'bg-orange-50 border-orange-200',
    green: 'bg-green-50 border-green-200',
    purple: 'bg-purple-50 border-purple-200'
  }

  const textColors = {
    blue: 'text-blue-600',
    orange: 'text-orange-600',
    green: 'text-green-600',
    purple: 'text-purple-600'
  }

  return (
    <div className={`p-4 rounded-lg border ${bgColors[color]}`}>
      <p className="text-sm text-gray-600 mb-2">{label}</p>
      <p className="text-3xl font-bold text-gray-800">{value}</p>
      <p className={`text-xs mt-2 ${textColors[color]}`}>{trend}</p>
    </div>
  )
}
