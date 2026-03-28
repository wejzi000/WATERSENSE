'use client'

import { useState } from 'react'
import { useEmailJS } from '@/hooks/useEmailJS'

export function Contact() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [requestType, setRequestType] = useState<'contact' | 'test'>('contact')
  const { sendContactEmail, sendTestRequest } = useEmailJS()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const formData = new FormData(e.currentTarget)
    
    try {
      if (requestType === 'contact') {
        const result = await sendContactEmail({
          name: formData.get('name') as string,
          email: formData.get('email') as string,
          phone: formData.get('phone') as string,
          subject: 'Nouvelle demande de contact WaterSense',
          message: formData.get('message') as string,
          testRequest: false
        })

        if (result.success) {
          setSent(true)
          ;(e.target as HTMLFormElement).reset()
        } else {
          setError(result.message)
        }
      } else {
        const result = await sendTestRequest({
          name: formData.get('name') as string,
          email: formData.get('email') as string,
          phone: formData.get('phone') as string,
          farm_name: formData.get('farm_name') as string,
          hectares: parseInt(formData.get('hectares') as string) || 0,
          cultures: formData.get('cultures') as string
        })

        if (result.success) {
          setSent(true)
          ;(e.target as HTMLFormElement).reset()
        } else {
          setError(result.message)
        }
      }
    } catch (err) {
      setError('Une erreur s\'est produite')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container-watersense">
        <h2 className="text-4xl font-bold text-center mb-6">Contactez‑nous</h2>
        <p className="text-center text-gray-600 mb-10">Recevez une démo interactive ou demandez un test gratuit sur votre exploitation.</p>

        {/* Onglets */}
        <div className="flex gap-4 mb-6 justify-center">
          <button
            onClick={() => { setRequestType('contact'); setSent(false) }}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              requestType === 'contact'
                ? 'bg-primary text-white'
                : 'bg-white border border-gray-300 text-gray-700 hover:border-primary'
            }`}
          >
            📧 Demande générale
          </button>
          <button
            onClick={() => { setRequestType('test'); setSent(false) }}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              requestType === 'test'
                ? 'bg-primary text-white'
                : 'bg-white border border-gray-300 text-gray-700 hover:border-primary'
            }`}
          >
            🧪 Demander un test
          </button>
        </div>

        <form className="contact-card" onSubmit={handleSubmit}>
          {/* Champs communs */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="label" htmlFor="name">Nom complet *</label>
              <input className="input" id="name" name="name" required placeholder="Patrick Leleu" />
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

          {/* Champs spécifiques au test */}
          {requestType === 'test' && (
            <>
              <div>
                <label className="label" htmlFor="farm_name">Nom de l'exploitation</label>
                <input className="input" id="farm_name" name="farm_name" placeholder="ex: GAEC de la Vallée" />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="label" htmlFor="hectares">Surface (hectares)</label>
                  <input className="input" id="hectares" name="hectares" type="number" min="0" placeholder="50" />
                </div>
                <div>
                  <label className="label" htmlFor="cultures">Cultures principales</label>
                  <input className="input" id="cultures" name="cultures" placeholder="ex: Maïs, Betteraves" />
                </div>
              </div>
            </>
          )}

          {/* Message */}
          <div>
            <label className="label" htmlFor="message">
              {requestType === 'contact' ? 'Votre message' : 'Remarques / Besoins spécifiques'}
            </label>
            <textarea 
              className="input" 
              id="message" 
              name="message" 
              rows={4} 
              required={requestType === 'contact'}
              placeholder={requestType === 'contact' ? 'Décrivez vos besoins...' : 'Besoin d\'une connectivité WiFi spéciale? Avez-vous un système existant? Autres questions...'}
            />
          </div>

          {/* Erreur */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-lg">
              {error}
            </div>
          )}

          {/* Bouton */}
          <button 
            type="submit" 
            disabled={loading}
            className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Envoi en cours...' : requestType === 'contact' ? 'Envoyer ma demande' : 'Demander un test'}
          </button>

          {/* Message de succès */}
          {sent && (
            <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-lg text-center">
              <p className="font-semibold mb-1">✅ Votre demande a été envoyée!</p>
              <p className="text-sm">Nous vous contacterons sous 24-48h pour confirmer {requestType === 'test' ? 'votre test' : 'les détails'}.</p>
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
