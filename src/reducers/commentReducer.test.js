import { createComment } from '../actions/commentActions';
import reducer from './commentReducer';

describe('comment reducer', () => {
  it('handles the CREATE_COMMENT action', () => {
    const state = {
      comments: []
    };

    const action = createComment([]);

    const newState = reducer(state, action);

    expect(newState)
      .toEqual({
        comments: []
      });

  });
});
