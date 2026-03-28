import React, { useRef } from 'react';

export const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    const formData = new FormData(form.current);
    const data = Object.fromEntries(formData.entries());

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert('Message envoyé !');
      form.current.reset();
    } else {
      alert("Erreur lors de l'envoi du message.");
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto">
      <input type="text" name="user_name" placeholder="Votre nom" required className="w-full rounded border border-border px-4 py-2 mb-4" />
      <input type="email" name="user_email" placeholder="Votre email" required className="w-full rounded border border-border px-4 py-2 mb-4" />
      <textarea name="message" placeholder="Votre message" required rows={4} className="w-full rounded border border-border px-4 py-2 mb-4" />
      <button type="submit" className="rounded-btn bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-dark">Envoyer</button>
    </form>
  );
};
