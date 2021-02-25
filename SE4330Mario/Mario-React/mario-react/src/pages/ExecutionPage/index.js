import { lazy } from 'react';
import { EXECUTION_PATH as path } from '../../constants/route-paths';

export const ExecutionPageRoute = {
  path,
  component: lazy(() => import(/* webpackChunkName: 'ExecutionPage' */ './component')),
};

