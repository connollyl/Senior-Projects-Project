import React from 'react';
import { storiesOf } from '@storybook/react';
import SearchableList from '../index';

const stories = storiesOf('SearchableList', module);

const exampleList = [
  { title: 'C++' },
  { title: 'Python' },
  { title: 'Javascript' },
  { title: 'Swift' },
  { title: 'Java' },
  { title: 'PHP' },
];

const requiredProps = () => ({
  list: exampleList,
  label: 'Language',
});

stories.add('OutlinedList', () => (
  <SearchableList
    {...requiredProps()}
    variant="outlined"
  />
));

stories.add('FilledList', () => (
  <SearchableList
    {...requiredProps()}
    variant="filled"
  />
));

stories.add('StandardList', () => (
  <SearchableList
    {...requiredProps()}
    variant="standard"
  />
));

stories.add('Disabled list', () => (
  <SearchableList
    {...requiredProps()}
    disabled
    variant="outlined"
  />

));

