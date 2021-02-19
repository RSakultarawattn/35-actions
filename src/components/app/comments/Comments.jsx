import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Post from '../posts/Post';
import { commentActions } from '../../../actions/commentActions';

const Comments = ({ comments }) => {
  const deleteComment = useSelector(deleteComment);
  

  const handleClick = () => {
    useDispatch(deleteComment(comments));
  };

  return (
    <>

      <dl>
        <dt>Comment</dt>
        <dd>{comments}</dd>
        <button onClick={handleClick}>Delete</button>
      </dl>
    </>
  );
};

Post.propTypes = {
  comments: PropTypes.string.isRequired
};

export default Comments;
