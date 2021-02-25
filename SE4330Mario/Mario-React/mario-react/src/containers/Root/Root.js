import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { HashRouter } from 'react-router-dom';
import { JssProvider, ThemeProvider } from 'react-jss';
import { Provider } from 'react-redux';
import { jss } from '../../assets/styles/global.styles';
import { theme } from '../../config/theme';

/**
 * Generates The top level of the pages, which enables the redux store
 * and routing to exist
 * @param routes page routes
 * @param persistor: enables the persistance of redux store between sessions
 * @param store: redux store
 */
type Props = {
  routes: any,
  persistor: any,
  store: any,
}

const Root = (props: Props) => {
  const {
    routes,
    store,
    persistor,
  } = props;
  return (
    <ThemeProvider theme={theme}>
      <JssProvider jss={jss}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <HashRouter>
              {routes}
            </HashRouter>
          </PersistGate>
        </Provider>
      </JssProvider>
    </ThemeProvider>
  );
};

export { Root };
