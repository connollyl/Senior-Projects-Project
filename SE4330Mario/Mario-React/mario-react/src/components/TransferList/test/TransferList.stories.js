import React from 'react';
import { storiesOf } from '@storybook/react';
import TransferList from '../index';

const stories = storiesOf('TransferList', module);

const requiredProps = () => ({
  leftItems: ['item', 'item2'],
  rightItems: ['item3', 'item4', 1],
});

stories.add('TransferList', () => (
  <TransferList {...requiredProps()} />
));
