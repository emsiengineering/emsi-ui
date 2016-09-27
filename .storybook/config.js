import { configure } from '@kadira/storybook';
import '../assets/css/body.css';

function loadStories() {
  require('../stories/grid');
  require('../stories/header');
  require('../stories/button');
  require('../stories/select');
  require('../stories/tabs');
  require('../stories/checkbox');
  require('../stories/pillbox');
  require('../stories/icon');
  require('../stories/label');
  require('../stories/card');
  require('../stories/globalheader');
  require('../stories/alert');
  require('../stories/modal');
  require('../stories/input');
  require('../stories/textarea');
  // require as many stories as you need.
}

configure(loadStories, module);
