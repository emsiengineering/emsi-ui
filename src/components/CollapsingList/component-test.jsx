import React from 'react';
import { shallow } from 'enzyme';
import CollapsingList from './component';

describe('<CollapsingList /> Component', function() {
  beforeEach(function() {
    this.component = shallow(<CollapsingList />);
  });
  it('renders', function() {
    expect(this.component).to.exist;
  });
});
