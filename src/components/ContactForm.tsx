
export function ContactForm() {
  return (
    <form
      action="https://api.web3forms.com/submit"
      method="POST"
      className="max-w-md mx-auto bg-gray-950/40 backdrop-blur-lg border border-cyan-900/50 rounded-2xl shadow-glow-cyan p-8 hover:border-cyan-500/80 hover:shadow-glow-cyan-strong transition-all duration-300"
      autoComplete="off"
      data-success-message="Votre message a bien été envoyé ! Merci pour votre prise de contact. Nous vous répondrons rapidement."
    >
      <input type="hidden" name="access_key" value="93d1ad3f-a137-4590-aafc-7ddb9b03bdad" />
      <input type="text" name="name" placeholder="Jean Dupont" required className="w-full rounded border border-cyan-900/50 bg-transparent px-4 py-2 mb-4 text-gray-100 placeholder-gray-400 focus:border-cyan-400 focus:ring-0" />
      <input type="email" name="email" placeholder="jean.dupont@email.com" required className="w-full rounded border border-cyan-900/50 bg-transparent px-4 py-2 mb-4 text-gray-100 placeholder-gray-400 focus:border-cyan-400 focus:ring-0" />
      <textarea name="message" placeholder="Votre message" required rows={4} className="w-full rounded border border-cyan-900/50 bg-transparent px-4 py-2 mb-4 text-gray-100 placeholder-gray-400 focus:border-cyan-400 focus:ring-0" />
      <button type="submit" className="w-full rounded-full bg-cyan-500 text-gray-950 font-semibold px-6 py-3 shadow-glow-cyan-btn transition-all hover:bg-cyan-400 hover:shadow-glow-cyan-strong">Envoyer</button>
    </form>
  );
}
