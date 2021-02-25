import React from 'react';
import { storiesOf } from '@storybook/react';
import SelectableList from '../index';

const stories = storiesOf('List', module);

const requiredProps = () => ({
  data: [
    'item1',
    'item2',
    'item3',
  ],
  onClick: () => {},
  title: 'Test',
  selectedIndex: 0,
});

stories.add('List', () => (
  <SelectableList {...requiredProps()} />
));

