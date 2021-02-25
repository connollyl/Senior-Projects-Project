import React from 'react';
import { storiesOf } from '@storybook/react';
import SearchBar from '../index';

const stories = storiesOf('SearchBar', module);

const requiredProps = () => ({
});

stories.add('SearchBar with primary', () => (
  <SearchBar {...requiredProps()} />
));
