import { lazy } from 'react';
import { HELP_PATH as path } from '../../constants/route-paths';

export const HelpPageRoute = {
  path,
  component: lazy(() => import(/* webpackChunkName: 'HelpPagePath' */ './component')),
};

