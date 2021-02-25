import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '@material-ui/core/Button';
import Appbar from '../index';

const stories = storiesOf('Appbar', module);

const requiredProps = () => ({
  color: 'Blue',
});

stories.add('Appbar with primary', () => (
  <Appbar {...requiredProps()}>
    <Button>Help</Button>
    <Button>Reset</Button>
    <Button>Cancel</Button>
  </Appbar>
));
