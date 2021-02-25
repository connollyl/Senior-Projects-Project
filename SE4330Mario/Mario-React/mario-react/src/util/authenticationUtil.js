/* eslint-disable max-len */
import { getConfig } from './configUtil';

/**
 * Creates the oauth url
 * @return constructed authentecation path
 */
export const getOauthURL = () => {
  const config = getConfig();
  const { oauth } = config;
  const AuthPath = `https://app.vssps.visualstudio.com/oauth2/authorize?client_id=${oauth.ClientId}&response_type=Assertion&state=${oauth.State}&scope=${oauth.Scope}&redirect_uri=${oauth.CallBack}`;
  return AuthPath;
};
