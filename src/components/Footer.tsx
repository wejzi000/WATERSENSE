'use client'

export function Footer() {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container-watersense grid md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="font-bold mb-4">💧 WaterSense</h3>
          <p className="text-gray-400 text-sm">
            Plateforme d'irrigation prescriptive pour exploitations mid-market (100-500 ha). 
            Partenariat INRAE • Modèle STICS
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Solution</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#features" className="hover:text-white">Technologie</a></li>
            <li><a href="#pricing" className="hover:text-white">Tarification</a></li>
            <li><a href="#simulator" className="hover:text-white">Simulateur ROI</a></li>
            <li><a href="#benefits" className="hover:text-white">Avantages</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Partenaires</h4>
          <ul className="space-y-2 text-gray-400">
            <li><span className="text-gray-500">INRAE (envisagé)</span></li>
            <li><span className="text-gray-500">Coopératives agricoles</span></li>
            <li><span className="text-gray-500">Chambres d'Agriculture</span></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Contact</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#contact" className="hover:text-white">Demander une démo</a></li>
            <li><a href="#contact" className="hover:text-white">Test gratuit</a></li>
            <li className="text-sm mt-4">Segment cible : 100-500 ha</li>
            <li className="text-sm">Régions prioritaires : Beauce, Sud-Ouest, Rhône</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
        <p>&copy; 2026 WaterSense. Tous droits réservés. | ROI 110-210% • Prescriptivité 70-90% • Garantie -20% eau</p>
      </div>
    </footer>
  )
}
