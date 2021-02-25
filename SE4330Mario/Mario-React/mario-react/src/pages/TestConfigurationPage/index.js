import { lazy } from 'react';
import { TEST_CONFIGURATION_PATH as path } from '../../constants/route-paths';

export const TestConfigurationPageRoute = {
  path,
  component: lazy(() => import(/* webpackChunkName: 'TestingConfigurationPage' */ '../LandingPage/component')),
};

