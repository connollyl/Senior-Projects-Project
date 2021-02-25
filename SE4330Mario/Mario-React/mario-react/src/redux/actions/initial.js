/* jslint es6 */
import { getDevViewDataAction } from './get-dev-view-data';
import { getOAuthDataAction } from './get-oauth';
import { loadingAction } from './loading';
import { getReposAction } from './get-repos';
import { getProjectsAction } from './get-projects';

export const INITIAL_SUCCESS = 'INITIAL_SUCCESS';
export const INITIAL_FAILURE = 'INITIAL_FAILURE';

export const initializeApp = () => ({
  type: INITIAL_SUCCESS,
  payload: { },
});

export const setError = error => ({
  type: INITIAL_FAILURE,
  payload: { error },
});

export const intialAppLoadAction = (queryString) => {
  return async (dispatch) => {
    try {
      dispatch(loadingAction(true));
      const oauth = await dispatch(getOAuthDataAction(queryString));
      const { data: oauthData } = oauth;
      const accessToken = oauthData.access_token;
      const projectResponse = await dispatch(getProjectsAction(accessToken));
      const { data: { Projects } } = projectResponse;
      const reposResponse = await dispatch(getReposAction(accessToken, Projects[0]));
      const { data: { repos } } = reposResponse;
      dispatch(getDevViewDataAction(accessToken, Projects[0], repos[0]));
      dispatch(loadingAction(false));
    } catch (err) {
      dispatch(loadingAction(false));
      dispatch(setError(err));
      throw err;
    }
  };
};
