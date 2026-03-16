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
        primary: '#1F4E79',
        secondary: '#166534',
        accent: '#0EA5E9',
        navy: '#0F2D4A',
        sage: '#D1FAE5',
        dark: '#111827',
        light: '#F8FAFC',
      },
    },
  },
  plugins: [],
}
export default config
