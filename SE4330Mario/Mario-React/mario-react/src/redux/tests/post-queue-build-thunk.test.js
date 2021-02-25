import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { postQueueBuildAction } from '../actions/post-queue-build';
import mockQueueBuildObject from './context/mock-post-queue-build.json';
import { QUEUE_BUILD_ENDPOINT } from '../../constants/page-constants';

const mock = new MockAdapter(axios);
const middlewares = [thunk];

describe('Queue Build Thunk Test', () => {
  let mockStore;
  let store;
  afterAll(() => {
    mock.reset();
  });
  beforeEach(() => {
    mockStore = configureMockStore(middlewares);
    store = mockStore({});
  });
  it('Should sucessfully get data from queue build', async() => {
    mock.onPost(`${QUEUE_BUILD_ENDPOINT}`).reply(200, {
    });
    const expectedActions = ['SET_LOADING_ACTION', 'POST_QUEUE_BUILD_SUCCESS', 'SET_LOADING_ACTION'];
    await store.dispatch(postQueueBuildAction(mockQueueBuildObject));
    const actualActions = store.getActions().map(action => action.type);
    expect(actualActions).toStrictEqual(expectedActions);
  });
  it('Should be able to handle if queue build gives a bad request', async() => {
    mock.onPost(`${QUEUE_BUILD_ENDPOINT}`).reply(400, {
    });
    const expectedActions = ['POST_QUEUE_BUILD_FAILURE', 'SET_LOADING_ACTION'];
    try {
      await store.dispatch(postQueueBuildAction());
      const actualActions = store.getActions().map(action => action.type);
      expect(actualActions).toStrictEqual(expectedActions);
    } catch (err) {
      const actualActions = store.getActions().map(action => action.type);
      expect(actualActions).toStrictEqual(expectedActions);
    }
  });
});

