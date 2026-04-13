import plugin from 'tailwindcss/plugin'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        app: {
          bg: 'var(--bg-main)',
          surface: 'var(--bg-elev)',
          text: 'var(--text-main)',
          muted: 'var(--text-soft)',
          border: 'var(--line)',
          accent: 'var(--accent-start)',
          accent2: 'var(--accent-end)',
          accentText: 'var(--accent-text)',
        },
      },
      backgroundImage: {
        'app-accent': 'linear-gradient(135deg, var(--accent-start), var(--accent-end))',
      },
      boxShadow: {
        app: '0 20px 80px rgba(0, 0, 0, 0.45)',
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('theme-ocean', '[data-theme="ocean"] &')
      addVariant('theme-mono-dark', '[data-theme="mono-dark"] &')
      addVariant('theme-mono-light', '[data-theme="mono-light"] &')
      addVariant('theme-crimson-gold', '[data-theme="crimson-gold"] &')
    }),
  ],
}

export default config
