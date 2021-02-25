import axios from 'axios';
import { getConfig } from '../../util/configUtil';

export const GET_TREE_VIEW_DATA_SUCCESS = 'GET_TREE_VIEW_DATA_SUCCESS';
export const GET_TREE_VIEW_DATA_FAILURE = 'GET_TREE_VIEW_DATA_FAILURE';

export const getTreeViewDataSuccess = data => ({
  type: GET_TREE_VIEW_DATA_SUCCESS,
  payload: { data },
});

export const getTreeViewDataFailure = error => ({
  type: GET_TREE_VIEW_DATA_FAILURE,
  payload: { error },
});

/** Makes call to Luigi API to retrieve formatted file structure.  */
export const getTreeViewDataAction = (accessToken, project, repo) => {
  return async (dispatch) => {
    const config = getConfig();
    try {
      const response = await axios.get(config.treeviewApi.host, {
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
        dispatch(getTreeViewDataSuccess(data));
        return response;
      }
      throw new Error('Get Tree View Data failed');
    } catch (err) {
      dispatch(getTreeViewDataFailure(err));
      throw err;
    }
  };
};
