const path = require('path');

module.exports = {
  module: {
    preLoaders: [
      {
        test: /\.styl$/,
        loader: 'stylint'
      },
    ],
    loaders: [
      {
        test: /(\.js|\.jsx)$/,
        loader: 'babel',
        include: path.resolve(__dirname, '../node_modules/react-icons/io'),
        query: {
          presets: ['es2015', 'stage-0', 'react']
        }
      }, {
        test: /\.png$/,
        loader: 'url-loader?limit=100000'
      }, {
        test: /\.jpg$/,
        loader: 'file-loader'
      },
      {
        test: /\.(styl|css)$/,
        loader: 'style?sourcemap!css?modules&importLoaders=1&localIdentName=[local]!stylus?paths=src',
      }
    ]
  }
};
