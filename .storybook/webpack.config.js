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
        loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'postcss',
        ]
      }, {
        test: /\.png$/,
        loader: 'url-loader?limit=100000'
      }, {
        test: /\.jpg$/,
        loader: 'file-loader'
      }, {
        test: /\.styl$/,
        loader: 'style?sourcemap!css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!stylus',
      }
    ]
  },
  postcss: function(webpack) {
    return {
      plugins: [
        require('postcss-easy-import')({
					addDependencyTo: webpack
				}),
				require("postcss-url")(),
				require('postcss-mixins')(),
				require('postcss-each')(),
				require('postcss-for')(),
				require('postcss-simple-vars')(),
				require('postcss-calc')(),
				require('postcss-cssnext')({
					features: {
						colorFunction: true
					}
				}),
				// put plugins here

				// end plugins
				require('postcss-color-function')(),
				require("postcss-reporter")()
      ]
    };
  }
};
