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
        primary:   '#1F4E79',
        secondary: '#166534',
        navy:      '#0F2D4A',
        sky:       '#38BDF8',
        light:     '#F8FAFC',
      },
      animation: {
        'slide-in': 'slideIn 0.5s cubic-bezier(0.4,0,0.2,1) forwards',
        'fade-in':  'fadeIn  0.4s ease forwards',
        'count-up': 'countUp 0.6s ease forwards',
      },
      keyframes: {
        slideIn:  { from: { opacity: '0', transform: 'translateX(40px)' }, to: { opacity: '1', transform: 'none' } },
        fadeIn:   { from: { opacity: '0' }, to: { opacity: '1' } },
        countUp:  { from: { opacity: '0', transform: 'translateY(12px)' }, to: { opacity: '1', transform: 'none' } },
      },
    },
  },
  plugins: [],
}
export default config
