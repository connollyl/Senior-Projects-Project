import axios from 'axios';
import { loadingAction } from './loading';
import { getConfig } from '../../util/configUtil';

export const PATCH_MAP_ADMIN_VIEW_SUCCESS = 'PATCH_MAP_ADMIN_VIEW_SUCCESS';
export const PATCH_MAP_ADMIN_VIEW_FAILURE = 'PATCH_MAP_ADMIN_VIEW_FAILURE';

export const patchAdminViewSuccess = (failedResponses, runs) => ({
  type: PATCH_MAP_ADMIN_VIEW_SUCCESS,
  payload: { failedResponses, runs },
});

export const patchAdminViewFailure = error => ({
  type: PATCH_MAP_ADMIN_VIEW_FAILURE,
  payload: { error },
});

const setOptPost = (oldbuildid, environment, drivetype, buildid, nickName, accessToken, config) => ({
  method: 'patch',
  headers: {
    'Content-Type': 'application/json',
    organization: config.oauth.Organization,
    azure: accessToken,
  },
  data: {
    oldbuildid,
    environment,
    drivetype,
    buildid,
    nickName,
  },
});
export const postAdminViewMapAction = (endPoint, oldbuildid, environment, drivetype, buildid, nickName, accessToken) => {
  return async (dispatch) => {
    const config = getConfig();
    try {
      dispatch(loadingAction(true));
      const response = await axios(endPoint, setOptPost(oldbuildid, environment, drivetype, buildid, nickName, accessToken, config));
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
