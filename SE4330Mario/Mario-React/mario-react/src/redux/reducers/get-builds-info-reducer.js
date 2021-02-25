import { cloneDeep, merge } from 'lodash';
import { initialState } from '../initialState';
import { GET_BUILDS_SUCCESS, GET_BUILDS_FAILURE } from '../actions/get-builds-info';

const getBuildsInfoReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case GET_BUILDS_SUCCESS: {
      const state = cloneDeep(currentState);
      const { builds } = action.payload;
      console.log(builds);
      return cloneDeep(state, builds);
    }
    case GET_BUILDS_FAILURE: {
      const error = action.payload;
      const state = cloneDeep(currentState);
      return merge(state, error);
    }
    default: {
      return currentState;
    }
  }
};

export { getBuildsInfoReducer };
