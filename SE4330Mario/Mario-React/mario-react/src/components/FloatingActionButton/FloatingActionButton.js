import React from 'react';
import { Fab } from '@material-ui/core';
import { ButtonColor, ButtonSize, ButtonVariant } from '../../config/prop-types';

/**
 * The purpose of this component is to act a generic button of a different
 * variant
 * Typical uses are whenever there is a need to use a button but a different
 * shape is needed
 * @param classes: css classes passed into html component
 * @param className: additional classes for the html component
 * @param color: color of the button
 * @param disabled: rather or not the button is disabled
 * @param variant: different variants of the button
 * @param size: size of the button
 * @param onClick: function passed as the event handler of the click event of the button
 */

export type Props = {
    classes: any,
    className: string,
    color: ButtonColor,
    disabled: Boolean,
    size: ButtonSize,
    variant: ButtonVariant,
    onClick: (any) => {},
}

const FloatingActionButton = (props: Props) => {
  const {
    classes,
    className,
    color,
    disabled,
    size,
    variant,
    onClick,
    ...other
  } = props;
  return (
    <Fab
      color={color}
      size={size}
      variant={variant}
      disabled={disabled}
      onClick={onClick}
      {...other}
    />
  );
};

FloatingActionButton.defaultProps = {
  color: 'primary',
  disabled: false,
  variant: '',
};

export { FloatingActionButton };
