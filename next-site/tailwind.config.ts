import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0b1220',
        surface: '#0f1622',
        card: '#0e1a2b',
        text: '#e6eef8',
        muted: '#9fb0c9',
        accent: '#00d4b4',
        accent2: '#60a5fa',
      },
      borderRadius: {
        xl: '12px',
      },
    },
  },
  plugins: [],
} satisfies Config
