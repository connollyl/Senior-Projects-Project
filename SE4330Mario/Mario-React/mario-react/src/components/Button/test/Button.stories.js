import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../index';

const stories = storiesOf('Button', module);

const requiredProps = () => ({
  label: 'NEXT',
  color: 'primary',
  size: 'large',
  variant: 'outline',
});

stories.add('Button with primary', () => (
  <Button {...requiredProps()} />
));

stories.add('Button Medium', () => (
  <Button
    {...requiredProps()}
    size="medium"
  />
));

stories.add('Button disabled', () => (
  <Button
    {...requiredProps()}
    disabled
  />
));

stories.add('Button secondary with outline', () => (
  <Button
    {...requiredProps()}
    label="BACK"
    color="secondary"
    variant="outline"
  />
));

stories.add('Button secondary with contained', () => (
  <Button
    {...requiredProps()}
    label="BACK"
    color="secondary"
    variant="contained"
  />
));

stories.add('Button inherit', () => (
  <Button
    label="BACK"
    color="inherit"
    size="large"
  />
));
