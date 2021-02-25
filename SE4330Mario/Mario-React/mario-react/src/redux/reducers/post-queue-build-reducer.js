import { cloneDeep, merge } from 'lodash';
import { initialState } from '../initialState';
import { POST_QUEUE_BUILD_SUCCESS, POST_QUEUE_BUILD_FAILURE } from '../actions/post-queue-build';

const queueBuildReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case POST_QUEUE_BUILD_SUCCESS: {
      const data = action.payload;
      const state = cloneDeep(currentState);
      return merge(state, data);
    }
    // TODO: determine how want to store errors
    case POST_QUEUE_BUILD_FAILURE: {
      const data = action.payload;
      const state = cloneDeep(currentState);
      return merge(state, data);
    }
    default: {
      return currentState;
    }
  }
};

export { queueBuildReducer };
