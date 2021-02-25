// @flow
import { compose } from 'redux';
import { connect } from 'react-redux';
import { memo } from 'react';
import { PageWrapper, mapStateToDispatch, mapStateToProps } from '../../../containers/PageWrapper/PageWrapper';
import { LoginWrapper } from '../wrapper/LoginPageWrapper';
import { PageContainer } from '../../../containers/PageContainer/PageContainer';

const enhance = compose(
  memo,
  connect(mapStateToProps, mapStateToDispatch),
  PageWrapper,
  LoginWrapper,
  PageContainer(1),
);

export { enhance };
