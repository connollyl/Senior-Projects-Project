import axios from 'axios';
import { loadingAction } from './loading';
import { getConfig } from '../../util/configUtil';

export const GET_ARTIFACTS_SUCCESS = 'GET_ARTIFACTS_SUCCESS';
export const GET_ARTIFACTS_FAILURE = 'GET_ARTIFACTS_FAILURE';

export const getArtifactsSuccess = artifacts => ({
  type: GET_ARTIFACTS_SUCCESS,
  payload: { artifacts },
});

export const getArtifactsFailure = error => ({
  type: GET_ARTIFACTS_FAILURE,
  payload: { error },
});

export const getArtifactsAction = (accessToken, driveType, testEnv, selectedProject) => {
  return async (dispatch) => {
    const config = getConfig();
    try {
      dispatch(loadingAction(true));
      const response = await axios.get(config.artifactsApi.host, {
        headers: {
          azure: accessToken,
          organization: config.oauth.Organization,
          'Content-Type': 'application/json',
        },
        params: {
          project: selectedProject,
          driveType,
          testEnv,
        },
      });
      const { data } = response;
      if (data) {
        dispatch(getArtifactsSuccess(data));
        dispatch(loadingAction(false));
        return response;
      }
      throw new Error('Get Artifacts failed');
    } catch (err) {
      dispatch(getArtifactsFailure(err));
      dispatch(loadingAction(false));
      throw err;
    }
  };
};
