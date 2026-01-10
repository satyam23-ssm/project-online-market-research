/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0f172a',
        surface: '#111827',
        primary: '#22c55e',
        'primary-contrast': '#062e17',
        card: '#1f2937',
        alt: '#0b1222',
        chip: '#111f2e',
        muted: '#9ca3af',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
