import axios from 'axios';
import { loadingAction } from './loading';
import { getConfig } from '../../util/configUtil';

export const POST_QUEUE_BUILD_SUCCESS = 'POST_QUEUE_BUILD_SUCCESS';
export const POST_QUEUE_BUILD_FAILURE = 'POST_QUEUE_BUILD_FAILURE';

export const postQueueBuildSuccess = (failedResponses, runs) => ({
  type: POST_QUEUE_BUILD_SUCCESS,
  payload: { failedResponses, runs },
});

export const postQueueBuildFailure = error => ({
  type: POST_QUEUE_BUILD_FAILURE,
  payload: { error },
});

const setOpts = (data, accessToken, config) => ({
  url: config.queueBuildApi.host,
  method: 'post',
  headers: {
    'Content-Type': 'application/json',
    organization: config.oauth.Organization,
    azure: accessToken,
  },
  data,
});

export const postQueueBuildAction = (buildData, accessToken) => {
  return async (dispatch) => {
    const config = getConfig();
    try {
      dispatch(loadingAction(true));
      const response = await axios(setOpts(buildData, accessToken, config));
      const { failedResponses } = response.data;
      const { numberOfRuns } = response.data;
      const runs = numberOfRuns;
      dispatch(postQueueBuildSuccess(failedResponses, runs));
      dispatch(loadingAction(false));
      return response.data;
    } catch (err) {
      dispatch(postQueueBuildFailure(err));
      dispatch(loadingAction(false));
      throw err;
    }
  };
};
