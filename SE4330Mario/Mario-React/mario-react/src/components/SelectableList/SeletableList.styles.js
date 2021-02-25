import { theme } from '../../config/theme';

const styles = () => ({
  root: {
    width: '100%',
    marginRight: '0.625rem',
    // marginTop: theme.spacing(3),
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  border: {
    borderWidth: '1px',
    borderStyle: 'solid',
  },
});

export { styles };
