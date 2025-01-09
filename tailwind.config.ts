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
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        result: 'var(--result)',
        'btn-submit': 'var(--btn-submit)',
        'text-result': 'var(--text-result)',
        'bg-secondary': 'var(--bg-secondary)',
        'btn-delete': 'var(--btn-delete)',
        'btn-number': 'var(--btn-number)',
        'btn-hover': 'var(--btn-hover)',
        'btn-equal': 'var(--btn-equal)',
        'btn-change': 'var(--btn-change)',
        'btn-border-b': 'var(--btn-border-b)',
        'text-equal': 'var(--text-equal)',
        'btn-text': 'var(--btn-text)',
        'text-title': 'var(--text-title)',
        'bg-switch': 'var(--bg-switch)',
        'reset-border': 'var(--reset-border)',
        'equal-border': 'var(--equal-border)',
      },
    },
  },
  plugins: [],
}
export default config
