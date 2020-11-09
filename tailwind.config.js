module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'exo': ['"Exo 2"'],
        'body': ['Inter'],
      },
      colors: {
        'ws-blue': {
          100: '#E6F0FF',
          200: '#BFDAFF',
          300: '#99C3FF',
          400: '#4D97FE',
          500: '#006AFE',
          600: '#005FE5',
          700: '#004098',
          800: '#003072',
          900: '#00204C',
        },
        'red-gesell': '#CA1515',
        'yellow-gesell': '#FFCB13',
        'dark-gesell': '#27153E',
        'light-gesell': '#FAF8F9',
      }
    },
  },
  variants: {},
  plugins: [],
  purge: process.env.NODE_ENV === 'production' ? {
    enabled: true,
    content: ['src/**/*.njk', 'src/**/*.js'],
  } : {}
}