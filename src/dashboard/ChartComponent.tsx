'use client'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

interface ChartPoint {
  day: string
  humidity: number
  ideal: number
}

interface ChartComponentProps {
  data: ChartPoint[]
}

export function ChartComponent({ data }: ChartComponentProps) {

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis label={{ value: 'Humidité (%)', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        <Line 
          type="monotone" 
          dataKey="humidity" 
          stroke="#0066CC" 
          name="Humidité actuelle"
          strokeWidth={2}
        />
        <Line 
          type="monotone" 
          dataKey="ideal" 
          stroke="#00AA44" 
          name="Humidité idéale"
          strokeWidth={2}
          strokeDasharray="5 5"
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
