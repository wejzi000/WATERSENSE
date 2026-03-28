  // Génère des alertes dynamiques selon les seuils critiques
  function getAlerts() {
    const alerts = [];
    if (humidity[0] < 60) alerts.push("⚠️ Humidité très basse à 30cm : risque de stress hydrique !");
    if (humidity[1] < 50) alerts.push("⚠️ Humidité insuffisante à 60cm : surveiller l'enracinement.");
    if (humidity[2] < 45) alerts.push("⚠️ Humidité critique à 90cm : risque de perte de rendement.");
    if (confidence < 75) alerts.push("⚠️ Indice de confiance faible : vérifier les capteurs ou refaire une mesure terrain.");
    if (roi < 100) alerts.push("⚠️ ROI matériel sous 100% : revoir la stratégie d'irrigation ou d'investissement.");
    return alerts;
  }

import { useState, useRef } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import { motion } from 'framer-motion';
import { Download, Wifi } from 'lucide-react';
// Pour la génération PDF (sera utilisé dans la prochaine étape)
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export function LiveDashboard() {
  // Liste des cultures et leurs données simulées
  const cultures = [
    {
      key: 'mais',
      label: 'Maïs',
      subtitle: 'Beauce Sud - Maïs Grain',
      data: {
        confidence: 85,
        humidity: [72, 64, 58],
        waterSaving: 28.4,
        roi: 140,
        prescription: 12,
        euroGain: 1840,
      },
    },
    {
      key: 'ble',
      label: 'Blé',
      subtitle: 'Beauce Sud - Blé Tendre',
      data: {
        confidence: 80,
        humidity: [68, 60, 55],
        waterSaving: 22.1,
        roi: 120,
        prescription: 9,
        euroGain: 1200,
      },
    },
    {
      key: 'orge',
      label: 'Orge',
      subtitle: 'Beauce Sud - Orge',
      data: {
        confidence: 78,
        humidity: [70, 62, 54],
        waterSaving: 19.7,
        roi: 110,
        prescription: 8,
        euroGain: 950,
      },
    },
    {
      key: 'tournesol',
      label: 'Tournesol',
      subtitle: 'Beauce Sud - Tournesol',
      data: {
        confidence: 82,
        humidity: [65, 58, 50],
        waterSaving: 25.3,
        roi: 130,
        prescription: 10,
        euroGain: 1350,
      },
    },
    {
      key: 'colza',
      label: 'Colza',
      subtitle: 'Beauce Sud - Colza',
      data: {
        confidence: 76,
        humidity: [60, 55, 48],
        waterSaving: 17.5,
        roi: 105,
        prescription: 7,
        euroGain: 800,
      },
    },
  ];

  const [selectedCulture, setSelectedCulture] = useState(cultures[0].key);
  const dashboardRef = useRef<HTMLDivElement>(null);
  const pdfBtnRef = useRef<HTMLButtonElement>(null);

  // Recommandations dynamiques par culture et données
  function getRecommendations() {
    // Recommandations personnalisées par culture et seuils
    if (culture.label === 'Maïs') {
      if (humidity[0] < 70) return [
        "⚠️ Humidité basse : irriguer 10mm sous 24h.",
        "Vérifier la sonde 90cm (sous 60%) pour éviter le stress hydrique.",
        "Surveiller la météo pour ajuster l'irrigation."
      ];
      if (confidence < 80) return [
        "Indice de confiance faible : valider les données capteurs.",
        "Planifier une visite terrain."
      ];
      return [
        "Situation optimale, maintenir le suivi.",
        "Aucune action urgente requise."
      ];
    }
    if (culture.label === 'Blé') {
      if (humidity[0] < 65) return [
        "Prévoir une irrigation légère (6mm) pour éviter le stress.",
        "Contrôler la fertilisation azotée (stade épi)."
      ];
      if (waterSaving > 20) return [
        "Bonne économie d'eau, continuer l'optimisation.",
        "Surveiller la météo pour ajuster les apports."
      ];
      return [
        "Optimiser la gestion des apports.",
        "Aucune action urgente requise."
      ];
    }
    if (culture.label === 'Orge') {
      if (humidity[0] < 60) return [
        "⚠️ Humidité faible : irriguer rapidement.",
        "Surveiller la montée en épi."
      ];
      return [
        "Adapter l'irrigation selon météo.",
        "Contrôler la pression maladies."
      ];
    }
    if (culture.label === 'Tournesol') {
      if (humidity[0] < 60) return [
        "Réserve utile basse : prévoir irrigation si possible.",
        "Surveiller les stades de floraison."
      ];
      return [
        "Situation stable, continuer le suivi.",
        "Aucune action urgente requise."
      ];
    }
    if (culture.label === 'Colza') {
      if (humidity[0] < 55) return [
        "Contrôler la pression ravageurs (altises, charançons).",
        "Surveiller l'humidité du sol et ajuster si besoin."
      ];
      return [
        "Réaliser un diagnostic visuel des parcelles.",
        "Aucune action urgente requise."
      ];
    }
    return ["Aucune recommandation spécifique"];
  }

  const culture = cultures.find((c) => c.key === selectedCulture)!;

  const { confidence, humidity, waterSaving, roi, prescription, euroGain } = culture.data;

  // Données simulées pour le graphique d'humidité (évolution sur 7 jours)
  const humidityHistory = [
    { day: 'J-6', value: humidity[0] - 6 },
    { day: 'J-5', value: humidity[0] - 4 },
    { day: 'J-4', value: humidity[0] - 2 },
    { day: 'J-3', value: humidity[0] - 1 },
    { day: 'J-2', value: humidity[0] },
    { day: 'J-1', value: humidity[0] + 2 },
    { day: "Aujourd'hui", value: humidity[0] },
  ];

  // Handler pour la génération PDF
  const handleGeneratePDF = async () => {
    if (!dashboardRef.current) return;
    // Masquer le bouton PDF
    if (pdfBtnRef.current) pdfBtnRef.current.style.display = 'none';
    await new Promise((r) => setTimeout(r, 200));
    const element = dashboardRef.current;
    window.scrollTo(0, 0);
    // Créer un conteneur temporaire pour un rendu PDF "propre"
    const clone = element.cloneNode(true);
    if (clone instanceof HTMLElement) {
      clone.style.background = '#fff';
      clone.style.padding = '24px';
      clone.style.borderRadius = '0';
      clone.style.boxShadow = 'none';
      clone.style.maxWidth = 'none';
      clone.style.margin = '0';
      // Masquer le bouton PDF dans le clone si présent
      const btn = clone.querySelector('button');
      if (btn) btn.style.display = 'none';
      document.body.appendChild(clone);
      const canvas = await html2canvas(clone, { backgroundColor: '#fff', scale: 3 });
      document.body.removeChild(clone);
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({ orientation: 'landscape', unit: 'pt', format: 'a4' });
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pageWidth / imgWidth, pageHeight / imgHeight);
      const x = (pageWidth - imgWidth * ratio) / 2;
      const y = (pageHeight - imgHeight * ratio) / 2;
      pdf.addImage(imgData, 'PNG', x, y, imgWidth * ratio, imgHeight * ratio);
      pdf.save(`Dashboard_${culture.label}.pdf`);
    }
    // Réafficher le bouton PDF
    if (pdfBtnRef.current) pdfBtnRef.current.style.display = '';
  };

  return (
    <section className="relative max-w-5xl mx-auto mt-24 mb-20 px-6">
      <motion.div
        ref={dashboardRef}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        className="bg-gray-950/60 border border-cyan-400/20 backdrop-blur-lg rounded-2xl shadow-glow-cyan p-10 flex flex-col gap-8"
      >
        {/* Sélecteur de culture */}
        <div className="flex flex-wrap gap-3 mb-2">
          {cultures.map((c) => (
            <button
              key={c.key}
              onClick={() => setSelectedCulture(c.key)}
              className={`px-4 py-1.5 rounded-full border text-sm font-semibold transition-all duration-200 focus:outline-none ${selectedCulture === c.key ? 'bg-cyan-400/20 border-cyan-400 text-cyan-300 shadow' : 'bg-gray-900/40 border-cyan-400/10 text-gray-300 hover:bg-cyan-400/10'}`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-2">
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight mb-1">
              Dashboard Temps Réel — <span className="text-cyan-400">{culture.subtitle}</span>
            </h3>
            <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" className="inline-block"><circle cx="12" cy="12" r="10" stroke="#06b6d4" strokeWidth="2"/><path d="M8 12l2 2 4-4" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Moteur d'intelligence hybride <span className="font-semibold">STICS-ML</span> calibré INRAE
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 font-semibold text-xs">
              <Wifi className="w-4 h-4" /> LoRaWAN Actif
            </span>
          </div>
        </div>

        {/* Grid Central */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Prescription & Confiance */}
          <div className="flex flex-col items-center gap-4">
            <div className="bg-gray-900/60 border border-cyan-400/10 rounded-xl px-6 py-5 flex flex-col items-center w-full">
              <span className="text-gray-400 text-xs mb-1">Prescription du jour</span>
              <span className="text-4xl font-bold text-cyan-400">{prescription} mm</span>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-xs text-gray-400">Indice de confiance</span>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.7 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="relative flex items-center"
                >
                  <span className="text-lg font-bold text-cyan-400">{confidence}%</span>
                  <div className="ml-2 w-24 h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-2 bg-cyan-400 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${confidence}%` }}
                      viewport={{ once: true, amount: 0.7 }}
                      transition={{ duration: 1, delay: 0.3 }}
                      style={{ width: `${confidence}%` }}
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Économie d'eau & ROI */}
          <div className="flex flex-col items-center gap-4">
            <div className="bg-gray-900/60 border border-cyan-400/10 rounded-xl px-6 py-5 flex flex-col items-center w-full">
              <span className="text-gray-400 text-xs mb-1">Économie d'eau cumulée</span>
              <motion.span
                className="text-4xl font-bold text-cyan-400"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                {waterSaving}%
              </motion.span>
              <span className="text-gray-400 text-xs mt-2">Gain financier</span>
              <motion.span
                className="text-2xl font-semibold text-indigo-400"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                +{euroGain} €
              </motion.span>
              <span className="text-xs text-cyan-400 mt-2">ROI Matériel : <span className="font-bold">{roi}%</span></span>
            </div>
          </div>

          {/* Jauges d'humidité */}
          <div className="flex flex-col items-center gap-4">
            <div className="bg-gray-900/60 border border-cyan-400/10 rounded-xl px-6 py-5 flex flex-col items-center w-full">
              <span className="text-gray-400 text-xs mb-2">Sondes IoT — Humidité du sol</span>
              <div className="flex flex-col gap-2 w-full">
                {[30, 60, 90].map((depth, i) => (
                  <div key={depth} className="flex items-center gap-3">
                    <span className="text-xs text-gray-400 w-10">{depth}cm</span>
                    <motion.div
                      className="flex-1 h-2 rounded-full bg-gray-800 overflow-hidden"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true, amount: 0.7 }}
                      transition={{ duration: 0.7, delay: 0.2 + i * 0.2 }}
                    >
                      <motion.div
                        className="h-2 rounded-full bg-cyan-400"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${humidity[i]}%` }}
                        viewport={{ once: true, amount: 0.7 }}
                        transition={{ duration: 1, delay: 0.3 + i * 0.2 }}
                        style={{ width: `${humidity[i]}%` }}
                      />
                    </motion.div>
                    <span className="text-xs font-semibold text-cyan-400 w-8 text-right">{humidity[i]}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Graphique d'évolution de l'humidité (exemple) */}
        <div className="bg-gray-900/60 border border-cyan-400/10 rounded-xl px-6 py-5 mt-8">
          <h4 className="text-cyan-300 font-semibold mb-2 text-sm">Évolution de l'humidité (30cm)</h4>
          <div style={{ width: '100%', height: 200 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={humidityHistory} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#164e63" />
                <XAxis dataKey="day" stroke="#38bdf8" fontSize={13} tick={{ fill: '#38bdf8', fontWeight: 600 }} />
                <YAxis stroke="#38bdf8" fontSize={13} domain={[0, 100]} tickFormatter={(v) => v + '%'} tick={{ fill: '#38bdf8', fontWeight: 600 }} />
                <Tooltip contentStyle={{ background: '#0f172a', border: '1px solid #06b6d4', color: '#fff' }} formatter={(v) => v + '%'} cursor={{ stroke: '#38bdf8', strokeWidth: 2, opacity: 0.2 }} />
                <Line type="monotone" dataKey="value" stroke="#06b6d4" strokeWidth={4} dot={{ r: 6, fill: '#38bdf8', stroke: '#fff', strokeWidth: 2 }} activeDot={{ r: 8, fill: '#fbbf24', stroke: '#06b6d4', strokeWidth: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        {/* Section Alertes dynamiques */}
        {getAlerts().length > 0 && (
          <div className="mt-8 bg-red-900/20 border border-red-500/40 rounded-xl p-6">
            <h4 className="text-red-400 font-semibold mb-2 text-lg flex items-center gap-2">
              <span>🚨</span> Alertes
            </h4>
            <ul className="list-disc pl-6 text-red-200 text-base">
              {getAlerts().map((alert, i) => (
                <li key={i}>{alert}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Section Actions/Recommandations */}
        <div className="mt-8 bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6">
          <h4 className="text-cyan-300 font-semibold mb-2 text-lg">Actions recommandées</h4>
          <ul className="list-disc pl-6 text-cyan-100 text-base">
            {getRecommendations().map((rec, i) => (
              <li key={i}>{rec}</li>
            ))}
          </ul>
        </div>

        {/* Footer / CTA */}
        <div className="flex justify-end mt-6">
          <button
            ref={pdfBtnRef}
            onClick={handleGeneratePDF}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-500 text-gray-950 font-semibold shadow-glow-cyan-btn hover:bg-cyan-400 hover:shadow-glow-cyan-strong transition-all"
          >
            <Download className="w-5 h-5" /> Générer Bilan de Saison (PDF)
          </button>
        </div>
      </motion.div>
    </section>
  );
}
