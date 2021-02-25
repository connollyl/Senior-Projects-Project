import React from 'react';
import { storiesOf } from '@storybook/react';
import IconButton from '../index';

const stories = storiesOf('IconButton', module);

const requiredProps = () => ({
  label: 'NEXT',
  color: 'primary',
  icon: 'sports_football',
  size: 'large',
  variant: 'outline',
});

stories.add('Icon Button with primary', () => (
  <IconButton {...requiredProps()} />
));

