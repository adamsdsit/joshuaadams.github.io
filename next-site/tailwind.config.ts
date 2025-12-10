import type { Config } from 'tailwindcss';

export default {
  content: ['./src/app/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Base neutrals
        light: {
          bg: '#ffffff',
          surface: '#f8fafc',
          text: '#0f172a',
          muted: '#475569',
          border: '#e2e8f0',
        },
        dark: {
          bg: '#0b1220',
          surface: '#111827',
          text: '#e5e7eb',
          muted: '#94a3b8',
          border: '#1f2937',
        },
        // Accents
        accent: '#22d3ee',
        accent2: '#60a5fa',
      },
      borderRadius: {
        xl: '12px',
      },
    },
  },
  plugins: [],
} satisfies Config;
