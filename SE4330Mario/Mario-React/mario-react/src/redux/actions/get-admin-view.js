import axios from 'axios';
import { loadingAction } from './loading';
import { getConfig } from '../../util/configUtil';

export const GET_ADMIN_SUCCESS = 'GET_ADMIN_SUCCESS';
export const GET_ADMIN_FAILURE = 'GET_ADMIN_FAILURE';

export const getAdminSuccess = builds => ({
  type: GET_ADMIN_SUCCESS,
  payload: { builds },
});

export const getAdminFailure = error => ({
  type: GET_ADMIN_FAILURE,
  payload: { error },
});

export const getAdminAction = (endpoint, accessToken, selectedProject) => {
  return async (dispatch) => {
    try {
      dispatch(loadingAction(true));
      const config = getConfig();
      const response = await axios.get(endpoint, {
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
        dispatch(getAdminSuccess(data));
        dispatch(loadingAction(false));
        return data;
      }
      throw new Error('Get Build Info failed');
    } catch (err) {
      dispatch(getAdminFailure(err));
      dispatch(loadingAction(false));
      throw err;
    }
  };
};
