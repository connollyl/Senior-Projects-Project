import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { getOAuthDataAction } from '../actions/get-oauth';
import mockOauthResponse from './context/mock-get-oauth-token.json';
import { OUTH_API_URL } from '../../constants/outh-constants';

const mock = new MockAdapter(axios);
const middlewares = [thunk];

describe('OAuth Thunk Test', () => {
  let mockStore;
  let queryString;
  let store;
  afterAll(() => {
    mock.reset();
  });
  beforeEach(() => {
    mockStore = configureMockStore(middlewares);
    store = mockStore({});
    queryString = 'code=foobar';
  });
  it('Should sucessfully get data from OAuth', async() => {
    mock.onPost(`${OUTH_API_URL}`).reply(200, {
      ...mockOauthResponse,
    });
    const expectedActions = ['SET_LOADING_ACTION', 'GET_OAUTH_SUCCESS', 'SET_LOADING_ACTION'];
    await store.dispatch(getOAuthDataAction(queryString));
    const actualActions = store.getActions().map(action => action.type);
    expect(actualActions).toStrictEqual(expectedActions);
  });
  it('Should be able to handle if oauth gives a bad request', async() => {
    mock.onPost(`${OUTH_API_URL}`).reply(400, {
    });
    const expectedActions = ['SET_LOADING_ACTION', 'GET_OAUTH_FAILURE', 'SET_LOADING_ACTION'];
    try {
      await store.dispatch(getOAuthDataAction(queryString));
      const actualActions = store.getActions().map(action => action.type);
      expect(actualActions).toStrictEqual(expectedActions);
    } catch (err) {
      const actualActions = store.getActions().map(action => action.type);
      expect(actualActions).toStrictEqual(expectedActions);
    }
  });
});

