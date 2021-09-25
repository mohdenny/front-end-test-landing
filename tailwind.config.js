module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'tahu': ['tahu'],
        'gotham': ['Gotham'],
      },
      fontSize: {
        '2xs': '0.5rem',
        '3xs': '0.4rem',
        '4xs': '0.3rem'
      },
      height: {
        'hero-sm' : '340px',
        'hero-md' : '410px',
        'hero-lg' : '550px',
        'hero-xl' : '670px',
        'hero-2xl' : '820px',
        'video-thumb-sm' : '180px',
        'video-thumb-md' : '280px',
        'video-thumb-lg' : '380px',
        'video-thumb-xl' : '480px',
        'video-thumb-2xl' : '580px',
      },
      backgroundImage: {
        'shape-red': "url('../images/heros/shape_red.png')",
        'vector-pattern': "url('../images/heros/vector.png')",
        'logo-bisnis-top': "url('../images/heros/logo_bisnis_top.png')",
        'logo-indonesia-maju-top': "url('../images/heros/logo_indonesia_maju_top.png')",
        'video-thumb': "url('../images/heros/video_thumb.png')",
        'icon-player': "url('../images/heros/icon_player.png')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
