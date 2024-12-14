// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",  // make sure to include the paths to your React components
  ],
  theme: {
    extend: {
      fontFamily: {
        'protest': ['"Protest Revolution"', 'sans-serif'],
        'sans': ['"Poppins"', 'serif;'],
      },
    },
  },
  plugins: [],
}
