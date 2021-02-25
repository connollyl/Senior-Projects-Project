import { lazy } from 'react';
import { LOGIN_PATH as path } from '../../constants/route-paths';

export const LoginPathRoute = {
  path,
  component: lazy(() => import(/* webpackChunkName: 'LoginPathRoute' */ './component')),
};

