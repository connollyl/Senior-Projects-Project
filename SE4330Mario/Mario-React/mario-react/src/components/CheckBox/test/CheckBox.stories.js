import React from 'react';
import { storiesOf } from '@storybook/react';
import CheckBox from '../index';

const stories = storiesOf('CheckBox', module);

const requiredProps = () => ({
  color: 'primary',
  label: 'email',
  checked: false,
  value: 'test',
});

stories.add('CheckBox', () => (
  <CheckBox {...requiredProps()} />
));

stories.add('CheckBox checked', () => (
  <CheckBox
    {...requiredProps()}
    checked
  />
));
