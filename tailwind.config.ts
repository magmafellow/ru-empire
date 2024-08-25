import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        dk: '#2F1212', // dark bg red
        wh: '#ffffff',  // white
        light: '#C57D7D',  // light red (contrast for bg)
        yel: '#FFD700', // yellow
        gr: "#D1D1D1", // gray
        blHalf: "#0000006e", // transparent black ±30%
      },
    },
  },
  plugins: [],
}
export default config
