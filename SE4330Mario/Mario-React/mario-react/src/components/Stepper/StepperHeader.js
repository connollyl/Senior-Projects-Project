import React, { useState } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';

/**
 * The purpose of this component is to act as a progess bar
 * Typical uses are whenever there is a need to display where the
 * user is in a program
 * @param classes: css classes passed into html component
 * @param steps: array of steps to be displayed
 */

type Props = {
  classes: any,
  steps: Array,
};
const StepperHeader = (props: Props) => {
  const {
    classes,
    steps,
  } = props;
  const [activeStep, setActiveStep] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [completed, setCompleted] = useState({});

  const handleStep = step => () => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepButton onClick={handleStep(index)} completed={completed[index]}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export { StepperHeader };
