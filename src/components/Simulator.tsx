'use client'

import { useMemo, useState } from 'react'

export function Simulator() {
  const [hectares, setHectares] = useState(200)

  const results = useMemo(() => {
    // Données calibrées sur le rapport V21 (§142, §144)
    const waterSavingPercent = 0.30      // 30 % économie moyenne (INRAE)
    const waterCostPerM3 = 0.12          // €/m³ (tarif eau brute, V21)
    const avgWaterUsagePerHa = 600       // m³/ha irrigué/an (V21 §142)
    const energyCostPerHa = 24           // €/ha/an (pompage)
    const energySavingPercent = 0.30     // corrélé à la baisse des volumes
    const pricePerHa = 19               // €/ha irrigué/an (Standard, V21)
    const subsidyRate = 0.30             // 30 % Agences de l'Eau (plancher)

    // Économies annuelles
    const waterSaved = Math.round(hectares * avgWaterUsagePerHa * waterSavingPercent)
    const waterMoneySaved = Math.round(waterSaved * waterCostPerM3)
    const energySaved = Math.round(hectares * energyCostPerHa * energySavingPercent)
    const totalSaved = waterMoneySaved + energySaved

    // Abonnement annuel SaaS
    const subscription = Math.round(hectares * pricePerHa)

    // Bénéfice net
    const netSavings = totalSaved - subscription

    // Investissement matériel : kit capteurs 1 400 € + installation 600 €
    const materialGross = Math.max(2000, Math.round(hectares / 200 * 2000))
    const materialNet = Math.round(materialGross * (1 - subsidyRate))

    // ROI matériel (sur investissement net après subvention 30 %)
    const roi = netSavings > 0 ? Math.round((netSavings / materialNet) * 100) : 0
    const paybackMonths = netSavings > 0 ? Math.round((materialNet / netSavings) * 12 * 10) / 10 : 0

    return { waterSaved, waterMoneySaved, energySaved, totalSaved, subscription, netSavings, materialGross, materialNet, roi, paybackMonths }
  }, [hectares])

  return (
    <section id="simulator" className="py-20 bg-gray-50">
      <div className="container-watersense">
        <h2 className="text-4xl font-bold text-center mb-4">Simulateur ROI</h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Calculez vos économies et votre retour sur investissement,
          calibré sur les données INRAE et le tarif Standard (19 €/ha irrigué/an).
        </p>

        <div className="simulator-card">
          <div className="flex items-center justify-between mb-6">
            <span className="font-semibold">Surface irriguée</span>
            <span className="chip">{hectares} ha</span>
          </div>
          <input
            type="range"
            min={30}
            max={200}
            step={5}
            value={hectares}
            onChange={(e) => setHectares(Number(e.target.value))}
            className="w-full"
          />
          <p className="text-xs text-gray-500 mt-2 mb-6">Cas type V21 : 200 ha irrigués (exploitation 100-500 ha totaux, dont ~55 ha irrigués en moyenne)</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            <div className="result-card">
              <p className="text-sm text-gray-500">Eau économisée</p>
              <p className="text-2xl font-bold text-primary">{results.waterSaved.toLocaleString('fr-FR')} m³/an</p>
            </div>
            <div className="result-card">
              <p className="text-sm text-gray-500">Économies totales</p>
              <p className="text-2xl font-bold text-primary">{results.totalSaved.toLocaleString('fr-FR')} €/an</p>
              <p className="text-xs text-gray-400">Eau {results.waterMoneySaved.toLocaleString('fr-FR')}€ + Énergie {results.energySaved.toLocaleString('fr-FR')}€</p>
            </div>
            <div className="result-card">
              <p className="text-sm text-gray-500">Abonnement annuel</p>
              <p className="text-2xl font-bold text-gray-700">{results.subscription.toLocaleString('fr-FR')} €/an</p>
              <p className="text-xs text-gray-400">Standard · 19 €/ha irrigué</p>
            </div>
            <div className="result-card bg-green-50">
              <p className="text-sm text-gray-500">Bénéfice net annuel</p>
              <p className="text-2xl font-bold text-green-600">+{results.netSavings.toLocaleString('fr-FR')} €</p>
              <p className="text-xs text-green-600">ROI matériel {results.roi}% · Payback {results.paybackMonths} mois</p>
            </div>
          </div>
          
          <p className="text-xs text-gray-400 mt-6 text-center">
            Calcul : 30% d'économie d'eau (INRAE), tarif eau 0,12 €/m³, 600 m³/ha/an.
            Investissement matériel {results.materialGross.toLocaleString('fr-FR')} € brut → {results.materialNet.toLocaleString('fr-FR')} € net (subvention 30%).
            Hors gains indirects (rendements protégés, éco-régimes PAC 100 €/ha).
          </p>
        </div>
      </div>
    </section>
  )
}
