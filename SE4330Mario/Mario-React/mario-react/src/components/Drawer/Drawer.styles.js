import { createStyles } from '@material-ui/core';

const drawerWidth = 240;
const styles = createStyles({
  root: {

  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '64px',
  },
  text: {
    marginLeft: '15px',
  },
});

export { styles };
