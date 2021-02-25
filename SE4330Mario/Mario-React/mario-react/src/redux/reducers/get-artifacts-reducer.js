import { cloneDeep, merge } from 'lodash';
import { initialState } from '../initialState';
import { GET_ARTIFACTS_SUCCESS, GET_ARTIFACTS_FAILURE } from '../actions/get-artifacts';

const getArtifactsReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case GET_ARTIFACTS_SUCCESS: {
      const state = cloneDeep(currentState);
      const { artifacts } = action.payload;
      state.artifacts = artifacts;
      return merge(state, artifacts);
      // return state;
    }
    case GET_ARTIFACTS_FAILURE: {
      const error = action.payload;
      const state = cloneDeep(currentState);
      return merge(state, error);
    }
    default: {
      return currentState;
    }
  }
};

export { getArtifactsReducer };
