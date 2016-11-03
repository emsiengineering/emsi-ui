import '../assets/css/body.css';

import { configure } from '@kadira/storybook';

function loadStories() {
  require('../stories/grid');
  require('../stories/text');
  require('../stories/button');
  require('../stories/navigation');
  require('../stories/checkbox');
  require('../stories/icon');
  require('../stories/label');
  require('../stories/card');
  require('../stories/alert');
  require('../stories/modal');
  require('../stories/input');
  require('../stories/textarea');
  require('../stories/content-wrap')
  // require as many stories as you need.
}

configure(loadStories, module);
