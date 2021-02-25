/* eslint-disable */
import { cloneDeep, merge } from 'lodash';
import { initialState } from '../initialState';
import { MAP_ADMIN_VIEW_SUCCESS, MAP_ADMIN_VIEW_FAILURE } from '../actions/map-admin-view';

const callToRefresh = () => {
  return location.reload();
};

const mapAdminReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case MAP_ADMIN_VIEW_SUCCESS: {
      const data = action.payload;
      const state = cloneDeep(currentState);
      setTimeout(callToRefresh, 1);
      return merge(state, data);
    }
    case MAP_ADMIN_VIEW_FAILURE: {
      const data = action.payload;
      const state = cloneDeep(currentState);
      return merge(state, data);
    }
    default: {
      return currentState;
    }
  }
};

export { mapAdminReducer };
