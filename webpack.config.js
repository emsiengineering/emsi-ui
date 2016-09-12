var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
		'webpack/hot/only-dev-server',
		'./example.jsx' // Your appʼs entry point
	],
	devtool: process.env.WEBPACK_DEVTOOL || 'source-map',
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: loaders
	},
	postcss: function(webpack) {
		return {
			plugins: [
				require('stylelint')(require('./stylelint.config')),
				require('postcss-easy-import')({
					addDependencyTo: webpack
				}),
				require('postcss-url')(),
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
				require('postcss-reporter')()
			]
		}
	},
	devServer: {
		contentBase: './public',
		stats: {
      colors: true,
      hash: false,
      version: false,
      timings: false,
      assets: false,
      chunks: false,
      modules: false,
      reasons: false,
      children: false,
      source: false,
      errors: true,
      errorDetails: true,
      warnings: true,
      publicPath: false
    },
		hot: true
	},
	plugins: [
		new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
		new CopyWebpackPlugin([
			{ from: './index.html' },
			{ from: './assets/fonts' }
		])
	]
};
