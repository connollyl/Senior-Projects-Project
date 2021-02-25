/* eslint-disable */
import { cloneDeep, merge } from 'lodash';
import { initialState } from '../initialState';
import { POST_ADMIN_VIEW_SUCCESS, POST_ADMIN_VIEW_FAILURE } from '../actions/post-admin-view';

const callToRefresh = () => {
  return location.reload();
};

const postAdminViewReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case POST_ADMIN_VIEW_SUCCESS: {
      const data = action.payload;
      const state = cloneDeep(currentState);
      setTimeout(callToRefresh, 1);
      return merge(state, data);
    }
    case POST_ADMIN_VIEW_FAILURE: {
      const data = action.payload;
      const state = cloneDeep(currentState);
      return merge(state, data);
    }
    default: {
      return currentState;
    }
  }
};



export { postAdminViewReducer };
