import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { getReposAction } from '../actions/get-repos';
import mockData from './context/mock-get-repos.json';
import { REPOS_ENDPOINT } from '../../constants/page-constants';

const mock = new MockAdapter(axios);
const middlewares = [thunk];

describe('Get Repos Thunk Test', () => {
  let mockStore;
  let store;
  afterAll(() => {
    mock.reset();
  });
  beforeEach(() => {
    mockStore = configureMockStore(middlewares);
    store = mockStore({});
  });
  it('Should sucessfully get data from backend', async() => {
    mock.onGet(`${REPOS_ENDPOINT}`).reply(200, {
      ...mockData,
    });
    const expectedActions = ['GET_REPOS_SUCCESS'];
    await store.dispatch(getReposAction());
    const actualActions = store.getActions().map(action => action.type);
    expect(actualActions).toStrictEqual(expectedActions);
  });
  it('Should be able to handle if backend gives a bad request', async() => {
    mock.onGet(`${REPOS_ENDPOINT}`).reply(400, {
    });
    const expectedActions = ['GET_REPOS_FAILURE'];
    try {
      await store.dispatch(getReposAction());
      const actualActions = store.getActions().map(action => action.type);
      expect(actualActions).toStrictEqual(expectedActions);
    } catch (err) {
      const actualActions = store.getActions().map(action => action.type);
      expect(actualActions).toStrictEqual(expectedActions);
    }
  });
  it('Should be able to handle if backend gives a not found', async() => {
    mock.onGet(`${REPOS_ENDPOINT}`).reply(404, {
    });
    const expectedActions = ['GET_REPOS_FAILURE'];
    try {
      await store.dispatch(getReposAction());
      const actualActions = store.getActions().map(action => action.type);
      expect(actualActions).toStrictEqual(expectedActions);
    } catch (err) {
      const actualActions = store.getActions().map(action => action.type);
      expect(actualActions).toStrictEqual(expectedActions);
    }
  });
  it('Should be able to handle if backend has a server failure', async() => {
    mock.onGet(`${REPOS_ENDPOINT}`).reply(500, {
    });
    const expectedActions = ['GET_REPOS_FAILURE'];
    try {
      await store.dispatch(getReposAction());
      const actualActions = store.getActions().map(action => action.type);
      expect(actualActions).toStrictEqual(expectedActions);
    } catch (err) {
      const actualActions = store.getActions().map(action => action.type);
      expect(actualActions).toStrictEqual(expectedActions);
    }
  });
});