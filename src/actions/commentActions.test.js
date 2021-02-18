import { createComment, CREATE_COMMENT } from './commentActions';

describe('comment actions', () => {
  it('creates an action to CREATE_COMMENT', () => {
    const action = createComment(0);

    expect(action).toEqual({
      type: CREATE_COMMENT,
      payload: { index: 0 }
    });
  });
});
