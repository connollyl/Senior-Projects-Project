import { createStyles } from '@material-ui/core';
import { theme } from '../../config/theme';

const styles = () => createStyles({
  root: {
    flexGrow: 1,
    height: '64px',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
});

export { styles };
