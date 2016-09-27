const path = require('path');

module.exports = [
  {
    test: /\.jsx?$/,
    exclude: /(node_modules|bower_components)/,
    loaders: ['react-hot', 'babel']

  },
  {
    test: /(\.js|\.jsx)$/,
    loader: 'babel',
    include: path.resolve(__dirname, './node_modules/react-icons/io'),
    query: {
      presets: ['es2015', 'stage-0', 'react']
    }
  }, {
    test: /\.css$/,
    loaders: [
      'style?sourceMap',
      'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
      'postcss'
    ]
  }, {
    test: /\.less$/,
    loaders: [
      'style?sourceMap',
      'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
      'postcss'
    ]
  }, {
    test: /\.png$/,
    loader: 'url-loader?limit=100000'
  }, {
    test: /\.jpg$/,
    loader: 'file-loader'
  }
];
