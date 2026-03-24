'use client'

export function SocialProofSection() {
  const placeholders = Array.from({ length: 5 })

  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="mx-auto max-w-6xl px-6 text-center">
        {/* Titre discret */}
        <p className="text-sm font-medium text-gray-400 font-sans uppercase tracking-widest mb-8">
          Ils optimisent leurs ressources avec WaterSense
        </p>

        {/* Conteneur des logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {placeholders.map((_, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-32 h-12"
            >
              <div className="w-full h-8 bg-gray-200 rounded animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
