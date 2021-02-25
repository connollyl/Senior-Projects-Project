/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { initialState } from './initialState';
import { reducer } from './reducers';

const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducer);
const middleware = process.env.REACT_APP_ENV === 'local' || 'development' ? compose(
  applyMiddleware(thunk),
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
) : applyMiddleware(thunk);
export const store = createStore(
  persistedReducer,
  initialState,
  middleware,
);

export const persistor = persistStore(store);
