'use client'

import { useState } from 'react'
import { useEmailJS } from '@/hooks/useEmailJS'

export function Contact() {
  const [sent,    setSent]    = useState(false)
  const [loading, setLoading] = useState(false)
  const [error,   setError]   = useState('')
  const [tab,     setTab]     = useState<'contact' | 'test'>('contact')
  const { sendContactEmail, sendTestRequest } = useEmailJS()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); setLoading(true); setError('')
    const fd = new FormData(e.currentTarget)
    try {
      const res = tab === 'contact'
        ? await sendContactEmail({ name: fd.get('name') as string, email: fd.get('email') as string, phone: fd.get('phone') as string, subject: 'Contact WaterSense', message: fd.get('message') as string, testRequest: false })
        : await sendTestRequest({  name: fd.get('name') as string, email: fd.get('email') as string, phone: fd.get('phone') as string, farm_name: fd.get('farm_name') as string, hectares: parseInt(fd.get('hectares') as string) || 0, cultures: fd.get('cultures') as string })
      if (res.success) { setSent(true); (e.target as HTMLFormElement).reset() }
      else setError(res.message)
    } catch { setError("Une erreur s'est produite.") }
    finally { setLoading(false) }
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="wrap max-w-lg">
        <div className="text-center mb-10">
          <span className="eyebrow">Contact</span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-3 tracking-tight">
            Parlons de votre projet
          </h2>
          <p className="text-gray-400 text-sm mt-2">Réponse sous 24 h.</p>
        </div>

        <div className="flex gap-2 mb-6 p-1 bg-gray-100 rounded-full">
          {(['contact', 'test'] as const).map(t => (
            <button key={t} onClick={() => { setTab(t); setSent(false) }}
              className={`flex-1 py-2.5 rounded-full text-sm font-semibold transition ${
                tab === t ? 'bg-white text-primary shadow-sm' : 'text-gray-500 hover:text-gray-700'
              }`}>
              {t === 'contact' ? 'Demande générale' : 'Test gratuit'}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="grid sm:grid-cols-2 gap-3">
            <div><label className="label">Nom *</label><input className="input" name="name" required placeholder="Jean Dupont" /></div>
            <div><label className="label">Email *</label><input className="input" name="email" type="email" required placeholder="vous@exemple.fr" /></div>
          </div>
          <div><label className="label">Téléphone *</label><input className="input" name="phone" type="tel" required placeholder="+33 6 XX XX XX XX" /></div>

          {tab === 'test' && (
            <>
              <div><label className="label">Exploitation</label><input className="input" name="farm_name" placeholder="GAEC de la Vallée" /></div>
              <div className="grid sm:grid-cols-2 gap-3">
                <div><label className="label">Hectares</label><input className="input" name="hectares" type="number" min="0" placeholder="200" /></div>
                <div><label className="label">Cultures</label><input className="input" name="cultures" placeholder="Maïs, Blé..." /></div>
              </div>
            </>
          )}

          <div>
            <label className="label">{tab === 'contact' ? 'Message *' : 'Remarques'}</label>
            <textarea className="input" name="message" rows={3} required={tab === 'contact'} placeholder="Vos besoins..." />
          </div>

          {error && <p className="text-red-600 text-sm bg-red-50 p-3 rounded-xl">{error}</p>}

          <button type="submit" disabled={loading} className="btn-primary justify-center py-3.5 mt-1">
            {loading ? 'Envoi...' : tab === 'contact' ? 'Envoyer' : 'Demander un test'}
          </button>

          {sent && (
            <div className="bg-green-50 border border-green-100 text-green-700 p-4 rounded-xl text-center text-sm font-medium">
              Demande envoyée. Nous vous recontactons sous 24 h.
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
