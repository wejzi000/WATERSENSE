'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import { ContactForm } from '../ContactForm'

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <ContactForm />
          </motion.div>
                      placeholder="Jean Dupont"
                      className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-white text-ink text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-ink mb-2 font-sans">
                    Email professionnel
                  </label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink/30" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="jean@entreprise.com"
                      className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-white text-ink text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-ink mb-2 font-sans">
                    Votre besoin
                  </label>
                  <div className="relative">
                    <MessageSquare size={16} className="absolute left-3 top-3.5 text-ink/30" />
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="Décrivez brièvement votre projet..."
                      className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-white text-ink text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary-dark hover:-translate-y-0.5"
                >
                  Envoyer ma demande
                  <Send size={16} />
                </button>

                <p className="text-center text-xs text-ink/40 font-sans">
                  Vos données sont protégées. Aucun spam.
                </p>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
