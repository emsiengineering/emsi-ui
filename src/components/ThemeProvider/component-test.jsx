import React from 'react';
import { mount } from 'enzyme';
import ThemeProvider from './component';
import theme from '../../styles/theme';

describe('<ThemeProvider /> Component', function() {
  beforeEach(function() {
    this.component = mount(<ThemeProvider theme={theme}><div>test</div></ThemeProvider>);
  });
  it('renders', function() {
    expect(this.component).to.exist;
  });
});
