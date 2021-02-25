import React from 'react';
import { storiesOf } from '@storybook/react';
import Icon from '../index';

const stories = storiesOf('Icon', module);

const requiredProps = () => ({
  color: 'primary',
  size: 'small',
  icon: 'restore_from_trash',
});

stories.add('Trash with primary', () => (
  <Icon {...requiredProps()}> </Icon>
));

stories.add('Icon with secondary', () => (
  <Icon
    {...requiredProps()}
    color="secondary"
  />
));

stories.add('Icon with secondary', () => (
  <Icon
    {...requiredProps()}
    icon="sports_football"
  />
));
