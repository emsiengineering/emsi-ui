const path = require('path');
const glob = require('glob');

module.exports = {
  title: 'Emsi UI Components Library',
  sections: [
    {
      name: 'Buttons',
      components: 'src/components/Button/*.js'
    },
    {
      name: 'Cards',
      components: 'src/components/Card**/*.js'
    }
  ],
  // components() {
  //   return glob.sync(path.resolve(__dirname, 'src/components/**/*.js')).filter(function(module) {
  //     return module;
  //   });
  // },
  showCode: true,
  serverPort: 3001,
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.js');
    const dir = path.dirname(componentPath);
    return 'import ' + name[0].toUpperCase() + name.substring(1) + ' from \'' + dir + '\';';
  },
  resolver: require('react-docgen').resolver.findAllComponentDefinitions,
  updateWebpackConfig(webpackConfig) {
    const dir = path.resolve(__dirname, 'src');
    webpackConfig.module.loaders.push(
      {
        test: /\.(js|jsx)$/,
        include: dir,
        exclude: /(node_modules|bower_components)/,
        loaders: ['react-hot', 'babel']
      },
      {
        test: /\.css$/,
        include: dir,
        loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'postcss'
        ]
      },
      {
        test: /(\.js|\.jsx)$/,
        loader: 'babel',
        include: path.resolve(__dirname, './node_modules/react-icons/io'),
        query: {
          presets: ['es2015', 'stage-0', 'react']
        }
      }
		);
    webpackConfig.postcss = function(webpack) {
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
      };
    };
    return webpackConfig;
  }
};
