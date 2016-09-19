require('stylelint-config-standard');

module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    'at-rule-empty-line-before': [ 'always', {
      except: [
        'blockless-after-same-name-blockless',
        'blockless-group'
      ],
      ignore: [
        'all-nested'
      ]
    }],
    'rule-nested-empty-line-before': [ 'always', {
      except: [
        'first-nested'
      ]
    }],
    'property-no-unknown': [ true, {
      ignoreProperties: ['composes']
    }]
  }
};
