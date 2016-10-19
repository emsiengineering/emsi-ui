const webpack = require('webpack');
const path = require('path');
const loaders = require('./webpack.loaders');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    Alert: ['./src/components/Alert/alert.css'],
    Button: ['./src/components/Button/button.css'],
    Card: ['./src/components/Card/card.css'],
    CardBody: ['./src/components/CardBody/card-body.css'],
    CardMedia: ['./src/components/CardMedia/card-media.css'],
    Checkbox: ['./src/components/Checkbox/checkbox.css'],
    // CheckboxGroup: ['./src/components/CheckboxGroup/checkbox-group.css'],
    Col: ['./src/components/Col/col.css'],
    ContentWrap: ['./src/components/ContentWrap/contentwrap.css'],
    // GlobalHeader: ['./src/components/GlobalHeader/card.css'],
    Grid: ['./src/components/Grid/grid.css'],
    Header: ['./src/components/Header/header.css'],
    Icon: ['./src/components/Icon/icon.css'],
    Input: ['./src/components/Input/input.css'],
    Label: ['./src/components/Label/label.css'],
    Modal: ['./src/components/Modal/modal.css'],
    Option: ['./src/components/Option/option.css'],
    Pillbox: ['./src/components/Pillbox/pillbox.css'],
    // Radio: ['./src/components/Radio/radio.css'],
    // RadioGroup: ['./src/components/RadioGroup/radio-group.css'],
    Row: ['./src/components/Row/row.css'],
    Select: ['./src/components/Select/select.css'],
    Tab: ['./src/components/Tab/tab.css'],
    Table: ['./src/components/Table/table.css'],
    TabPanel: ['./src/components/TabPanel/tab-panel.css'],
    Td: ['./src/components/Td/td.css'],
    // Textarea: ['./src/components/Textarea/textarea.css'],
    Tr: ['./src/components/Tr/tr.css']
  },
  output: {
    path: path.join(__dirname, 'lib'),
    filename: '[name]/[name].css'
  },
  resolve: {
    extensions: ['', '.css']
  },
  module: {
    loaders:
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        notExtractLoader: 'style-loader',
        loader: 'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!resolve-url!postcss'
      })
    }
  },
  postcss() {
    return {
      plugins: [
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
    };
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('[name].css')
  ]
};
