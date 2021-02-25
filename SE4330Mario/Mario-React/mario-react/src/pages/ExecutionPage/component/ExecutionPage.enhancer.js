// @flow
import { compose } from 'redux';
import { connect } from 'react-redux';
import { memo } from 'react';
import injectSheet from 'react-jss';
import { styles } from './ExecutionPage.styles';
import { PageWrapper, mapStateToDispatch, mapStateToProps } from '../../../containers/PageWrapper/PageWrapper';
import { ExecutionWrapper } from '../wrapper/ExecutionPageWrapper';
import { PageContainer } from '../../../containers/PageContainer/PageContainer';

const enhance = compose(
  memo,
  connect(mapStateToProps, mapStateToDispatch),
  PageWrapper,
  ExecutionWrapper,
  PageContainer(1),
  injectSheet(styles),
);

export { enhance };
