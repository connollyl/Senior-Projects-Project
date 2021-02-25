import React from 'react';
import { storiesOf } from '@storybook/react';
import Title from '../index';

const stories = storiesOf('Title', module);

const requiredPropsSmall = () => ({
  title: 'Developer View just to show long the title can go go go go',

});

const requiredPropsMedium = () => ({
  title: 'Developer View just to show long the title can go go go go',
});

const requiredPropsLarge = () => ({
  title: 'Developer View just to show long the title can go go go go',
});

stories.add('Title with small font', () => (
  <Title
    {...requiredPropsSmall()}
    size="small"
  />
));

stories.add('Title with medium font', () => (
  <Title
    {...requiredPropsMedium()}
    size="medium"
  />
));

stories.add('Title with large font', () => (
  <Title
    {...requiredPropsLarge()}
    size="large"
  />
));
