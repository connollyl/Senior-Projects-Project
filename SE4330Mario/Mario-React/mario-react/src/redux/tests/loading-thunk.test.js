import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { loadingAction } from '../actions/loading';

const middlewares = [thunk];

describe('Loading Thunk Test', () => {
  let mockStore;
  let store;
  beforeEach(() => {
    mockStore = configureMockStore(middlewares);
    store = mockStore({});
  });
  it('Should successfully set loading', async() => {
    const expectedActions = ['SET_LOADING_ACTION'];
    await store.dispatch(loadingAction(true));
    const actualActions = store.getActions().map(action => action.type);
    expect(actualActions).toStrictEqual(expectedActions);
  });
  it('Should successfully set loading to be false', async() => {
    const expectedActions = ['SET_LOADING_ACTION'];
    await store.dispatch(loadingAction(false));
    const actualActions = store.getActions().map(action => action.type);
    expect(actualActions).toStrictEqual(expectedActions);
  });
});
