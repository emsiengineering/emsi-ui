import React from 'react';
import { shallow } from 'enzyme';
import Button from './component';

describe('<Button /> Component', function() {
  beforeEach(function() {
    this.component = shallow(<Button component='div' />);
  });
  it('renders', function() {
    expect(this.component.find(Button)).to.exist;
  });
  it('renders as a custom component', function() {
    expect(this.component.find('div')).to.exist;
  });
});
