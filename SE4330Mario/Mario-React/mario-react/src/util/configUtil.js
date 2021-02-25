/* eslint-disable max-len */
import devConfig from '../../config/development/config.json';
import intConfig from '../../config/integration/config.json';
import localConfig from '../../config/local/config.json';
import prodConfig from '../../config/production/config.json';
import { getQueryString } from './queryStringUtil';

/**
 * Gets the proper configuration based on the environment of the program
 */
export const getConfig = () => {
  if (process.env.REACT_APP_ENV === 'development') {
    return devConfig;
  } if (process.env.REACT_APP_ENV === 'integration') {
    return intConfig;
  } if (process.env.REACT_APP_ENV === 'production') {
    return prodConfig;
  }
  return localConfig;
};

/**
 * Creates the oauth url
 */
export const getOauthURL = () => {
  const config = getConfig();
  const { oauth } = config;
  const AuthPath = `https://app.vssps.visualstudio.com/oauth2/authorize?client_id=${oauth.ClientId}&response_type=Assertion&state=${oauth.State}&scope=${oauth.Scope}&redirect_uri=${oauth.CallBack}`;
  return AuthPath;
};

/**
 * Used to handle oauth calls for validating if the user is authenticated or not
 * @param {*} token Refresh token
 * @param {*} getOAuthDataWithToken Redux action for calling oauth with a refresh token
 * @param {*} setLoadingAction  Redux action to set loading
 * @param {*} intializeApp Redux action to initialize the app
 */
export const handleOauth = async (token, getOAuthDataWithToken, setLoadingAction, intializeApp) => {
  setLoadingAction(true);
  try {
    const queryString = getQueryString();
    if (queryString) {
      await intializeApp(queryString);
    } else if (token && token.access_token) {
      await getOAuthDataWithToken(token.refresh_token);
    } else if (window.location !== getOauthURL()) {
      window.location = getOauthURL();
      return;
    }
  } catch (e) {
    if (window.location !== getOauthURL()) window.location = getOauthURL();
    return;
  }
  setLoadingAction(false);
};
