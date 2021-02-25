import { cloneDeep, merge } from 'lodash';
import { initialState } from '../initialState';
import { GET_PROJECTS_SUCCESS, GET_PROJECTS_FAILURE, UPDATE_SELECTED_PROJECT_SUCCESS } from '../actions/get-projects';

const getProjectsReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case GET_PROJECTS_SUCCESS: {
      const { data } = action.payload;
      const state = cloneDeep(currentState);
      return merge(state, data);
    }
    case GET_PROJECTS_FAILURE: {
      const error = action.payload;
      const state = cloneDeep(currentState);
      return merge(state, error);
    }
    case UPDATE_SELECTED_PROJECT_SUCCESS: {
      const { data } = action.payload;
      const state = cloneDeep(currentState);
      return merge(state, data);
    }
    default: {
      return currentState;
    }
  }
};

export { getProjectsReducer };
