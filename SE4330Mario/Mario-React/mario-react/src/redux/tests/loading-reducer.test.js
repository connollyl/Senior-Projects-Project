import { cloneDeep } from 'lodash';
import { reducer } from '../reducers';
import { SET_LOADING_ACTION } from '../actions/loading';
import { initialState } from '../initialState';

describe('Reducer for loading', () => {
  let state;
  beforeEach(() => {
    state = cloneDeep(initialState);
  });
  it('should set loading to true', () => {
    const expected = cloneDeep(state);
    expected.isLoading = true;
    const action = { type: SET_LOADING_ACTION, payload: { isLoading: true } };
    const actual = reducer(state, action);
    expect(actual).toStrictEqual(expected);
  });
  it('should set loading to false', () => {
    const expected = cloneDeep(state);
    expected.isLoading = false;
    const action = { type: SET_LOADING_ACTION, payload: { isLoading: false } };
    const actual = reducer(state, action);
    expect(actual).toStrictEqual(expected);
  });
});
