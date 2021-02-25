import { cloneDeep, merge } from 'lodash';
import { initialState } from '../initialState';
import { GET_ADMIN_SUCCESS, GET_ADMIN_FAILURE } from '../actions/get-admin-view';

const getAdminViewReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case GET_ADMIN_SUCCESS: {
      const state = cloneDeep(currentState);
      const { builds } = action.payload;
      return merge(state, builds);
    }
    case GET_ADMIN_FAILURE: {
      const error = action.payload;
      const state = cloneDeep(currentState);
      return merge(state, error);
    }
    default: {
      return currentState;
    }
  }
};

export { getAdminViewReducer };
