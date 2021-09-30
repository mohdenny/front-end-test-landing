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
      width: {
        '21rem': '21.5rem',
        '27rem': '27rem',
        '29rem': '29rem'
      },
      fontSize: {
        xxs: ['8px', '11px']
      },
      height: {
        'hero-shape-xs': '400px',
        'hero-shape-sm': '380px',
        'hero-shape-md': '480px',
        'hero-shape-lg': '580px',
        'hero-shape-xl': '720px',
        'hero-shape': '770px',
        'hero-pattern': '770px',
        'event-1-2xl': '640px',
        'event-2-2xl': '640px',
        'event-1-xl': '570px',
        'event-2-xl': '570px',
        'event-1-lg': '470px',
        'event-2-lg': '470px',
        'event-1-md': '770px',
        'event-2-md': '770px',
        'event-1-sm': '600px',
        'event-2-sm': '600px',
        'event-1-mobile': '640px',
        'event-2-mobile': '640px',
        'event-1': '627px',
        'event-2': '627px',
        '100rem': '100rem'
      },
      backgroundImage: {
        'hero-shape': "url('../images/heros/shape_red.png')",
        'hero-pattern': "url('../images/heros/hero_pattern.png')",
        'logo-bisnis': "url('../images/heros/logo_bisnis_top.png')",
        'logo-indonesia-maju': "url('../images/heros/logo_indonesia_maju_top.png')",
        'event-1': "url('../images/instagram_1/bg-img.png')",
        'event-2': "url('../images/instagram_2/bg-img.png')"
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
