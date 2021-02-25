import React from 'react';
import { storiesOf } from '@storybook/react';
import FloatingActionButton from '../index';

const stories = storiesOf('FloatingActionButton', module);

const requiredProps = () => ({
  color: 'default',
  size: 'large',
  variant: 'round',
});

stories.add('FloatingActionButton with default', () => (
  <FloatingActionButton {...requiredProps()} >+</FloatingActionButton>
));

stories.add('FloatingActionButton Medium', () => (
  <FloatingActionButton
    {...requiredProps()}
    size="medium"
  >+
  </FloatingActionButton>
));

stories.add('FloatingActionButton disabled', () => (
  <FloatingActionButton
    {...requiredProps()}
    disabled
  >+
  </FloatingActionButton>
));

stories.add('FloatingActionButton primary with small', () => (
  <FloatingActionButton
    {...requiredProps()}
    color="primary"
    variant="round"
  >+
  </FloatingActionButton>
));

stories.add('FloatingActionButton secondary with extended', () => (
  <FloatingActionButton
    {...requiredProps()}
    color="secondary"
    variant="extended"
  >+
  </FloatingActionButton>
));

stories.add('FloatingActionButton inherit', () => (
  <FloatingActionButton
    color="inherit"
    size="large"
  >+
  </FloatingActionButton>
));

stories.add('FloatingActionButton small', () => (
  <FloatingActionButton
    size="small"
  >+
  </FloatingActionButton>
));
