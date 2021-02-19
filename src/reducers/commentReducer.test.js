import { createComment, deleteComment, deleteComments } from '../actions/commentActions';
import reducer from './commentReducer';

describe('comment reducer', () => {
  it('handles the CREATE_COMMENT action', () => {
    const state = {
      comments: []
    };

    const action = createComment({
      index: '1',
      body: 'great comment'
    });

    const updatedState = reducer(state, action);

    expect(updatedState)
      .toEqual({
        comments: [{
          index: '1',
          body: 'great comment'
        }]
      });

  });
});

it('deletes a comment', () => {
  const state = {
    comments: [{
      index: '1',
      body: 'really cool comment'
    }]
  };

  const action = deleteComment('really cool comment');

  const updatedState = reducer(state, action);

  expect(updatedState).toEqual({
    comments: []
  });
});

