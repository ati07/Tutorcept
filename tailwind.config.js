module.exports = {
  mode:'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './component/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'banner': "url('/banner_new.jpg')",
        'login-baaner': "url('/login.png')",
        'contact-us': "url('/contact us_Prancheta 1.jpg')",
        'timerbg': "url('/timer.png')",
    }),
    },
  },
  variants: {
    extend: {
      borderColor: ['active'],
    },
  },
  plugins: [],
}
