import React from 'react';
import { storiesOf } from '@storybook/react';
import Piechart from '../index';

const stories = storiesOf('Piechart', module);

const requiredProps = () => ({
  width: 750,
  height: 230,
  legendHeight: 36,
  data: [
    {
      name: 'Group A',
      value: 400,
    },
    {
      name: 'Group B',
      value: 300,
    },
    {
      name: 'Group C',
      value: 300,
    },
    {
      name: 'Group D',
      value: 200,
    },
    {
      name: 'Group E',
      value: 278,
    },
    {
      name: 'Group F',
      value: 189,
    },
  ],
});

stories.add('PieChart test', () => (
  <Piechart {...requiredProps()} />
));
