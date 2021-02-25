import { withStyles } from '@material-ui/core/styles';
import { memo } from 'react';
import { compose } from 'redux';
import { styles } from './NumberPicker.styles';

const enhance = compose(
  memo,
  withStyles(styles),
);

export { enhance };
