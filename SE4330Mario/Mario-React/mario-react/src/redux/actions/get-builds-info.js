import axios from 'axios';
import { loadingAction } from './loading';
import { getConfig } from '../../util/configUtil';

export const GET_BUILDS_SUCCESS = 'GET_BUILDS_SUCCESS';
export const GET_BUILDS_FAILURE = 'GET_BUILDS_FAILURE';

export const getBuildInfoSuccess = builds => ({
  type: GET_BUILDS_SUCCESS,
  payload: { builds },
});

export const getBuildInfoFailure = error => ({
  type: GET_BUILDS_FAILURE,
  payload: { error },
});

export const getBuildInfoAction = (accessToken, selectedProject) => {
  return async (dispatch) => {
    try {
      dispatch(loadingAction(true));
      const config = getConfig();
      const response = await axios.get(config.buildsApi.host, {
        headers: {
          azure: accessToken,
          organization: config.oauth.Organization,
          'Content-Type': 'application/json',
        },
        params: {
          project: selectedProject,
        },
      });
      const { data } = response;
      if (data) {
        dispatch(getBuildInfoSuccess(data));
        dispatch(loadingAction(false));
        return response;
      }
      throw new Error('Get Build Info failed');
    } catch (err) {
      dispatch(getBuildInfoFailure(err));
      dispatch(loadingAction(false));
      throw err;
    }
  };
};
