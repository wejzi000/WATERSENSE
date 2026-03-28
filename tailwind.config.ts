import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Fond global — jamais de blanc pur
        surface:    '#F9FAFB',
        // Texte principal — jamais de noir pur
        ink:        '#1E293B',
        // Primaire bleu canard
        primary: {
          DEFAULT: '#0F4C5C',
          light:   '#13616F',
          dark:    '#0B3A47',
        },
        // Accent cyan doux
        accent: {
          DEFAULT: '#5FA8D3',
          light:   '#84BDE0',
          dark:    '#3D8FBF',
        },
        // Bordures & séparateurs
        border:     '#E5E7EB', // gray-200
      },
      fontFamily: {
        display: ['var(--font-outfit)', 'Outfit', 'system-ui', 'sans-serif'],
        sans:    ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      boxShadow: {
        card: '0 1px 3px 0 rgba(15,76,92,0.06), 0 1px 2px -1px rgba(15,76,92,0.04)',
        'glow-cyan': '0 0 30px -5px rgba(6,182,212,0.3)',
        'glow-cyan-strong': '0 0 50px -5px rgba(6,182,212,0.5)',
        'glow-cyan-btn': '0 0 20px 0px rgba(6,182,212,0.6)',
      },
      borderRadius: {
        btn: '0.375rem', // rounded-md — pas de rounded-full
      },
    },
  },
  plugins: [],
}
export default config
