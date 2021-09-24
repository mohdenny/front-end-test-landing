module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'tahu': ['Tahu!', 'Tahu! Regular'],
        // 'gotham-medium': ['Gotham-Medium'],
      },
      height: {
        'hero-lg' : '490px',
      },
      // backgroundImage: {
      //   'hero-vector-pattern': "url('./src/assets/images/heros/Vector.png')"
      // }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
