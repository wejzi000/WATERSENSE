'use client'

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Partie Gauche : Logo et Copyright */}
        <div className="flex flex-col items-center md:items-start">
          <span className="font-display text-2xl font-bold text-primary tracking-tight">
            WaterSense
          </span>
          <p className="font-sans text-sm text-gray-500 mt-2">
            © {new Date().getFullYear()} WaterSense. Tous droits réservés.
          </p>
        </div>

        {/* Partie Droite : Liens utiles */}
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium font-sans text-gray-500">
          <a href="#" className="hover:text-accent transition-colors duration-200">
            Mentions Légales
          </a>
          <a href="#" className="hover:text-accent transition-colors duration-200">
            Politique de Confidentialité
          </a>
          <a href="#" className="hover:text-accent transition-colors duration-200">
            Contactez-nous
          </a>
        </div>
      </div>
    </footer>
  )
}
