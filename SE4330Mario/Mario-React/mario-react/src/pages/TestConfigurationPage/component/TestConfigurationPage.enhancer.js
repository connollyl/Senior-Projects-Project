// @flow
import { compose } from 'redux';
import { memo } from 'react';
import injectSheet from 'react-jss';
import { styles } from './TestConfigurationPage.styles';
import { TestConfigurationWrapper } from '../wrapper/TestConfigurationWrapper';

const enhance = compose(
  memo,
  TestConfigurationWrapper,
  injectSheet(styles),
);

export { enhance };
