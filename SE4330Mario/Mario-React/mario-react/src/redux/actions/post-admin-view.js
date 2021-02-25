/* eslint-disable max-len */
import axios from 'axios';
import { loadingAction } from './loading';
import { getConfig } from '../../util/configUtil';

export const POST_ADMIN_VIEW_SUCCESS = 'POST_ADMIN_VIEW_SUCCESS';
export const POST_ADMIN_VIEW_FAILURE = 'POST_ADMIN_VIEW_FAILURE';

export const postAdminViewSuccess = (failedResponses, runs) => ({
  type: POST_ADMIN_VIEW_SUCCESS,
  payload: { failedResponses, runs },
});

export const postAdminViewFailure = error => ({
  type: POST_ADMIN_VIEW_FAILURE,
  payload: { error },
});

const setOptPost = (method, name, accessToken, config) => ({
  method,
  headers: {
    organization: config.oauth.Organization,
    azure: accessToken,
    'Content-Type': 'application/json',
  },
  data:
  {
    name,
  },
});
export const postAdminViewAction = (method, endPoint, name, accessToken) => {
  return async (dispatch) => {
    const config = getConfig();
    try {
      dispatch(loadingAction(true));
      const response = await axios(endPoint, setOptPost(method, name, accessToken, config));
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
