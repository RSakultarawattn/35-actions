import { getComments } from './commentSelector';

describe('comment selectors', () => {
  
  it('select the comments', () => {
    const state = {
      comments: [{ title: 'life and stuff', 
      }]
    };

    expect(getComments(state)).toEqual([{ title: 'life and stuff', 
    }]);
  });
});
