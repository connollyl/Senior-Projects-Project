import React from 'react';
import cn from 'classnames';
import TextField from '@material-ui/core/TextField';
import uuid from 'uuid/v4';

/**
 * Used to prompt the user for a number
 * @param classes: css classes injected into the component
 * @param name: title of the component
 * @param size: size of the component
 * @param value: value of the component
 * @param onChange: event fired whenever the number changes
 */
export type Props = {
    classes: any,
    name: String,
    size: IconSize,
    value: any,
    onChange: any,
};

const NumberPicker = (props: Props) => {
  const {
    classes,
    name,
    size,
    value,
    onChange,
  } = props;
  return (
    <div className={cn(classes.root, classes[name], classes[size])}>
      <TextField
        id={uuid()}
        label={name}
        type="number"
        value={value}
        onChange={onChange}
        InputLabelProps={{
          shrink: true,
        }}
        fullWidth
        InputProps={{
          // Todo fix this later
          inputProps: { min: 0 },
        }}
      />
    </div>
  );
};

NumberPicker.defaultProps = {
  name: 'label',
  size: 'primary',
};

export { NumberPicker };

