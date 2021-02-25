import axios from 'axios';
import { getConfig } from '../../util/configUtil';
import { mapBuild } from '../mappers/last-run-api-mapper';

export const GET_DEV_VIEW_DATA_SUCCESS = 'GET_DEV_VIEW_DATA_SUCCESS';
export const GET_DEV_VIEW_DATA_FAILURE = 'GET_DEV_VIEW_DATA_FAILURE';
export const GET_LAST_RUN_DATA_SUCCESS = 'GET_LAST_RUN_DATA_SUCCESS';
export const GET_LAST_RUN_DATA_FAILURE = 'GET_LAST_RUN_DATA_FAILURE';

export const getDevViewDataSuccess = data => ({
  type: GET_DEV_VIEW_DATA_SUCCESS,
  payload: { data },
});

export const getDevViewDataFailure = error => ({
  type: GET_DEV_VIEW_DATA_FAILURE,
  payload: { error },
});

export const getLastRunDataSuccess = () => ({
  type: GET_LAST_RUN_DATA_SUCCESS,
  payload: {},
});

export const getLastRunDataFailure = error => ({
  type: GET_LAST_RUN_DATA_FAILURE,
  payload: { error },
});

export const getDevViewDataAction = (accessToken, project, repo) => {
  return async (dispatch) => {
    const config = getConfig();
    try {
      const response = await axios.get(config.configApi.host, {
        headers: {
          azure: accessToken,
          organization: config.oauth.Organization,
          'Content-Type': 'application/json',
        },
        params: {
          project,
          repo,
        },
      });
      const { data } = response;
      if (data) {
        dispatch(getDevViewDataSuccess(data));
        return response;
      }
      throw new Error('Get Dev View Data failed');
    } catch (err) {
      dispatch(getDevViewDataFailure(err));
      throw err;
    }
  };
};

/** This function passes the user ID to the backend using an API call and
 *  throws and error if the API calls fail.
 *  @param accessToken: OAuth token unique to each user
 *  @param userId: unique Id to identify each user
 *  @param selectedProject: project chosen for Azure
 */
export const getLastRunDataAction = (accessToken, userId, selectedProject, repo) => {
  return async (dispatch) => {
    const config = getConfig();
    try {
      const response = await axios.get(config.lastRunApi.host, {
        headers: {
          azure: accessToken,
          organization: config.oauth.Organization,
          'Content-Type': 'application/json',
        },
        params: {
          project: selectedProject,
          repo,
          nameId: userId,
        },
      });
      const { data } = response;
      if (data) {
        const runData = mapBuild(response);
        dispatch(getDevViewDataSuccess(data));
        return runData;
      }
      throw new Error('Get Last Run Data failed');
    } catch (err) {
      dispatch(getLastRunDataFailure(err));
      throw err;
    }
  };
};
