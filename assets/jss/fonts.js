function woffMaker(name) {
  return `url('${name}.woff2') format('woff2'), url('${name}.woff') format('woff')`;
}

export default {
  '@font-face': [
    {
      fontFamily: 'Sailec',
      fontWeight: 'normal',
      fontStyle: 'normal',
      src: woffMaker('sailec-webfont')
    },
    {
      fontFamily: 'Sailec',
      fontWeight: 700,
      src: woffMaker('sailec_bold-webfont')
    },
    {
      fontFamily: 'Sailec',
      fontWeight: 500,
      src: woffMaker('sailec_medium-webfont')
    },
    {
      fontFamily: 'Sailec',
      fontStyle: 'italic',
      src: woffMaker('sailec_regular_italic-webfont')
    },
    {
      fontFamily: 'Sailec',
      fontWeight: 200,
      fontStyle: 'italic',
      src: woffMaker('sailec_thin_italic-webfont')
    },
    {
      fontFamily: 'Ionicons',
      fontWeight: 'normal',
      fontStyle: 'normal',
      src: 'url("ionicons.woff") format("woff"), url("ionicons.ttf") format("truetype")'
    }
  ]
};
