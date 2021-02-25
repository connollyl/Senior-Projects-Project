/* eslint-disable no-unused-vars */
import React from 'react';
import { List as MaterialUIList } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import cn from 'classnames';
import Title from '../Title';

/**
 * The purpose of this component is to act a generic list with selectable
 * items
 * Typical uses are whenever there is a need to display multiple
 * items where one to many can be selected
 * @param classes: css classes passed into html component
 * @param data: data to be displayed in list
 * @param title: title of the list
 * @param selectedIndex: number of the index that is selected
 * @param onClick: function passed as the event handler of the click event of the button
 */

type Props = {
  classes: any,
  data: Array,
  title: String,
  selectedIndex: Number,
  onClick: (index) => {},
};

const SelectableList = (props: Props) => {
  const {
    classes,
    data,
    onClick,
    selectedIndex,
    title,
  } = props;
  return (
    <div className={cn(classes.root)}>
      { title ? <Title title={title} size="medium" /> : null}
      <MaterialUIList component="nav" aria-label="main mailbox folders">
        <div className={classes.border}>
          { data && data.map((value, index) => {
            return (
              <ListItem
                button
                selected={selectedIndex === index}
                onClick={event => onClick(index)}
                key={value}
              >
                <ListItemText primary={value} />
              </ListItem>
            );
          })
          }
        </div>
      </MaterialUIList>
    </div>
  );
};

export { SelectableList };
