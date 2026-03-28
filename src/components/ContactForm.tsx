
export function ContactForm() {
  return (
    <form
      action="https://api.web3forms.com/submit"
      method="POST"
      className="max-w-md mx-auto"
      autoComplete="off"
    >
      <input type="hidden" name="access_key" value="93d1ad3f-a137-4590-aafc-7ddb9b03bdad" />
      <input type="text" name="name" placeholder="Votre nom" required className="w-full rounded border border-border px-4 py-2 mb-4" />
      <input type="email" name="email" placeholder="Votre email" required className="w-full rounded border border-border px-4 py-2 mb-4" />
      <textarea name="message" placeholder="Votre message" required rows={4} className="w-full rounded border border-border px-4 py-2 mb-4" />
      <button type="submit" className="rounded-btn bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-dark">Envoyer</button>
    </form>
  );
}
