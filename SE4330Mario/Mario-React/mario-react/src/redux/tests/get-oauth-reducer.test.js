import { cloneDeep } from 'lodash';
import { reducer } from '../reducers';
import { GET_OAUTH_SUCCESS, GET_OAUTH_FAILURE } from '../actions/get-oauth';
import token from './context/mock-get-oauth-token.json';
import { initialState } from '../initialState';

describe.skip('Reducer for get oauth token', () => {
  let state;
  beforeEach(() => {
    state = cloneDeep(initialState);
  });
  it('should set oauthtoken in store based on oauth response', () => {
    const expected = cloneDeep(state);
    const action = { type: GET_OAUTH_SUCCESS, payload: { token } };
    const actual = reducer(state, action);
    expect(actual).toStrictEqual(expected);
  });
  it('should update error state based on FAILURE', () => {
    const error = 500;
    const expected = {
      oauthCode: '',
      token,
      error,
    };
    const action = { type: GET_OAUTH_FAILURE, payload: { error } };
    const actual = reducer(state, action);
    expect(actual).toStrictEqual(expected);
  });
});
