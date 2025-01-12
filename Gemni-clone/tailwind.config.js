
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust based on your file structure
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-text': 'linear-gradient(16deg, #4b90ff, #ff5546)',
      },
      textColor: {
        transparent: 'transparent',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'], 
        
      },
      
    },
  },
  plugins: [],
};