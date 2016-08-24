export default {
  html: {
    height: '100%',
    fontSize: '50%'
  },

  body: {
    fontSize: '1.875rem',
    fontWeight: 'normal',
    fontStyle: 'normal',
    '-webkit-font-smoothing': 'antialiased'
  },

  'body, input, textarea, select': {
    fontFamily: '"Sailec", "Acto", "Avenir", "Helvetica", Arial, Sans-Serif'
  },

  '*, *:before, *:after': {
    boxSizing: 'border-box'
  },

  '@media only screen and (min-width: 800px)': {
    html: {
      fontSize: '62.5%'
    },

    body: {
      fontSize: '1.5rem'
    },

    'h1.big-text': {
      fontSize: '6rem',
      fontWeight: 200
    },

    '.text-break': {
      display: 'block'
    }
  }
};
