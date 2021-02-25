import React from 'react';
import { storiesOf } from '@storybook/react';
import BottomNavBar from '../index';

const stories = storiesOf('Bottom Nav Bar', module);

const requiredProps = () => ({
  color: 'Blue',
  prevDisabled: false,
  nextDisabled: false,
});

stories.add('Appbar with primary', () => (
  <BottomNavBar {...requiredProps()} />
));
