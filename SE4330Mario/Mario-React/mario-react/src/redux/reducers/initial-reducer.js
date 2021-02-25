import { cloneDeep, merge } from 'lodash';
import { initialState } from '../initialState';
import { INITIAL_SUCCESS, INITIAL_FAILURE } from '../actions/initial';

const initialReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case INITIAL_SUCCESS: {
      const state = cloneDeep(currentState);
      return state;
    }
    // TODO: determine how want to store errors
    case INITIAL_FAILURE: {
      const error = action.payload;
      const state = cloneDeep(currentState);
      return merge(state, error);
    }
    default: {
      return currentState;
    }
  }
};

export { initialReducer };
