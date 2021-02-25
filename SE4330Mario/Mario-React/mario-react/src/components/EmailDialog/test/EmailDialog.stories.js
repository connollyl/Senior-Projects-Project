import React from 'react';
import { storiesOf } from '@storybook/react';
import EmailDialog from '../index';

const stories = storiesOf('EmailDialog', module);

const requiredProps = () => ({

});

stories.add('Basic Email Dialog button', () => (
  <EmailDialog {...requiredProps()}/>
));
