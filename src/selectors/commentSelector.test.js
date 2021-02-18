import { getComments } from './commentSelector';

describe('comment selectors', () => {
  
  it('select the comments', () => {
    const state = {
      comments: [{}]
    };

    expect(getComments(state)).toEqual(1);
  });
});
