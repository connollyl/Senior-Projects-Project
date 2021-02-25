import { cloneDeep, merge } from 'lodash';
import { initialState } from '../initialState';
import { GET_TEST_VIEW_DATA_SUCCESS, GET_TEST_VIEW_DATA_FAILURE } from '../actions/get-test-view-data';

const getTestViewDataReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case GET_TEST_VIEW_DATA_SUCCESS: {
      const { data } = action.payload;
      const state = cloneDeep(currentState);
      return merge(state, data);
    }
    // TODO: determine how want to store errors
    case GET_TEST_VIEW_DATA_FAILURE: {
      const error = action.payload;
      const state = cloneDeep(currentState);
      return merge(state, error);
    }
    default: {
      return currentState;
    }
  }
};

export { getTestViewDataReducer };
