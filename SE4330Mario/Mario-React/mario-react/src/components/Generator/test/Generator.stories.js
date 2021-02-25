import React from 'react';
import { storiesOf } from '@storybook/react';
import Generator from '../index';
import mock from '../mock/mock.json';

const stories = storiesOf('Generator', module);

const requiredProps = () => ({
  componentJson: mock,
});

stories.add('Generator with default', () => (
  <Generator {...requiredProps()} />
));
