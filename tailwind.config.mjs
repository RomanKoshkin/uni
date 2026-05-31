/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        surface: {
          900: '#0f0f13',
          800: '#16161d',
          700: '#1e1e28',
          600: '#272733',
        },
        melbourne: {
          DEFAULT: '#3b82f6',
          dim: '#1e3a5f',
        },
        waseda: {
          DEFAULT: '#a855f7',
          dim: '#3b1d6e',
        },
        shibaura: {
          DEFAULT: '#22c55e',
          dim: '#14532d',
        },
        timeline: {
          DEFAULT: '#f59e0b',
          dim: '#78350f',
        },
      },
    },
  },
  plugins: [],
};
