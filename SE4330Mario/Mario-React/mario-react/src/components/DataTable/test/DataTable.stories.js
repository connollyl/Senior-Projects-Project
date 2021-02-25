import React from 'react';
import { storiesOf } from '@storybook/react';
import DataTable from '../index';

const stories = storiesOf('DataTable', module);

const requiredProps = () => ({

});

stories.add('Basic DataTable', () => (
  <DataTable {...requiredProps()}/>
));
