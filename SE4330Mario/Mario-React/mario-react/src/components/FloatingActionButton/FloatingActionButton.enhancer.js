import { memo } from 'react';
import { compose } from 'redux';

const enhance = compose(
  memo,
);

export { enhance };
