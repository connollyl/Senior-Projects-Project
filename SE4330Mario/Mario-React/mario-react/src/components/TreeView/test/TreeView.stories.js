import React from 'react';
import { storiesOf } from '@storybook/react';
import Treeview from '../index';

const stories = storiesOf('TreeView', module);

const data = {
  value: 'Parent',
  nodes: [
    {
      value: 'Child - 1',
      nodes: [],
    },
    {
      value: 'Child - 3',
      nodes: [
        {
          value: 'Child - 4',
          nodes: [],
        },
      ],
    },
    {
      value: 'child - 7',
      nodes: [],
    },
  ],
};

const requiredProps = () => ({
  children: data,
  multiSelect: true,
});

stories.add('TreeView', () => (
  <Treeview {...requiredProps()} />
));
