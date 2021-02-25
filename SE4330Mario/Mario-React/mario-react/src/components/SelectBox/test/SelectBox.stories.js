import React from 'react';
import { storiesOf } from '@storybook/react';
import SelectBox from '../index';

const stories = storiesOf('SelectBox', module);

const requiredProps = () => ({
  things: [
    { title: 'Whatever1' },
    { title: 'Whatever2' },
    { title: 'Whatever3' }],
});

stories.add('Basic Select box', () => (
  <SelectBox {...requiredProps()}/>
));
