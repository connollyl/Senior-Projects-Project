import React, { Fragment } from 'react';
import cn from 'classnames';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import uuid from 'uuid/v4';

/**
 * The purpose of this component is to act a generic drop down list
 * Typical uses are whenever there is a need to display multiple
 * items where one must be picked
 * @param classes: css classes passed into html component
 * @param size: size of the component
 * @param items: list of items to be held in the drop down list
 * @param name: name of the component
 */

type Props = {
    classes: any,
    size: IconSize,
    things: any,
    name: any,
    value: any,
    onChange: any,
};

const SelectBox = (props: Props) => {
  const {
    classes,
    size,
    things,
    name,
    value,
    onChange,
  } = props;

  return (
    <Fragment>
      <FormControl className={cn(classes.root, classes[size], classes[things])}>
        <InputLabel> {name} </InputLabel>
        <Select value={(value) || ''} onChange={onChange}>
          { things.map((item) => {
            return (
              <MenuItem value={item} key={uuid()}> {item} </MenuItem>
            );
          })
        }
        </Select>
      </FormControl>
    </Fragment>
  );
};

SelectBox.defaultProps = {
  size: 'primary',
  things: [],
  name: 'Select box',
};

export { SelectBox };
