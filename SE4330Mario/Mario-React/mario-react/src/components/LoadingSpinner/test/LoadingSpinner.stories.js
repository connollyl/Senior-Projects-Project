import React from 'react';
import { storiesOf } from '@storybook/react';
import LoadingSpinner from '../index';

const stories = storiesOf('LoadingSpinner', module);

const requiredProps = () => ({
  hidden: false,
});
stories.add('Visibility', () => (
  <LoadingSpinner
    hidden={false}
  />
));

stories.add('Visibility', () => {
  // const visibility = boolean('Hidden', false, 'GROUP-A1');
  const visibility = true;
  return (
    <LoadingSpinner
      {...requiredProps()}
      hidden={visibility}
    />
  );
});
stories.add('Loading Message Change', () => (
  <LoadingSpinner
    loadingMsg="Please Wait While I Steal Your Credit Card Info"
    {...requiredProps()}
  />
));
