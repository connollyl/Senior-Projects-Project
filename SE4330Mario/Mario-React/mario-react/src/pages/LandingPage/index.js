import { lazy } from 'react';
import { DEFAULT_PATH as path } from '../../constants/route-paths';

export const LandingPageRoute = {
  path,
  component: lazy(() => import(/* webpackChunkName: 'LandingPage' */ './component')),
};

