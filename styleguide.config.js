const path = require('path');
const pkg = require('./package.json');
const dasherize = require('dasherize');

function component(name) {
  return path.resolve(__dirname, 'src/components', name, dasherize(name));
}

module.exports = {
  title: `Emsi UI Components Library v${pkg.version}`,
  serverPort: 3001,
  showCode: true,
  highlightTheme: 'rubyblue',
  sections: [
    {
      name: 'Cards',
      components() {
        return [
          component('Card'),
          component('CardMedia'),
          component('CardBody')
        ];
      }
    },
    {
      name: 'Feedback Elements',
      components() {
        return [
          component('Alert')
        ];
      }
    },
    {
      name: 'Form Elements',
      components() {
        return [
          component('Button'),
          component('Checkbox'),
          component('CheckboxGroup'),
          component('DataHeader'),
          component('DataTable'),
          component('Input'),
          component('Label'),
          component('Option'),
          component('Radio'),
          component('RadioGroup'),
          component('Select'),
          component('Table'),
          component('Textarea'),
          component('Td'),
          component('Tr')
        ];
      }
    },
    {
      name: 'Icons',
      components() {
        return [
          component('Icon')
        ];
      }
    },
    {
      name: 'Layout',
      components() {
        return [
          component('ContentWrap'),
          component('Col'),
          component('Grid'),
          component('Row')
        ];
      }
    },
    {
      name: 'Modals',
      components() {
        return [
          component('Modal')
        ];
      }
    },
    {
      name: 'Navigation',
      components() {
        return [
          component('GlobalHeader'),
          component('Tab'),
          component('TabPanel')
        ];
      }
    },
    {
      name: 'Typography',
      components() {
        return [
          component('Header')
        ];
      }
    }
  ],
  getComponentPathLine(componentPath) {
    const dir = path.dirname(componentPath);
    const name = dir.replace('src/components/', '');
    return `import ${name} from '@emsi-ui/lib/${name}';`;
  },
  resolver: require('react-docgen').resolver.findAllComponentDefinitions,
  updateWebpackConfig(webpackConfig) {
    const dir = path.resolve(__dirname, 'src');
    const styleguideCSS = path.resolve(__dirname, 'assets/css/styleguide.css');

    webpackConfig.entry.push(styleguideCSS);
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
          'style',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'postcss'
        ]
      },
      {
        test: /\.css$/,
        include: styleguideCSS,
        loader: 'style-loader!css-loader'
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
