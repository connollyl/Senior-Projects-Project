import { cloneDeep, merge } from 'lodash';
import { initialState } from '../initialState';
import {
  GET_DEV_VIEW_DATA_SUCCESS, GET_DEV_VIEW_DATA_FAILURE, GET_LAST_RUN_DATA_SUCCESS, GET_LAST_RUN_DATA_FAILURE,
} from '../actions/get-dev-view-data';

const getDevViewDataReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case GET_DEV_VIEW_DATA_SUCCESS: {
      const { data } = action.payload;
      const state = cloneDeep(currentState);
      return merge(state, data);
    }
    case GET_DEV_VIEW_DATA_FAILURE: {
      const error = action.payload;
      const state = cloneDeep(currentState);
      return merge(state, error);
    }
    case GET_LAST_RUN_DATA_SUCCESS: {
      const error = action.payload;
      const state = cloneDeep(currentState);
      return merge(state, error);
    }
    case GET_LAST_RUN_DATA_FAILURE: {
      const error = action.payload;
      const state = cloneDeep(currentState);
      return merge(state, error);
    }
    default: {
      return currentState;
    }
  }
};

export { getDevViewDataReducer };
