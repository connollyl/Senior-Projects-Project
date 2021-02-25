// @flow
import { compose } from 'redux';
import { connect } from 'react-redux';
import { memo } from 'react';
import injectSheet from 'react-jss';
import { styles } from './LandingPage.styles';
import { PageWrapper, mapStateToDispatch, mapStateToProps } from '../../../containers/PageWrapper/PageWrapper';
import { LandingWrapper } from '../wrapper/LandingPageWrapper';
import { PageContainer } from '../../../containers/PageContainer/PageContainer';

const enhance = compose(
  memo,
  connect(mapStateToProps, mapStateToDispatch),
  PageWrapper,
  LandingWrapper,
  PageContainer(1),
  injectSheet(styles),
);

export { enhance };
