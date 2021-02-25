// @flow
import React from 'react';
import Box from '@material-ui/core/Box';
import cn from 'classnames';

/**
 * The purpose of this component is to act as a generic
 * Title
 * Typical uses are whenever there is a need for a customer to select something
 * or cause a single call to action
 * @param classes: css classes passed into html component
 * @param title: string name of the title
 * @param size: font size
 */

export type Props = {
  classes: any,
  title: string,
  size: String,
};

const Title = (props: Props) => {
  const {
    classes,
    title,
    size,
  } = props;

  return (
    <div className={cn(classes[size])}>
      <Box fontWeight="fontWeightBold" m={1}>
        { title }
      </Box>
    </div>
  );
};

export { Title };
