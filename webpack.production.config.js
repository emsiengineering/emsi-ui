var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: [
		'./index.js' // Your appʼs entry point
	],
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js',
		library: 'emsi-ui',
		libraryTarget: 'umd'
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
		}
	},
	plugins: [
		new CopyWebpackPlugin([
			{ from: './index.html' },
			{ from: './assets/fonts' }
		])
	]
};
