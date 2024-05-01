import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      container: {
        center: true,
        screens: {
          '2xl': '1400px',
        },
      },
      colors: {
        primary: '#8650F6',
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
      },
      screens: {
        '3xl': '2000px',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
export default config
