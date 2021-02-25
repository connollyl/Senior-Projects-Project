import { cloneDeep, merge } from 'lodash';
import { initialState } from '../initialState';
import { PATCH_ADMIN_VIEW_SUCCESS, PATCH_ADMIN_VIEW_FAILURE } from '../actions/patch-admin-view';

const patchAdminViewReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case PATCH_ADMIN_VIEW_SUCCESS: {
      const data = action.payload;
      const state = cloneDeep(currentState);
      return merge(state, data);
    }
    case PATCH_ADMIN_VIEW_FAILURE: {
      const data = action.payload;
      const state = cloneDeep(currentState);
      return merge(state, data);
    }
    default: {
      return currentState;
    }
  }
};

export { patchAdminViewReducer };
