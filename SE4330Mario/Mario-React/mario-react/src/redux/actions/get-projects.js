import axios from 'axios';
import { getConfig } from '../../util/configUtil';

export const GET_PROJECTS_SUCCESS = 'GET_PROJECTS_SUCCESS';
export const GET_PROJECTS_FAILURE = 'GET_PROJECTS_FAILURE';
export const UPDATE_SELECTED_PROJECT_SUCCESS = 'UPDATE_SELECTED_PROJECT_SUCCESS';

export const getProjectsSuccess = data => ({
  type: GET_PROJECTS_SUCCESS,
  payload: { data },
});

export const getProjectsFailure = error => ({
  type: GET_PROJECTS_FAILURE,
  payload: { error },
});

export const updateSelectedProjectSuccess = data => ({
  type: GET_PROJECTS_SUCCESS,
  payload: { data },
});

export const updateSelectedProjectAction = (selectedProject) => {
  return async (dispatch) => {
    dispatch(updateSelectedProjectSuccess({ selectedProject }));
  };
};

export const getProjectsAction = (accessToken) => {
  return async (dispatch) => {
    const config = getConfig();
    try {
      const response = await axios.get(config.projectsApi.host, {
        headers: {
          azure: accessToken,
          organization: config.oauth.Organization,
          'Content-Type': 'application/json',
        },
        params: {
        },
      });
      const { data } = response;
      dispatch(getProjectsSuccess(data));
      return response;
    } catch (err) {
      dispatch(getProjectsFailure(err));
      throw err;
    }
  };
};
