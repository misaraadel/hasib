module.exports = {
  mode: "jit",
  darkMode: false, // or 'media' or 'class'

  theme: {
    colors: {
      primary: `#045224`,
      secondary: `#09C957`,
      white: `#fff`,
      dark: `#000`,
    },

    fontFamily: {
      display: ['helvetica', 'sans-serif'],
      body: ['helvetica', 'sans-serif'],
    },

    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1170px',
    },

    container: {
      center: true,
      padding: '15px',
    },
  },

  variants: {},

  plugins: [
    // require('tailwindcss-logical'),
    // require('tailwindcss-dark-mode')()
  ],

  purge: [
    "./assets/**/*.{css}",
    "./components/*.{vue,js}",
    "./components/**/*.{vue,js}",
    "./pages/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./*.{vue,js,ts}",
    "./nuxt.config.{js,ts}",
  ]
}
