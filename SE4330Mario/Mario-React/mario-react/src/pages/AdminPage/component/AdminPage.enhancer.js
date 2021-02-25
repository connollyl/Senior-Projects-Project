// @flow
import { compose } from 'redux';
import { connect } from 'react-redux';
import { memo } from 'react';
import injectSheet from 'react-jss';
import { styles } from './AdminPage.styles';
import { PageWrapper, mapStateToDispatch, mapStateToProps } from '../../../containers/PageWrapper/PageWrapper';
import { AdminWrapper } from '../wrapper/AdminPageWrapper';
import { PageContainer } from '../../../containers/PageContainer/PageContainer';

const enhance = compose(
  memo,
  connect(mapStateToProps, mapStateToDispatch),
  PageWrapper,
  AdminWrapper,
  PageContainer(1),
  injectSheet(styles),
);

export { enhance };
