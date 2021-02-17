import { createPost, CREATE_POST } from './postActions';

describe('post actions', () => {
  it('creates a post action', () => {
    const action = createPost({
      title: 'life and stuff',
      body: 'things and stuff about life and stuff'        
    });

    expect(action).toEqual({
      type: CREATE_POST,
      payload: { title: 'life and stuff', 
        body: 'things and stuff about life and stuff' }
    });
   

  });
});

