module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'shima': "url('/src/images/shimaWP.png')",
        'shima-phone': "url('/src/images/shimaWPPhone.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
