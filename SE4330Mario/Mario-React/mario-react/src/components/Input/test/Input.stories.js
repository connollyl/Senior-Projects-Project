import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from '../index';

const stories = storiesOf('Input', module);

stories.add('Standard Input', () => (
  <Input
    color="primary"
    label="This is a Input Box"
    multiline={false}
    placeholder="AAAAAAHHHHHHH"
    variant="standard"
  />
));

stories.add('Oulined Input', () => (
  <Input
    color="primary"
    label="This is a Input Box"
    multiline={false}
    placeholder="AAAAAAHHHHHHH"
    variant="outlined"
  />
));

stories.add('Filled Input', () => (
  <Input
    color="primary"
    label="This is a Input Box"
    multiline={false}
    placeholder="AAAAAAHHHHHHH"
    variant="filled"
  />
));
