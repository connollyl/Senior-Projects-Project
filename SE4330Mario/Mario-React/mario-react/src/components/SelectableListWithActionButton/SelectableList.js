/* eslint-disable no-unused-vars */
import React from 'react';
import { List as MaterialUIList } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Title from '../Title';

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
    <div className={classes.root}>
      <Title title={title} size="medium" />
      <MaterialUIList component="nav" aria-label="main mailbox folders">
        { data.map((value, index) => {
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
      </MaterialUIList>
    </div>
  );
};

export { SelectableList };
