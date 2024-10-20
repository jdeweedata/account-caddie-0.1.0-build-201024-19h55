import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'te-papa-green': '#1D3F39',
        'chelsea-cucumber': '#83A148',
        'xanadu': '#748B75',
        'pampas': '#F3F3EC',
      },
      fontFamily: {
        sans: ['Noto Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config