import React from 'react';
import { shallow } from 'enzyme';
import Header from './component';

describe('<Header /> Component', function() {
  beforeEach(function() {
    this.component = shallow(<Header />);
  });
  it('renders', function() {
    expect(this.component).to.exist;
  });
});
