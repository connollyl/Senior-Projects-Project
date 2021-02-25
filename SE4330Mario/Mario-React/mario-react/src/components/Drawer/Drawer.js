import React from 'react';
import cn from 'classnames';
import MaterialDrawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import { Icon as MaterialUIIcon } from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import { PageListDropDownItems } from '../../constants/drop-down-options';

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
  open: Boolean,
  handleDrawerClose: Boolean,
};

// Icons can be found https://material.io/resources/icons/?style=baseline

const Drawer = (props: Props) => {
  const {
    classes,
    open,
    handleDrawerClose,
  } = props;
  return (
    <div className={cn(classes.root)}>
      <MaterialDrawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {
            PageListDropDownItems.map((value) => {
              return (
                <ListItem button key={value.display} onClick={() => { window.location.href = `/#${value.path}`; }}>
                  <MaterialUIIcon>{value.icon}</MaterialUIIcon>
                  <ListItemText primary={value.display} className={classes.text} />
                </ListItem>
              );
            })
        }
        </List>
      </MaterialDrawer>
    </div>
  );
};
export { Drawer };
