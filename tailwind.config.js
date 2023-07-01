/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        octocatWave: {
          "0%": {
            transform: "rotate(0)"
          },
          "20%": {
            transform: "rotate(-25deg)"
          },
          "40%": {
            transform: "rotate(10deg)"
          },
          "60%": {
            transform: "rotate(-25deg)"
          },
          "80%": {
            transform: "rotate(10deg)"
          },
          "100%": {
            transform: "rotate(0)"
          },
        }
      },
      animation: {
        octocatWave:"octocatWave 560ms ease-in-out"
      }
    },
  },
  plugins: [],
}
