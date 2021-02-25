import { cloneDeep, merge } from 'lodash';
import { initialState } from '../initialState';
import { GET_OAUTH_SUCCESS, GET_OAUTH_FAILURE, GET_NAME_ID } from '../actions/get-oauth';

const oAuthReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case GET_OAUTH_SUCCESS: {
      const token = action.payload;
      const state = cloneDeep(currentState);
      return merge(state, token);
      // return initialState;
    }
    // TODO: determine how want to store errors
    case GET_OAUTH_FAILURE: {
      const token = action.payload;
      const state = cloneDeep(currentState);
      return merge(state, token);
      // return initialState;
    }
    case GET_NAME_ID: {
      const nameId = action.payload;
      const state = cloneDeep(currentState);
      return merge(state, nameId);
    }
    default: {
      return currentState;
    }
  }
};

export { oAuthReducer };
