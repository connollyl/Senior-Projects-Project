import React from 'react';
import { storiesOf } from '@storybook/react';
import SectionSubtitle from '../index';

const stories = storiesOf('SectionSubtitle', module);
const text = `Take a look at your life.
Add additional stuff
to fit your unique lifestyle.`;

const requiredProps = () => ({
  subtitle: text,
});

stories.add('left aligned', () => (
  <SectionSubtitle
    {...requiredProps()}
    alignment="left"
  />
));

stories.add('center aligned', () => (
  <SectionSubtitle
    {...requiredProps()}
    alignment="center"
    variant="primary"
  />
));

stories.add('right aligned', () => (
  <SectionSubtitle
    {...requiredProps()}
    alignment="right"
    variant="secondary"
  />
));
