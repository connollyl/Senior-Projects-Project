// @flow
import React from 'react';
import { Tooltip as MaterialUiTooltip } from '@material-ui/core';
import TooltipPlacementType from '../../config/prop-types';

/**
 * The purpose of this component is to give components a way of
 * describing what is is.
 * Typical uses are whenever there is a component that needs
 * described
 * @param children: component to recieve tooltip
 * @param title: text of the tooltip
 * @param placement: Placement of tooltip.
 */

export type Props = {
  children: any,
  title: any,
  placement: TooltipPlacementType,
};

const Tooltip = (props: Props) => {
  const {
    children,
    title,
    placement,
  } = props;

  return (
    <MaterialUiTooltip disableFocusListener title={title} placement={placement}>
      <span>
        { children }
      </span>
    </MaterialUiTooltip>
  );
};

export { Tooltip };
