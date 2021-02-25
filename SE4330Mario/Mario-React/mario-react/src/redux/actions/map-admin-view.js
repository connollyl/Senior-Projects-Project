import axios from 'axios';
import { loadingAction } from './loading';
import { getConfig } from '../../util/configUtil';

export const MAP_ADMIN_VIEW_SUCCESS = 'MAP_ADMIN_VIEW_SUCCESS';
export const MAP_ADMIN_VIEW_FAILURE = 'MAP_ADMIN_VIEW_FAILURE';

export const postAdminViewSuccess = (failedResponses, runs) => ({
  type: MAP_ADMIN_VIEW_SUCCESS,
  payload: { failedResponses, runs },
});

export const postAdminViewFailure = error => ({
  type: MAP_ADMIN_VIEW_FAILURE,
  payload: { error },
});

const setOptPost = (method, environment, drivetype, buildid, nickname, accessToken, config) => ({
  method,
  headers: {
    'Content-Type': 'application/json',
    organization: config.oauth.Organization,
    azure: accessToken,
  },
  data: {
    environment,
    drivetype,
    buildid,
    nickname,
  },
});
export const postAdminViewMapAction = (method, endPoint, environment, drivetype, buildid, nickname, accessToken) => {
  return async (dispatch) => {
    const config = getConfig();
    try {
      dispatch(loadingAction(true));
      const response = await axios(endPoint, setOptPost(method, environment, drivetype, buildid, nickname, accessToken, config));
      const { failedResponses } = response.data;
      dispatch(postAdminViewSuccess(failedResponses));
      dispatch(loadingAction(false));
      return response.data;
    } catch (err) {
      dispatch(postAdminViewFailure(err));
      dispatch(loadingAction(false));
      throw err;
    }
  };
};
