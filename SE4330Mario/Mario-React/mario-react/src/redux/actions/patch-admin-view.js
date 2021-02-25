import axios from 'axios';
import { loadingAction } from './loading';
import { getConfig } from '../../util/configUtil';

export const PATCH_ADMIN_VIEW_SUCCESS = 'PATCH_ADMIN_VIEW_SUCCESS';
export const PATCH_ADMIN_VIEW_FAILURE = 'PATCH_ADMIN_VIEW_FAILURE';

export const patchAdminViewSuccess = (failedResponses, runs) => ({
  type: PATCH_ADMIN_VIEW_SUCCESS,
  payload: { failedResponses, runs },
});

export const patchAdminViewFailure = error => ({
  type: PATCH_ADMIN_VIEW_FAILURE,
  payload: { error },
});

const setOptPost = (newName, oldName, accessToken, config) => ({
  method: 'patch',
  headers: {
    'Content-Type': 'application/json',
    organization: config.oauth.Organization,
    azure: accessToken,
  },
  data: {
    oldName,
    newName,
  },
});
export const postAdminViewAction = (endPoint, newName, oldName, accessToken) => {
  return async (dispatch) => {
    const config = getConfig();
    try {
      dispatch(loadingAction(true));
      const response = await axios(endPoint, setOptPost(newName, oldName, accessToken, config));
      const { failedResponses } = response.data;
      dispatch(patchAdminViewSuccess(failedResponses));
      dispatch(loadingAction(false));
      return response.data;
    } catch (err) {
      dispatch(patchAdminViewFailure(err));
      dispatch(loadingAction(false));
      throw err;
    }
  };
};
