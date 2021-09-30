module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    debugScreens: {
      prefix: 'screen: ',
      position: ['bottom', 'left'],
      style: {
        backgroundColor: '#C0FFEE',
        color: 'black',
      },
    },
    extend: {
      fontFamily: {
        'tahu': ['Tahu'],
        'gotham': ['Gotham Book'],
      },
      height: {
        'hero-shape-xs': '400px',
        'hero-shape-sm': '380px',
        'hero-shape-md': '480px',
        'hero-shape-lg': '580px',
        'hero-shape-xl': '720px',
        'hero-shape': '770px',
        'hero-pattern': '770px'
      },
      backgroundImage: {
        'hero-shape': "url('../images/heros/shape_red.png')",
        'hero-pattern': "url('../images/heros/hero_pattern.png')",
        'logo-bisnis': "url('../images/heros/logo_bisnis_top.png')",
        'logo-indonesia-maju': "url('../images/heros/logo_indonesia_maju_top.png')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-debug-screens'),
  ],
}
