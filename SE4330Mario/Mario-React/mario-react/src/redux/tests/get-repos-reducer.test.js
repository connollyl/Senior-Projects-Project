import { reducer } from '../reducers';
import { GET_REPOS_SUCCESS, GET_REPOS_FAILURE } from '../actions/get-repos';
import data from './context/mock-get-repos.json';

describe('Reducer for get repos data', () => {
  let state;
  beforeEach(() => {
    state = {
    };
  });
  it('should set response in store', () => {
    const expectedState = {
      repos: [
        'data',
      ],
    };
    const action = { type: GET_REPOS_SUCCESS, payload: { data } };
    const actual = reducer(state, action);
    expect(actual).toStrictEqual(expectedState);
  });
  it('should update error state based on FAILURE', () => {
    const error = 500;
    const expected = {
      error,
    };
    const action = { type: GET_REPOS_FAILURE, payload: { error } };
    const actual = reducer(state, action);
    expect(actual).toStrictEqual(expected);
  });
  it('should update error state based on FAILURE', () => {
    const error = 400;
    const expected = {
      error,
    };
    const action = { type: GET_REPOS_FAILURE, payload: { error } };
    const actual = reducer(state, action);
    expect(actual).toStrictEqual(expected);
  });
  it('should update error state based on FAILURE', () => {
    const error = 404;
    const expected = {
      error,
    };
    const action = { type: GET_REPOS_FAILURE, payload: { error } };
    const actual = reducer(state, action);
    expect(actual).toStrictEqual(expected);
  });
});
