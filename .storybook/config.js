import { configure } from '@kadira/storybook';

import body from '../assets/jss/body';
import fonts from '../assets/jss/fonts';
import jss from '../src/jss';
import 'reset-css/reset.css';

jss.createStyleSheet(fonts, { named: false }).attach();
jss.createStyleSheet(body, { named: false }).attach();

function loadStories() {
  require('../stories/grid');
  require('../stories/header');
  require('../stories/button');
  require('../stories/select');
  require('../stories/tabs');
	require('../stories/checkbox');
	require('../stories/pillbox');
  // require as many stories as you need.
}

configure(loadStories, module);
