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
