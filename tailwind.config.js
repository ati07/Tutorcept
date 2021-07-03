module.exports = {
  mode:'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './component/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'banner': "url('/banner_new.jpg')",
        'login-baaner': "url('/Login_Banner.png')",
    }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
