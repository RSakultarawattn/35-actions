export const CREATE_COMMENT = 'CREATE_COMMENT';
export const createComment = (index) => ({
  type: CREATE_COMMENT, 
  payload: { index }
});

export const DELETE_COMMENT = 'DELETE_COMMENT';
export const deleteComment = (index, comment) => ({
  type: DELETE_COMMENT,
  payload: { index, comment }
});
