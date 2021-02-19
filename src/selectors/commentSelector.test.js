import { getComments } from './commentSelector';

describe('comment selectors', () => {
  
  it('selects the comments', () => {
    const state = {
      comments: {
        comments: [{
          comments: 'wow'
        }]
      }
    };
    

    const comments = getComments(state);

    expect(comments).toEqual([{ 
      comments: 'wow'
    }]);
  });
});

