
export function ContactForm() {
  return (
    <form
      action="https://api.web3forms.com/submit"
      method="POST"
      className="max-w-md mx-auto"
      autoComplete="off"
      data-success-message="Merci, votre message a bien été envoyé. Nous vous répondrons sous 24h."
    >
      <input type="hidden" name="access_key" value="93d1ad3f-a137-4590-aafc-7ddb9b03bdad" />
      <input type="text" name="name" placeholder="Jean Dupont" required className="w-full rounded border border-border px-4 py-2 mb-4" />
      <input type="email" name="email" placeholder="jean.dupont@email.com" required className="w-full rounded border border-border px-4 py-2 mb-4" />
      <textarea name="message" placeholder="Votre message" required rows={4} className="w-full rounded border border-border px-4 py-2 mb-4" />
      <button type="submit" className="rounded-btn bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-dark">Envoyer</button>
    </form>
  );
}
