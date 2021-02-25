import { cloneDeep, merge } from 'lodash';
import { initialState } from '../initialState';
import {
  GET_REPOS_SUCCESS,
  GET_REPOS_FAILURE,
  SET_SELECTED_REPO_SUCCESS,
  SET_SELECTED_REPO_FAILURE,
} from '../actions/get-repos';

const getReposReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case GET_REPOS_SUCCESS: {
      const { data } = action.payload;
      const state = cloneDeep(currentState);
      return merge(state, data);
    }
    case GET_REPOS_FAILURE: {
      const error = action.payload;
      const state = cloneDeep(currentState);
      return merge(state, error);
    }
    case SET_SELECTED_REPO_SUCCESS: {
      const { data } = action.payload;
      const state = cloneDeep(currentState);
      return merge(state, data);
    }
    case SET_SELECTED_REPO_FAILURE: {
      const error = action.payload;
      const state = cloneDeep(currentState);
      return merge(state, error);
    }
    default: {
      return currentState;
    }
  }
};

export { getReposReducer };
