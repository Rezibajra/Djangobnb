module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'airbnb': '#ff385c',
        'airbnb-dark': '#d50027',
        'light-gray': '#D3D3D3'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
