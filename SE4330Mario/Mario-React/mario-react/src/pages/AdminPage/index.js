import { lazy } from 'react';
import { ADMIN_PATH as path } from '../../constants/route-paths';

export const AdminPageRoute = {
  path,
  component: lazy(() => import(/* webpackChunkName: 'ExecutionPage' */ './component')),
};

