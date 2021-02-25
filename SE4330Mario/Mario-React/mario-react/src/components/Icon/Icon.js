import React from 'react';
import cn from 'classnames';
import { Icon as MaterialUIIcon } from '@material-ui/core';
import { IconColor, IconSize } from '../../config/prop-types';

/**
 * The purpose of this component is to act a generic picture icon
 * Typical uses are whenever there is a need to have a visual
 * @param classes: css classes passed into html component
 * @param color: color of the component
 * @param icon: string path to the icon image
 * @param size: size of the image
 */

type Props = {
    classes: any,
    color: IconColor,
    icon: string,
    size: IconSize,
};

// Icons can be found https://material.io/resources/icons/?style=baseline

const Icon = (props: Props) => {
  const {
    classes,
    icon,
    color,
    size,
  } = props;
  return (
    <div className={cn(classes.root, classes[color], classes[size])}>
      <MaterialUIIcon>{icon}</MaterialUIIcon>
    </div>
  );
};

Icon.defaultProps = {
  color: 'primary',
  size: 'medium',
};

export { Icon };
