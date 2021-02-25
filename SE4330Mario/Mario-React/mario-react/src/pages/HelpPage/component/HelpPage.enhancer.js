// @flow
import { compose } from 'redux';
import { connect } from 'react-redux';
import { memo } from 'react';
import injectSheet from 'react-jss';
import { styles } from './HelpPage.styles';
import { PageWrapper, mapStateToDispatch, mapStateToProps } from '../../../containers/PageWrapper/PageWrapper';
import { HelpWrapper } from '../wrapper/HelpPageWrapper';
import { PageContainer } from '../../../containers/PageContainer/PageContainer';

const enhance = compose(
  memo,
  connect(mapStateToProps, mapStateToDispatch),
  PageWrapper,
  HelpWrapper,
  PageContainer(1),
  injectSheet(styles),
);

export { enhance };
