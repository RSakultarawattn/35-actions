import React from 'react';
import { useSelector } from 'react-redux';
import { getComments } from '../../../selectors/commentSelector';
import Comments from './Comments';

const CommentList = () => {
  const comment = useSelector(getComments);

  const commentElements = comment.map(comment => (
    <li key={comment.index}>
      <Comments {...comment} />
    </li>
  ));

  return (
    <ul>
      {commentElements}
    </ul>
  );
};

export default CommentList;
