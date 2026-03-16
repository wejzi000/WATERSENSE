import { useCallback } from 'react'

// Web3Forms - Clé configurée
const WEB3FORMS_KEY = '93d1ad3f-a137-4590-aafc-7ddb9b03bdad'

export function useEmailJS() {
  const sendContactEmail = useCallback(
    async (data: {
      name: string
      email: string
      phone?: string
      subject: string
      message: string
      testRequest?: boolean
    }) => {
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            access_key: WEB3FORMS_KEY,
            subject: `🌱 WaterSense - ${data.subject}`,
            from_name: data.name,
            email: data.email,
            phone: data.phone || 'Non fourni',
            message: data.message,
            type: data.testRequest ? 'Demande de TEST' : 'Contact général',
          }),
        })

        const result = await response.json()
        
        if (result.success) {
          console.log('✅ Email envoyé:', result)
          return { success: true, message: 'Votre demande a été envoyée!' }
        } else {
          console.error('❌ Erreur:', result)
          return { success: false, message: result.message || 'Erreur lors de l\'envoi' }
        }
      } catch (error) {
        console.error('❌ Erreur envoi email:', error)
        return { success: false, message: 'Erreur lors de l\'envoi' }
      }
    },
    []
  )

  const sendTestRequest = useCallback(
    async (data: {
      name: string
      email: string
      phone: string
      farm_name: string
      hectares: number
      cultures: string
    }) => {
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            access_key: WEB3FORMS_KEY,
            subject: '🧪 WaterSense - Nouvelle demande de TEST',
            from_name: data.name,
            email: data.email,
            phone: data.phone,
            exploitation: data.farm_name,
            surface: `${data.hectares} hectares`,
            cultures: data.cultures,
            type: 'DEMANDE DE TEST TERRAIN',
          }),
        })

        const result = await response.json()
        
        if (result.success) {
          console.log('✅ Demande de test envoyée:', result)
          return { 
            success: true, 
            message: 'Votre demande de test a été envoyée! Nous vous contacterons sous 24h.' 
          }
        } else {
          console.error('❌ Erreur:', result)
          return { success: false, message: result.message || 'Erreur lors de l\'envoi' }
        }
      } catch (error) {
        console.error('❌ Erreur envoi demande test:', error)
        return { success: false, message: 'Erreur lors de l\'envoi' }
      }
    },
    []
  )

  return { sendContactEmail, sendTestRequest }
}
