/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/**
 * Converts an object to a suitable x-www-form-urlencoded
 * form body object.
 * @param json object to covert to x-www-form-urlencoded
 * @return x-www-form-urlencoded form object
 */
export const convertJsonToXForm = (data) => {
  let formBody = [];
  for (const property in data) {
    const encodedKey = encodeURIComponent(property);
    const encodedValue = encodeURIComponent(data[property]);
    formBody.push(`${encodedKey}=${encodedValue}`);
  }
  formBody = formBody.join('&');
  return formBody;
};

