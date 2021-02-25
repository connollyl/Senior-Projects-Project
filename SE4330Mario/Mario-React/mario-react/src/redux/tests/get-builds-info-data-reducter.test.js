import { cloneDeep } from 'lodash';
import { reducer } from '../reducers';
import { GET_BUILDS_SUCCESS, GET_BUILDS_FAILURE } from '../actions/get-builds-info';
import data from './context/mock-get-builds-info-data';
import { initialState } from '../initialState';

describe('Reducer for get builds info data', () => {
  let state;
  beforeEach(() => {
    state = cloneDeep(initialState);
  });
  it('should set response in store', () => {
    const expectedState = cloneDeep(state);
    const action = { type: GET_BUILDS_SUCCESS, payload: { data } };
    const actual = reducer(state, action);
    expectedState(actual).toStrictEqual(expectedState);
  });
  it('should update error state based on FAILURE', () => {
    const error = 500;
    const expected = {
      error,
    };
    const action = { type: GET_BUILDS_FAILURE, payload: { error } };
    const actual = reducer(state, action);
    expect(actual).toStrictEqual(expected);
  });
});
