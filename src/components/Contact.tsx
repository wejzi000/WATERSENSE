'use client'

import { useState } from 'react'
import { useEmailJS } from '@/hooks/useEmailJS'

export function Contact() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [tab, setTab] = useState<'contact' | 'test'>('contact')
  const { sendContactEmail, sendTestRequest } = useEmailJS()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    const fd = new FormData(e.currentTarget)

    try {
      const result = tab === 'contact'
        ? await sendContactEmail({
            name: fd.get('name') as string,
            email: fd.get('email') as string,
            phone: fd.get('phone') as string,
            subject: 'Nouvelle demande de contact WaterSense',
            message: fd.get('message') as string,
            testRequest: false,
          })
        : await sendTestRequest({
            name: fd.get('name') as string,
            email: fd.get('email') as string,
            phone: fd.get('phone') as string,
            farm_name: fd.get('farm_name') as string,
            hectares: parseInt(fd.get('hectares') as string) || 0,
            cultures: fd.get('cultures') as string,
          })

      if (result.success) {
        setSent(true)
        ;(e.target as HTMLFormElement).reset()
      } else {
        setError(result.message)
      }
    } catch {
      setError("Une erreur s'est produite.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container-watersense max-w-2xl">
        <h2 className="section-title">Contactez-nous</h2>
        <p className="section-subtitle">
          Démo interactive ou test gratuit sur votre exploitation — réponse sous 24-48 h.
        </p>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 justify-center">
          {(['contact', 'test'] as const).map((t) => (
            <button
              key={t}
              onClick={() => { setTab(t); setSent(false) }}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
                tab === t
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {t === 'contact' ? 'Demande générale' : 'Demander un test'}
            </button>
          ))}
        </div>

        <form className="bg-gray-50 rounded-2xl p-6 md:p-8 grid gap-4 border border-gray-100" onSubmit={handleSubmit}>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="label" htmlFor="name">Nom complet *</label>
              <input className="input" id="name" name="name" required placeholder="Jean Dupont" />
            </div>
            <div>
              <label className="label" htmlFor="email">Email *</label>
              <input className="input" id="email" name="email" type="email" required placeholder="vous@exemple.fr" />
            </div>
          </div>
          <div>
            <label className="label" htmlFor="phone">Téléphone *</label>
            <input className="input" id="phone" name="phone" type="tel" required placeholder="+33 6 XX XX XX XX" />
          </div>

          {tab === 'test' && (
            <>
              <div>
                <label className="label" htmlFor="farm_name">Nom de l'exploitation</label>
                <input className="input" id="farm_name" name="farm_name" placeholder="ex : GAEC de la Vallée" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="label" htmlFor="hectares">Surface (hectares)</label>
                  <input className="input" id="hectares" name="hectares" type="number" min="0" placeholder="200" />
                </div>
                <div>
                  <label className="label" htmlFor="cultures">Cultures principales</label>
                  <input className="input" id="cultures" name="cultures" placeholder="ex : Maïs, Blé, Betteraves" />
                </div>
              </div>
            </>
          )}

          <div>
            <label className="label" htmlFor="message">
              {tab === 'contact' ? 'Votre message *' : 'Remarques / Besoins spécifiques'}
            </label>
            <textarea
              className="input"
              id="message"
              name="message"
              rows={3}
              required={tab === 'contact'}
              placeholder={tab === 'contact' ? 'Décrivez vos besoins…' : 'Système existant, connectivité, questions…'}
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 text-sm p-3 rounded-xl">{error}</div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="bg-primary text-white py-3 rounded-full font-bold text-sm hover:bg-primary/90 transition disabled:opacity-50"
          >
            {loading ? 'Envoi…' : tab === 'contact' ? 'Envoyer ma demande' : 'Demander un test gratuit'}
          </button>

          {sent && (
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 p-4 rounded-xl text-center text-sm">
              <p className="font-semibold">Demande envoyée !</p>
              <p className="text-xs mt-1">Nous vous contacterons sous 24-48 h.</p>
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
