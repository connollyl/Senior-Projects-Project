// @flow
import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

/**
 * The purpose of this component is to act as a generic selectable item
 * Typical uses are whenever there is a need to select a specific item from
 * a list of items
 * @param color: color of the component
 * @param label: string label to the component
 * @param value: returnable value of the component
 * @param checked: bool to determine if the component is checked
 */

type Props = {
  color: string,
  label: string,
  value: string,
  checked: boolean,
};

const CheckBox = (props: Props) => {
  const {
    label,
    checked,
    value,
    color,
    ...other
  } = props;
  return (
    <FormControlLabel
      control={(
        <Checkbox
          color={color}
          checked={checked}
          value={value}
          {...other}
        />
)}
      label={label}
    />
  );
};

export { CheckBox };
