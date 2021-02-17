import { countPosts, getPosts } from './postSelectors';

describe('post selectors', () => {
  it('select the list of posts from state', () => {
    const state = {
      posts: [{ title: 'life and stuff', 
        body: 'things and stuff about life and stuff' }]
    };

    const posts = getPosts(state);

    expect(posts).toEqual([{ title: 'life and stuff', 
      body: 'things and stuff about life and stuff' }]);
  });

  it('select the number of posts', () => {
    const state = {
      posts: [{ title: 'life and stuff', 
        body: 'things and stuff about life and stuff' }]
    };

    expect(countPosts(state)).toEqual(1);
  });
});
