import React from 'react';
import { shallow } from 'enzyme';

import Alert from './component';

describe('<Alert /> Component', function() {
  beforeEach(function() {
    this.component = shallow(<Alert message='error' title='error'/>);
  });
  it('renders', function() {
    expect(this.component).to.exist;
  });
});
