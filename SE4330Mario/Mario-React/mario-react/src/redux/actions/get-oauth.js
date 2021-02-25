import axios from 'axios';
import { convertJsonToXForm } from '../../util/jsonConverterUtil';
import { loadingAction } from './loading';
import { getConfig } from '../../util/configUtil';

export const GET_OAUTH_SUCCESS = 'GET_OAUTH_SUCCESS';
export const GET_OAUTH_FAILURE = 'GET_OAUTH_FAILURE';
export const GET_NAME_ID = 'GET_NAME_ID';

export const getNameId = nameId => ({
  type: GET_NAME_ID,
  payload: { nameId },
});

export const getOAuthDataSuccess = token => ({
  type: GET_OAUTH_SUCCESS,
  payload: { token },
});

export const getOAuthDataFailure = error => ({
  type: GET_OAUTH_FAILURE,
  payload: { error },
});

const setOpts = (data, apiURL) => ({
  url: apiURL,
  method: 'post',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  data,
});

export const getNameAction = (nameId) => {
  return getNameId(nameId);
};

export const getOAuthDataAction = (queryString) => {
  const oAuthRequest = async () => {
    const config = getConfig();
    const { oauth } = config;
    const queryArr = queryString;
    const code = queryArr[0].split('=')[1];
    const encodedClientSecret = encodeURIComponent(oauth.ClientSecret);
    const encodedCode = encodeURIComponent(code);
    const data = {
      client_assertion_type: 'urn:ietf:params:oauth:client-assertion-type:jwt-bearer',
      client_assertion: encodedClientSecret,
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: encodedCode,
      redirect_uri: oauth.CallBack,
    };
      // Note this only has to be done when working with oauth leave the object a json object
      // for all other calls (Keep is simple stupid....)
    const formBody = convertJsonToXForm(data);

    const opts = setOpts(formBody, oauth.ApiURL);
    return axios(opts);
  };
  return async (dispatch) => {
    try {
      dispatch(loadingAction(true));
      const response = await oAuthRequest();
      const { data } = response;
      if (data) {
        dispatch(getOAuthDataSuccess(data));
        dispatch(loadingAction(false));
        return response;
      }
      throw new Error('Oauth failed');
    } catch (err) {
      dispatch(getOAuthDataFailure(err));
      dispatch(loadingAction(false));
      throw err;
    }
  };
};

export const getOAuthDataWithTokenAction = (token) => {
  const oAuthRequest = async () => {
    const config = getConfig();
    const { oauth } = config;
    const encodedClientSecret = encodeURIComponent(oauth.ClientSecret);
    // const encodedCode = encodeURIComponent(token);
    const data = {
      client_assertion_type: 'urn:ietf:params:oauth:client-assertion-type:jwt-bearer',
      client_assertion: encodedClientSecret,
      grant_type: 'refresh_token',
      refresh_token: token,
      assertion: token,
      redirect_uri: oauth.CallBack,
    };
      // Note this only has to be done when working with oauth leave the object a json object
      // for all other calls (Keep is simple stupid....)
    const formBody = convertJsonToXForm(data);

    const opts = setOpts(formBody, oauth.ApiURL);
    return axios(opts);
  };
  return async (dispatch) => {
    try {
      dispatch(loadingAction(true));
      const response = await oAuthRequest();
      const { data } = response;
      if (data) {
        dispatch(getOAuthDataSuccess(data));
        dispatch(loadingAction(false));
        return response;
      }
      throw new Error('Oauth failed');
    } catch (err) {
      dispatch(getOAuthDataFailure(err));
      dispatch(loadingAction(false));
      throw err;
    }
  };
};
