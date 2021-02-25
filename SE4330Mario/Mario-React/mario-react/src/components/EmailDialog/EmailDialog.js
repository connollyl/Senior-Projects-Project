import React, { useState } from 'react';
import cn from 'classnames';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

/**
 * Enables the user to enter emails into a pop up window
 * @param classes: css classes injected into the component
 * @param emails: Array to append emails to
 * @param open: If true the component is displayed, otherwise it is hidden
 * @param handleClose: Event fired whenever the popup closes
 * @param handleAddItemClick: Event fired whenever the add item button is clicked
 * @param handleChange: Event fired whenever a new item is added
 */
type Props = {
    classes: any,
    emails: Array<Object>,
    open: Boolean,
    handleClose: () => {},
    handleAddItemClick: () => {},
    handleChange: () => {},
};

const EmailDialog = (props: Props) => {
  const {
    classes,
    emails,
    open,
    handleClose,
    handleAddItemClick,
    handleChange,
  } = props;

  const [emailsDisplayed, setEmailsDisplayed] = useState(0);
  const addItemClick = (event) => {
    handleAddItemClick(event);
    // needed to force update of component
    setEmailsDisplayed(emailsDisplayed + 1);
    document.getElementById('emailText').value = '';
  };
  return (
    <div className={cn(classes.root, classes[emails])}>
      <Dialog open={open} onClose={handleClose} fullWidth aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">CC Email</DialogTitle>
        <List>
          {emails.map(email => (
            <ListItem button key={email}>
              <ListItemText primary={email} />
            </ListItem>
          ))}
        </List>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="emailText"
            label="Email Address"
            type="email"
            fullWidth
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            close
          </Button>
          <Button onClick={addItemClick}>
           add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

EmailDialog.defaultProps = {
  emails: [],
};

export { EmailDialog };
