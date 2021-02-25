import axios from 'axios';
import { getConfig } from '../../util/configUtil';

export const GET_REPOS_SUCCESS = 'GET_REPOS_SUCCESS';
export const GET_REPOS_FAILURE = 'GET_REPOS_FAILURE';
export const SET_SELECTED_REPO_SUCCESS = 'SET_SELECTED_REPO_SUCCESS';
export const SET_SELECTED_REPO_FAILURE = 'SET_SELECTED_REPO_FAILURE';

export const getReposSuccess = data => ({
  type: GET_REPOS_SUCCESS,
  payload: { data },
});

export const getReposFailure = error => ({
  type: GET_REPOS_FAILURE,
  payload: { error },
});

export const setSelectedRepoSuccess = data => ({
  type: SET_SELECTED_REPO_SUCCESS,
  payload: { data },
});

export const setSelectedRepoFailure = () => ({
  type: SET_SELECTED_REPO_FAILURE,
  payload: { error: 'No repo selected' },
});

export const setSelectedRepoAction = (selectedRepo) => {
  return async (dispatch) => {
    return selectedRepo
      ? dispatch(setSelectedRepoSuccess(selectedRepo))
      : dispatch(setSelectedRepoFailure());
  };
};

export const getReposAction = (accessToken, project) => {
  return async (dispatch) => {
    const config = getConfig();
    try {
      const response = await axios.get(config.reposApi.host, {
        headers: {
          azure: accessToken,
          organization: config.oauth.Organization,
          'Content-Type': 'application/json',
        },
        params: {
          project,
        },
      });
      const { data } = response;
      dispatch(getReposSuccess(data));
      return response;
    } catch (err) {
      dispatch(getReposFailure(err));
      throw err;
    }
  };
};
