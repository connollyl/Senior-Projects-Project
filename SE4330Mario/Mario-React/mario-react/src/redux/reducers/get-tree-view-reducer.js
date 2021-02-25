import { cloneDeep, merge } from 'lodash';
import { initialState } from '../initialState';
import { GET_TREE_VIEW_DATA_SUCCESS, GET_TREE_VIEW_DATA_FAILURE } from '../actions/get-tree-view-data';

const getTreeViewDataReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case GET_TREE_VIEW_DATA_SUCCESS: {
      const { data } = action.payload;
      const state = cloneDeep(currentState);
      return merge(state, data);
    }
    case GET_TREE_VIEW_DATA_FAILURE: {
      const error = action.payload;
      const state = cloneDeep(currentState);
      return merge(state, error);
    }
    default: {
      return currentState;
    }
  }
};

export { getTreeViewDataReducer };
