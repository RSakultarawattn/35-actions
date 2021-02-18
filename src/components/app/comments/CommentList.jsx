import React from 'react';
import { useSelector } from 'react-redux';
import { getComments } from '../../../selectors/commentSelector';
import Comment from './Comment';

const CommentList = () => {
  const comments = useSelector(getComments);

  const commentElements = comments.map(comment => (
    <li key={comment.index}>
      <Comment {...comment} />
    </li>
  ));

  return (
    <ul>
      {commentElements}
    </ul>
  );
};

export default CommentList;