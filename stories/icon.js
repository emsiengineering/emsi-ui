import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Icon from '../src/components/Icon';
import ThemeProvider from '../src/components/ThemeProvider/component';
import theme from '../src/theme';

storiesOf('Icon', module)
  .add('search', () => (
		<Icon component='IoAndroidSearch' style={{ fontSize: '4rem' }}/>
  )).add('globe', () => (
    <Icon component='IoAndroidGlobe' style={{ fontSize: '4rem' }}/>
  ));
