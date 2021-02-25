import { cloneDeep } from 'lodash';
import { initialState } from '../initialState';
import { SET_LOADING_ACTION } from '../actions/loading';

const loadingReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case SET_LOADING_ACTION: {
      const { isLoading } = action.payload;
      const state = cloneDeep(currentState);
      state.isLoading = isLoading;
      return state;
    }
    default: {
      return currentState;
    }
  }
};

export { loadingReducer };
