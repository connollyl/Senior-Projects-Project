/* eslint-disable no-fallthrough */
/* eslint-disable no-unused-vars */
import reduceReducers from 'reduce-reducers';
import { PURGE } from 'redux-persist';
import { cloneDeep } from 'lodash';
import { oAuthReducer } from './reducers/get-oauth-reducer';
import { initialReducer } from './reducers/initial-reducer';
import { getDevViewDataReducer } from './reducers/get-dev-view-data-reducer';
import { initialState } from './initialState';
import { queueBuildReducer } from './reducers/post-queue-build-reducer';
import { loadingReducer } from './reducers/loading-reducer';
import { getArtifactsReducer } from './reducers/get-artifacts-reducer';
import { getTestViewDataReducer } from './reducers/get-test-view-data-reducer';
import { getTreeViewDataReducer } from './reducers/get-tree-view-reducer';
import { getProjectsReducer } from './reducers/get-projects-reducer';
import { getReposReducer } from './reducers/get-repos-reducer';
import { getBuildsInfoReducer } from './reducers/get-builds-info-reducer';
import { postAdminViewReducer } from './reducers/post-admin-view-reducer';
import { mapAdminReducer } from './reducers/map-admin-view-reducer';
import { patchAdminViewReducer } from './reducers/patch-admin-view';
import { getAdminViewReducer } from './reducers/get-admin-view-reducer';

export const sharedReducer = (currentState = initialState, action) => {
  const state = cloneDeep(currentState);
  switch (action.type) {
    case PURGE: {
      return initialState;
    }
    default:
      return currentState;
  }
};
export const reducer = reduceReducers(
  initialState,
  oAuthReducer,
  getDevViewDataReducer,
  queueBuildReducer,
  initialReducer,
  loadingReducer,
  getArtifactsReducer,
  getBuildsInfoReducer,
  getTestViewDataReducer,
  getTreeViewDataReducer,
  getProjectsReducer,
  getReposReducer,
  getAdminViewReducer,
  postAdminViewReducer,
  mapAdminReducer,
  patchAdminViewReducer,
);
