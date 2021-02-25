import React from 'react';
import { storiesOf } from '@storybook/react';
import NumberPicker from '../index';

const stories = storiesOf('NumberPicker', module);

const requiredProps = () => ({
  size: 'primary',
});

stories.add('Basic Number-picker ', () => (
  <NumberPicker {...requiredProps()} />
));
