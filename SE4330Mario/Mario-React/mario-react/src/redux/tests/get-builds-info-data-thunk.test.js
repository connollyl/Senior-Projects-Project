import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { getBuildInfoAction } from '../actions/get-builds-info';
import mockData from './context/mock-get-builds-info-data';
import { BUILDS_INFO_ENDPOINT } from '../../constants/page-constants';

const mock = new MockAdapter(axios);
const middlewares = [thunk];

describe('Get Builds Info Thunk Test', () => {
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
    mock.onGet(`${BUILDS_INFO_ENDPOINT}`).reply(200, {
      ...mockData,
    });
    const expectedActions = ['GET_BUILDS_SUCCESS'];
    await store.dispatch(getBuildInfoAction());
    const actualActions = store.getActions().map(action => action.type);
    expect(actualActions).toStrictEqual(expectedActions);
  });
  it('Should be able to handle if backend gives a bad request', async() => {
    mock.onGet(`${BUILDS_INFO_ENDPOINT}`).reply(400, {
    });
    const expectedActions = ['GET_BUILDS_FAILURE'];
    try {
      await store.dispatch(getBuildInfoAction());
      const actualActions = store.getActions().map(action => action.type);
      expect(actualActions).toStrictEqual(expectedActions);
    } catch (err) {
      const actualActions = store.getActions().map(action => action.type);
      expect(actualActions).toStrictEqual(expectedActions);
    }
  });
});
