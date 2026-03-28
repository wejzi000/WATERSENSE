import { motion } from 'framer-motion';
import { Download, Wifi } from 'lucide-react';

export function LiveDashboard() {
  // Données simulées (issues du rapport)
  const confidence = 85;
  const humidity = [72, 64, 58]; // 30cm, 60cm, 90cm
  const waterSaving = 28.4;
  const roi = 140;
  const prescription = 12; // mm
  const euroGain = 1840;

  return (
    <section className="relative max-w-5xl mx-auto mt-24 mb-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        className="bg-gray-950/60 border border-cyan-400/20 backdrop-blur-lg rounded-2xl shadow-glow-cyan p-10 flex flex-col gap-8"
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-2">
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight mb-1">
              Dashboard Temps Réel — <span className="text-cyan-400">Beauce Sud - Maïs Grain</span>
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

        {/* Footer / CTA */}
        <div className="flex justify-end mt-6">
          <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-500 text-gray-950 font-semibold shadow-glow-cyan-btn hover:bg-cyan-400 hover:shadow-glow-cyan-strong transition-all">
            <Download className="w-5 h-5" /> Générer Bilan de Saison (PDF)
          </button>
        </div>
      </motion.div>
    </section>
  );
}
