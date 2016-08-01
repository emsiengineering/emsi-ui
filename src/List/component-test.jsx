import React from 'react';
import { shallow } from 'enzyme';
import List from './component';

describe('<List /> Component', function() {
  beforeEach(function() {
    this.component = shallow(<List />);
  });
  it('renders', function() {
    expect(this.component).to.exist;
  });
});
