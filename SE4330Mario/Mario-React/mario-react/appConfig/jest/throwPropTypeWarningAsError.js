/* eslint-disable */
import sinon from 'sinon';

const propTypeWarningMatch = sinon.match(warning => (
  typeof (warning) === 'string' && warning.indexOf('Warning: Failed prop type:') > -1
));

sinon.stub(console, 'error');

console.error.withArgs(propTypeWarningMatch).callsFake((warning) => {
  throw new TypeError(warning);
});

console.error.callThrough();
