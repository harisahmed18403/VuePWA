/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-bg': 'var(--primary-bg)',
        'on-primary-bg': 'var(--on-primary-bg)',
        'primary-text': 'var(--primary-text)',
        'primary-border': 'var(--primary-border)',
        'primary-highlight': 'var(--primary-highlight)',
        'secondary-bg': 'var(--secondary-bg)',
        'secondary-text': 'var(--secondary-text)',
        'secondary-border': 'var(--secondary-border)',
        'on-secondary-bg': 'var(--on-secondary-bg)',
      },
    },
  },
  plugins: [],
}
