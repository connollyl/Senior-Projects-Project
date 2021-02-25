import React from 'react';
import { storiesOf } from '@storybook/react';
import StepperHeader from '../index';

const stories = storiesOf('Stepper', module);

const requiredProps = () => ({
  steps: ['Test Configuration', 'Drive Type', 'Features', 'Artifacts', 'Review and Comfirm'],
});

stories.add('Stepper', () => (
  <StepperHeader {...requiredProps()} />
));
