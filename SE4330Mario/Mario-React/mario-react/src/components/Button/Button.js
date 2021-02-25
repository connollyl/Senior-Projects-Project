// @flow
import React from 'react';
import cn from 'classnames';
import { Button as MaterialButton } from '@material-ui/core';
import { ButtonColor, ButtonSize, ButtonVariant } from '../../config/prop-types';

/**
 * The purpose of this component is to act as a generic
 * button
 * Typical uses are whenever there is a need for a customer to select something
 * or cause a single call to action
 * @param classes: css classes passed into html component
 * @param className: additional classes for the html component
 * @param color: color of the button
 * @param disabled: rather or not the button is disabled
 * @param variant: different variants of the button
 * @param label: text displayed on the button
 * @param size: size of the button
 * @param onClick: function passed as the event handler of the click event of the button
 */
export type Props = {
  classes: any,
  className: string,
  color: ButtonColor,
  disabled: boolean,
  label: string,
  size: ButtonSize,
  variant: ButtonVariant,
  onClick: (any) => {},
};

const Button = (props: Props) => {
  const {
    classes,
    className,
    color,
    disabled,
    variant,
    label,
    size,
    onClick,
    ...other
  } = props;
  return (
    <MaterialButton
      className={cn(classes.root, className, classes[color], classes[size], classes[variant])}
      type="button"
      disabled={disabled}
      onClick={onClick}
      {...other}
    >
      {label}
    </MaterialButton>
  );
};

Button.defaultProps = {
  color: 'primary',
  disabled: false,
  label: '',
  variant: '',
};

export { Button };
