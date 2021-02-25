import React from 'react';
import { storiesOf } from '@storybook/react';
import Tooltip from '../index';
import FloatingActionButton from '../../FloatingActionButton';

const stories = storiesOf('Tooltip', module);

stories.add('Tooltip button', () => (
  <Tooltip title="This is a home button, sorry for the confusion.">
    <FloatingActionButton
      color="default"
      size="medium"
      variant="round"
    >
      +
    </FloatingActionButton>
  </Tooltip>
));
