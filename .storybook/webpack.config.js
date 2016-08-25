const path = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test: /(\.js|\.jsx)$/,
        loader: 'babel',
        include: path.resolve(__dirname, '../node_modules/react-icons/io'),
        query: {
          presets: ['es2015', 'stage-0', 'react']
        }
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }, {
        test: /\.png$/,
        loader: 'url-loader?limit=100000'
      }, {
        test: /\.jpg$/,
        loader: 'file-loader'
      }
    ]
  }
};
