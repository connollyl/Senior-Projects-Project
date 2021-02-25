// @flow
import React from 'react';
import { TextField } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import { GenralColor, VarientType } from '../../config/prop-types';

/**
 * The purpose of this component is to act as a generic
 * text field.
 * Typical uses are whenever there is a need for a customer input
 * @param color: color of the text
 * @param defaultValue: the default value of the text field
 * @param multiline: bool to decide if the text field uses multiple lines
 * @param placeholder: placeholder text in the text field
 * @param variant: different variants of the button
 * @param label: text displayed in and above the text field
 */

type Props = {
    color: GenralColor,
    label: any,
    multiline: Boolean,
    placeholder: string,
    variant: VarientType,
    value: any,
    classes: any,
    id: any,
    name: any,
    onChange: () => {},
};

const Input = (props: Props) => {
  const {
    color,
    label,
    multiline,
    placeholder,
    variant,
    value,
    onChange,
    id,
    name,
    classes,
  } = props;
  return (
    <FormControl className={classes.root}>
      <TextField
        className={classes.root}
        color={color}
        label={label}
        fullWidth
        value={value || ''}
        multiline={multiline}
        placeholder={placeholder}
        onChange={onChange}
        variant={variant}
        id={id}
        name={name}
      />
    </FormControl>
  );
};

export { Input };

