import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { getDevViewDataAction } from '../actions/get-dev-view-data';
import mockData from './context/mock-get-dev-view-data.json';
import { DEV_VIEW_ENDPOINT } from '../../constants/page-constants';

const mock = new MockAdapter(axios);
const middlewares = [thunk];

describe('Get Dev View Thunk Test', () => {
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
    mock.onGet(`${DEV_VIEW_ENDPOINT}`).reply(200, {
      ...mockData,
    });
    const expectedActions = ['GET_DEV_VIEW_DATA_SUCCESS'];
    await store.dispatch(getDevViewDataAction());
    const actualActions = store.getActions().map(action => action.type);
    expect(actualActions).toStrictEqual(expectedActions);
  });
  it('Should be able to handle if backend gives a bad request', async() => {
    mock.onGet(`${DEV_VIEW_ENDPOINT}`).reply(400, {
    });
    const expectedActions = ['GET_DEV_VIEW_DATA_FAILURE'];
    try {
      await store.dispatch(getDevViewDataAction());
      const actualActions = store.getActions().map(action => action.type);
      expect(actualActions).toStrictEqual(expectedActions);
    } catch (err) {
      const actualActions = store.getActions().map(action => action.type);
      expect(actualActions).toStrictEqual(expectedActions);
    }
  });
});
