import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React, { type ComponentType } from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { store, persistor } from './redux';
import { Root } from './containers/Root/Root';
import routes from './pages/routes';

const setRoutes = routes(store);

// ReactDOM.render(<Root store={store} routes={routes} />, global.document.getElementById('root'));
// NOTE: Leaving this commented out for now. May come back to it
const render = (Component: ComponentType<*>) => {
  ReactDOM.render(
    <AppContainer>
      <Component routes={setRoutes} store={store} persistor={persistor} />
    </AppContainer>,
    global.document.getElementById('app-root'),
  );
};

render(Root);
if (module.hot) {
  module.hot.accept('./containers/Root/Root', () => {
    render(Root);
  });
}
