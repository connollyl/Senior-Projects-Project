// @flow
import React from 'react';
import cn from 'classnames';
import { Button as MaterialButton } from '@material-ui/core';
import { ButtonColor, ButtonSize, ButtonVariant } from '../../config/prop-types';
import Icon from '../Icon';

/**
 * The purpose of this component is to act as a button that has an icon on it
 * @param classes: css classes passed into html component
 * @param className: additional classes for the html component
 * @param color: color of the button
 * @param disabled: rather or not the button is disabled
 * @param variant: different variants of the button
 * @param icon: icon to display on button
 * @param size: size of the button
 * @param onClick: function passed as the event handler of the click event of the button
 */
export type Props = {
  classes: any,
  className: string,
  color: ButtonColor,
  disabled: boolean,
  icon: string,
  size: ButtonSize,
  variant: ButtonVariant,
  onClick: (any) => {},
};

const IconButton = (props: Props) => {
  const {
    classes,
    className,
    color,
    disabled,
    variant,
    icon,
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
      <Icon icon={icon} color="tertiary" />
    </MaterialButton>
  );
};

IconButton.defaultProps = {
  color: 'primary',
  disabled: false,
  variant: '',
};

export { IconButton };
