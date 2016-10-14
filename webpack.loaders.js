const path = require('path');

module.exports = [
  {
    test: /\.jsx?$/,
    exclude: /(node_modules|bower_components)/,
    loaders: ['react-hot', 'babel']

  }, {
    test: /\.css$/,
    loaders: [
      'style?sourceMap',
      'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
      'postcss-loader'
    ]
  }, {
    test: /\.less$/,
    loaders: [
      'style?sourceMap',
      'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
      'postcss-loader'
    ]
  }, {
    test: /\.png$/,
    loader: 'url-loader?limit=100000'
  }, {
    test: /\.jpg$/,
    loader: 'file-loader'
  }
];
