/* eslint-disable max-len */
import { convertJsonToXForm } from './jsonConverterUtil';

describe('Convert Object to Xform', () => {
  const mockObject = {
    client_assertion_type: 'urn:ietf:params:oauth:client-assertion-type:jwt-bearer',
    client_assertion: 'test data',
    grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
    assertion: 'test',
    redirect_uri: 'test',
  };
  it('Should convert objects to xform', () => {
    const actualString = convertJsonToXForm(mockObject);
    const expectedString = 'client_assertion_type=urn%3Aietf%3Aparams%3Aoauth%3Aclient-assertion-type%3Ajwt-bearer&client_assertion=test%20data&grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=test&redirect_uri=test';
    expect(actualString).toBe(expectedString);
  });
  it('Should handle empty objects', () => {
    const actualString = convertJsonToXForm({});
    expect(actualString).toBeFalsy();
  });
});
