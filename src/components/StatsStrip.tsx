'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { end: 90,  suffix: ' %',  label: 'Prescriptivité IA',     prefix: 'jusqu’à' },
  { end: 35,  suffix: ' %',  label: "Économie d’eau",    prefix: 'jusqu’à −' },
  { end: 210, suffix: ' %',  label: 'ROI matériel',           prefix: 'jusqu’à' },
  { end: 1960, suffix: ' €', label: 'Économie nette / 200 ha', prefix: '+' },
]

function useCountUp(end: number, active: boolean, duration = 1200) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!active) return
    let start = 0
    const step = end / (duration / 16)
    const t = setInterval(() => {
      start = Math.min(start + step, end)
      setVal(Math.round(start))
      if (start >= end) clearInterval(t)
    }, 16)
    return () => clearInterval(t)
  }, [active, end, duration])
  return val
}

function StatItem({ stat, active }: { stat: typeof stats[0]; active: boolean }) {
  const val = useCountUp(stat.end, active)
  return (
    <div className="text-center px-6 py-8 flex-1 min-w-[160px]">
      <div className="text-3xl md:text-4xl font-black text-primary mb-1 tabular-nums">
        <span className="text-gray-400 text-base font-semibold mr-1">{stat.prefix}</span>
        {val.toLocaleString('fr-FR')}{stat.suffix}
      </div>
      <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
    </div>
  )
}

export function StatsStrip() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setActive(true) }, { threshold: 0.4 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="stats" ref={ref} className="bg-white border-y border-gray-100">
      <div className="wrap">
        <div className="flex flex-wrap divide-x divide-gray-100">
          {stats.map((s, i) => <StatItem key={i} stat={s} active={active} />)}
        </div>
      </div>
    </section>
  )
}
