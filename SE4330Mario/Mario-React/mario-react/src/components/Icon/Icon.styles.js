import { createStyles } from '@material-ui/core';
import { theme } from '../../config/theme';

const styles = () => createStyles({
  primary: {
    color: theme.background.color.dark,
  },
  secondary: {
    color: theme.background.color.red,
  },
  tertiary: {
    color: theme.background.color.light,
  },
  small: {
    width: '1.0rem',
    height: '1.0rem',
  },
  medium: {
    width: '1.5rem',
    height: '1.5rem',
  },
  large: {
    width: '2.0rem',
    height: '2.0rem',
  },
});

export { styles };
