// @flow
import { compose } from 'redux';
import { connect } from 'react-redux';
import { memo } from 'react';
import injectSheet from 'react-jss';
import { mapStateToDispatch, mapStateToProps } from '../../../../containers/PageWrapper/PageWrapper';
import { styles } from './mapSection.styles';

const enhance = compose(
  memo,
  injectSheet(styles),
  connect(mapStateToProps, mapStateToDispatch),
);

export { enhance };
