import React from 'react';
import { storiesOf } from '@storybook/react';
import SelectableTable from '../index';

const stories = storiesOf('SelectableTable', module);

const requiredProps = () => ({
  rows: [
    {
      Artifact: 'One',
      name: 'one',
    },
    {
      Artifact: 'Two',
      name: 'two',
    },
  ],
});

stories.add('Selectable Table', () => (
  <SelectableTable {...requiredProps()} />
));

