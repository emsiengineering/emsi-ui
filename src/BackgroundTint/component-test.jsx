import React from 'react';
import { shallow } from 'enzyme';
import BackgroundTint from './component';

describe('<BackgroundTint /> Component', function() {
  beforeEach(function() {
    this.component = shallow(<BackgroundTint />);
  });
  it('renders', function() {
    expect(this.component).to.exist;
  });
});
