// tailwind.config.js

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
     // Ensure Tailwind checks all files
  ],
  safelist: ["text-[#0ef]"],
  theme: {
    extend: {
      colors: {
        primary: '#1DA1F2', // Custom primary color
        secondary: '#14171A', // Custom secondary color
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        zen: ['"Zen Dots"', 'sans-serif'],
      },
      spacing: {
        '128': '32rem', // Custom spacing example
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem', // Custom border radius
      },
      letterSpacing: {
        'extra-wide': '0.1em', /* 10% */
      },
    },
  },
  plugins: [
  ],
}
