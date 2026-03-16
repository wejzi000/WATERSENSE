'use client'

export function Hero() {
  const kpis = [
    { value: '70–90 %', label: 'Prescriptivité IA' },
    { value: '−20à−35 %', label: "Économie d’eau" },
    { value: '110–210 %', label: 'ROI matériel' },
    { value: '100–500 ha', label: 'Segment cible' },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-[#1a4269] to-navy text-white">
      <div className="container-watersense relative py-24 md:py-32 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase mb-8 text-blue-100">
          Triple Intelligence · STICS-ML · Sentinel-2 · IoT sol
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight max-w-4xl mx-auto mb-6">
          L’irrigation qui raisonne.
          <br />
          <span className="text-sky-300">Précision scientifique,</span> résultats mesurables.
        </h1>

        <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
          WaterSense combine le modèle STICS-ML calibré par IA, l’imagerie satellite Sentinel-2
          et des capteurs IoT terrain pour prescrire l’irrigation des exploitations de 100 à 500 ha
          avec une précision de 70 à 90 %.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="#contact"
            className="bg-white text-primary font-bold px-8 py-3.5 rounded-full hover:bg-gray-50 transition text-sm shadow-lg"
          >
            Demander une démo gratuite
          </a>
          <a
            href="#simulateur"
            className="border border-white/30 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition text-sm"
          >
            Calculer mon économie
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {kpis.map((k, i) => (
            <div key={i} className="bg-white/10 border border-white/15 rounded-2xl py-5 px-3 backdrop-blur-sm">
              <div className="text-2xl font-extrabold text-white mb-1">{k.value}</div>
              <div className="text-xs text-blue-200 leading-tight">{k.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
