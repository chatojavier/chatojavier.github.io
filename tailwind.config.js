module.exports = {
  purge: [
    // Paths to your templates...
    "./**.html",
    "./src/js/**.js"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    maxWidth: {
      '1200': '1200px',
      '1024': '1024px'
    },
    colors: {
      red: '#ff2a00',
      black: '#000',
      white: '#fff'
    },
    fontFamily: {
      'sans': 'Raleway, "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", sans-serif',
      'roboto': 'Roboto, "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", sans-serif'
    },
    extend: {
      height: {
        '125': '31.25rem'
      },
      borderWidth: {
        '1': '1px'
      },
      width: {
        '1/10': '10%',
        '2/10': '20%',
        '3/10': '30%',
        '4/10': '40%',
        '5/10': '50%',
        '6/10': '60%',
        '7/10': '70%',
        '8/10': '80%',
        '9/10': '90%',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    
  ],
}
