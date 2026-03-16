'use client'

import { AlertCircle, AlertTriangle, Info, CheckCircle } from 'lucide-react'

interface AlertCardProps {
  type: 'info' | 'warning' | 'error' | 'success'
  title: string
  message: string
}

export function AlertCard({ type, title, message }: AlertCardProps) {
  const styles = {
    info: 'bg-blue-50 border border-blue-200 text-blue-800',
    warning: 'bg-yellow-50 border border-yellow-200 text-yellow-800',
    error: 'bg-red-50 border border-red-200 text-red-800',
    success: 'bg-green-50 border border-green-200 text-green-800'
  }

  const icons = {
    info: <Info size={20} />,
    warning: <AlertTriangle size={20} />,
    error: <AlertCircle size={20} />,
    success: <CheckCircle size={20} />
  }

  return (
    <div className={`p-4 rounded-lg ${styles[type]} flex gap-4`}>
      <div className="flex-shrink-0">{icons[type]}</div>
      <div className="flex-1">
        <p className="font-bold">{title}</p>
        <p className="text-sm mt-1">{message}</p>
      </div>
    </div>
  )
}
