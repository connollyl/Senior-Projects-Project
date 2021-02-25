import { reducer } from '../reducers';
import { GET_PROJECTS_SUCCESS, GET_PROJECTS_FAILURE } from '../actions/get-projects';
import data from './context/mock-get-projects.json';

describe('Reducer for get projects data', () => {
  let state;
  beforeEach(() => {
    state = {
    };
  });
  it('should set response in store', () => {
    const expectedState = {
      Projects: [
        'data',
      ],
    };
    const action = { type: GET_PROJECTS_SUCCESS, payload: { data } };
    const actual = reducer(state, action);
    expect(actual).toStrictEqual(expectedState);
  });
  it('should update error state based on FAILURE', () => {
    const error = 500;
    const expected = {
      error,
    };
    const action = { type: GET_PROJECTS_FAILURE, payload: { error } };
    const actual = reducer(state, action);
    expect(actual).toStrictEqual(expected);
  });
  it('should update error state based on FAILURE', () => {
    const error = 400;
    const expected = {
      error,
    };
    const action = { type: GET_PROJECTS_FAILURE, payload: { error } };
    const actual = reducer(state, action);
    expect(actual).toStrictEqual(expected);
  });
  it('should update error state based on FAILURE', () => {
    const error = 404;
    const expected = {
      error,
    };
    const action = { type: GET_PROJECTS_FAILURE, payload: { error } };
    const actual = reducer(state, action);
    expect(actual).toStrictEqual(expected);
  });
});
