import { cloneDeep } from 'lodash';
import { reducer } from '../reducers';
import { POST_QUEUE_BUILD_SUCCESS, POST_QUEUE_BUILD_FAILURE } from '../actions/post-queue-build';

describe('Reducer for get queue build', () => {
  let state;
  beforeEach(() => {
    state = {
    };
  });
  it('should maintain state after queueing build', () => {
    const expected = cloneDeep(state);
    const action = { type: POST_QUEUE_BUILD_SUCCESS, payload: { } };
    const actual = reducer(state, action);
    expect(actual).toStrictEqual(expected);
  });
  it('should update error state based on FAILURE', () => {
    const error = 500;
    const expected = {
      error,
    };
    const action = { type: POST_QUEUE_BUILD_FAILURE, payload: { error } };
    const actual = reducer(state, action);
    expect(actual).toStrictEqual(expected);
  });
});
