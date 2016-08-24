import { configure } from '@kadira/storybook';

import body from '../assets/jss/body';
import fonts from '../assets/jss/fonts';
import jss from '../src/jss';

jss.createStyleSheet(fonts, { named: false }).attach();
jss.createStyleSheet(body, { named: false }).attach();

function loadStories() {
  require('../stories/header');
  require('../stories/button');
  // require as many stories as you need.
}

configure(loadStories, module);
