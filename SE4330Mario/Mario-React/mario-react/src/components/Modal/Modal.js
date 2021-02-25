import React, { ReactNode } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

/**
 * Pop up to display info to customer
 * @param classes: Css classes injected into the component
 * @param children: children placed into the component
 * @param open: Rather or not the component is displayed
 * @param onClose: The event fired whenever the component is closed
 * @param title: Title placed on the top of the component
 * @param subText: Text displayed below the title
 */
export type Props = {
    classes: any,
    children: ReactNode,
    open: Boolean,
    onClose: () => {},
    title: string,
    subText: string,
};

const Modal = (props: Props) => {
  const {
    classes,
    children,
    open,
    onClose,
    title,
    subText,
  } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <div className={classes.root}>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {subText}
          </DialogContentText>
        </DialogContent>
        {children}
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export { Modal };

