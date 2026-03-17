'use client'

export function Hero() {
  return (
    <section className="gradient-primary text-white py-24">
      <div className="container-watersense text-center">
        <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/20 text-sm mb-6 animate-float">
          🌱 Partenariat INRAE • Modèle STICS validé • ROI 110-210%
        </p>
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
          Irrigation Prescriptive<br />pour le Mid-Market Agricole
        </h1>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          WaterSense combine capteurs IoT et modèle agronomique STICS de l'INRAE pour vous dire 
          <strong> précisément quand irriguer et combien</strong>. 70-90% de prescriptivité, 
          jusqu'à 35% d'économie d'eau, -20% garantie par contrat.
        </p>
        
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#simulator" className="btn-primary">
            Simuler mon ROI
          </a>
          <a href="#pricing" className="btn-secondary">
            Voir les offres
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-4 gap-6">
          <div className="glass-card">
            <p className="text-4xl font-bold">70-90%</p>
            <p className="text-sm opacity-90">Prescriptivité</p>
          </div>
          <div className="glass-card">
            <p className="text-4xl font-bold">-20%</p>
            <p className="text-sm opacity-90">Garantie contractuelle eau</p>
          </div>
          <div className="glass-card">
            <p className="text-4xl font-bold">110-210%</p>
            <p className="text-sm opacity-90">ROI matériel</p>
          </div>
          <div className="glass-card">
            <p className="text-4xl font-bold">100-500 ha</p>
            <p className="text-sm opacity-90">Segment cible</p>
          </div>
        </div>
      </div>
    </section>
  )
}
