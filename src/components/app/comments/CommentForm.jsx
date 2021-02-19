import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createComment } from '../../../actions/commentActions';


const CommentForm = () =>  {
  const dispatch = useDispatch();

  const [comment, setComment] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(createComment({ comment }));
  };
    
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Comment"
        value={comment}
        onChange={({ target }) => setComment(
          target.value
        )}
      />
      <button>Comment</button>
    </form>
        
  );
};

export default CommentForm;
