import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'TON_SERVICE_ID',      // À remplacer par ton Service ID EmailJS
      'TON_TEMPLATE_ID',     // À remplacer par ton Template ID EmailJS
      form.current,
      'TA_PUBLIC_KEY'        // À remplacer par ta Public Key EmailJS
    )
    .then(() => {
      alert('Message envoyé !');
      form.current.reset();
    }, (error) => {
      alert('Erreur lors de l\'envoi : ' + error.text);
    });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto">
      <input type="text" name="user_name" placeholder="Votre nom" required className="w-full rounded border border-border px-4 py-2 mb-4" />
      <input type="email" name="user_email" placeholder="Votre email" required className="w-full rounded border border-border px-4 py-2 mb-4" />
      <textarea name="message" placeholder="Votre message" required rows={4} className="w-full rounded border border-border px-4 py-2 mb-4" />
      <button type="submit" className="rounded-btn bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-dark">Envoyer</button>
    </form>
  );
}
