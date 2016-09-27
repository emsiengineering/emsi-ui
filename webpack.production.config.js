var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: {
		Alert: ['./src/components/Alert'],
		Button: ['./src/components/Button'],
		Card: ['./src/components/Card'],
		CardBody: ['./src/components/CardBody'],
		CardMedia: ['./src/components/CardMedia'],
		Checkbox: ['./src/components/Checkbox'],
		CheckboxGroup: ['./src/components/CheckboxGroup'],
		Col: ['./src/components/Col'],
		ContentWrap: ['./src/components/ContentWrap'],
		GlobalHeader: ['./src/components/GlobalHeader'],
		Grid: ['./src/components/Grid'],
		Header: ['./src/components/Header'],
		Icon: ['./src/components/Icon'],
		Input: ['./src/components/Input'],
		Label: ['./src/components/Label'],
		Modal: ['./src/components/Modal'],
		Option: ['./src/components/Option'],
		Pillbox: ['./src/components/Pillbox'],
		Radio: ['./src/components/Radio'],
		RadioGroup: ['./src/components/RadioGroup'],
		Row: ['./src/components/Row'],
		Select: ['./src/components/Select'],
		Tab: ['./src/components/Tab'],
		Table: ['./src/components/Table'],
		TabPanel: ['./src/components/TabPanel'],
		Td: ['./src/components/Td'],
		Textarea: ['./src/components/Textarea'],
		Tr: ['./src/components/Tr']
	},
	output: {
		path: path.join(__dirname, 'lib'),
		filename: '[name].js',
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
		]),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(process.env.NODE_ENV)
			}
		}),
		new webpack.NoErrorsPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			mangle: {
				screw_ie8: true
			},
			compress: {
				warnings: true,
				sequences: true,
				dead_code: true,
				conditionals: true,
				booleans: true,
				unused: true,
				if_return: true,
				join_vars: true,
				drop_console: true
			}
		}),
		new webpack.optimize.DedupePlugin()
	]
};
