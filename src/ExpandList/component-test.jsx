import React from 'react';
import { shallow } from 'enzyme';
import SeeMore from './component';

describe('<SeeMore /> Component', function() {
  beforeEach(function() {
    this.component = shallow(<SeeMore />);
  });
  it('renders', function() {
    expect(this.component).to.exist;
  });
});
