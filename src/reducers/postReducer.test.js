import { createPost, deletePost } from '../actions/postActions';
import reducer from './postReducer';

describe('post reducer', () => {
  it('add a post with CREATE_POST action', () => {
    const state = {
      posts: []
    };
        
    const action = createPost({
      title: 'life and stuff',
      body: 'things and stuff about life and stuff' 
    });

    const newState = reducer(state, action);

    expect(newState).toEqual({
      posts: {
        '0': {
          title: 'life and stuff',
          body: 'things and stuff about life and stuff'
        }
      }
    });
  });

  it('handles the DELETE_POST action', () => {
    const state = {
      posts: {
        '0': {
          title: 'life and stuff',
          body: 'things and stuff about life and stuff'
        }
      }
    };

    const action = deletePost('0');
    const newState = reducer(state, action);

    expect(newState).toEqual({
      posts: {}
    });
  });
});
