import { getPosts } from './postSelectors';

describe('post selectors', () => {
  it('selects the posts from state', () => {
    const state = {
      posts: {
        posts: {
          '0': {
            title: 'life and stuff',
            body: 'things and stuff about life and stuff'
          }
        }
      }
    };

    const posts = getPosts(state);

    expect(posts).toEqual([{
      index: '0',
      title: 'life and stuff',
      body: 'things and stuff about life and stuff'
    }]);
  });
});
