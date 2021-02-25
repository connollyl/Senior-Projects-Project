// @flow
import { compose } from 'redux';
import { memo } from 'react';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';
import { styles } from './LandingPageSub.styles';
import { mapStateToDispatch, mapStateToProps } from '../../../containers/PageWrapper/PageWrapper';

const enhance = compose(
  memo,
  injectSheet(styles),
  connect(mapStateToProps, mapStateToDispatch),
);

export { enhance };
