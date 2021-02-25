/**
 * Parses the json web token for name id
 * @param {*} token oauth token to parse
 * @return parsed out object from toekn
 */
export const parseJwt = (token) => {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => {
    return `%${(`00${c.charCodeAt(0).toString(16)}`).slice(-2)}`;
  }).join(''));

  return JSON.parse(jsonPayload);
};

/**
 * Format a phone number to (###) ###-####
 * @param {string} phoneNumberStr unformatted phone number
 */
export const getQueryString = () => {
  const name = window.location.href;
  const rawQueryStringArr = name.split('?');
  if (rawQueryStringArr.length >= 2) {
    const queryStrings = rawQueryStringArr[1].split('&');
    return queryStrings;
  }
  // No query string
  return null;
};
