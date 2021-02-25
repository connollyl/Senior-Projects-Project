import axios from 'axios';
import { getConfig } from '../../util/configUtil';

export const GET_TEST_VIEW_DATA_SUCCESS = 'GET_TEST_VIEW_DATA_SUCCESS';
export const GET_TEST_VIEW_DATA_FAILURE = 'GET_TEST_VIEW_DATA_FAILURE';

export const getTestViewDataSuccess = data => ({
  type: GET_TEST_VIEW_DATA_SUCCESS,
  payload: { data },
});

export const getTestViewDataFailure = error => ({
  type: GET_TEST_VIEW_DATA_FAILURE,
  payload: { error },
});

export const getTestViewDataAction = (accessToken, project, repo) => {
  return async (dispatch) => {
    const config = getConfig();
    try {
      const response = await axios.get(config.branchApi.host, {
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
        dispatch(getTestViewDataSuccess(data));
        return response;
      }
      throw new Error('Get Test View Data failed');
    } catch (err) {
      dispatch(getTestViewDataFailure(err));
      throw err;
    }
  };
};
