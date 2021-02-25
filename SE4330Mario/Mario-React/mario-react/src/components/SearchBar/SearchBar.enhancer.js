import { withStyles } from '@material-ui/core/styles';
import { memo } from 'react';
import { compose } from 'redux';
import { useStyles } from './SearchBar.styles';

const enhance = compose(
  memo,
  withStyles(useStyles),
);

export { enhance };
