import { createStyles } from '@material-ui/core';

const styles = theme => createStyles({
  root: {
    fontSize: '1rem',
    fontFamily: theme.typography.primaryFont,
    fontWeight: 600,
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.6875rem',
    },
  },
  primary: {
    color: theme.palette.copy.main,
  },
  left: {
    textAlign: 'left',
  },
  center: {
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
  },
});

export { styles };
