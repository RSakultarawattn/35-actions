import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../../actions/postActions';
import { deleteComments } from '../../../actions/commentActions';
import CommentForm from '../comments/CommentForm';
import CommentList from '../comments/CommentList';


const Post = ({ index, title, body, comments }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deletePost(index));
    dispatch(deleteComments(index));

  };

  return (
    <>
      
      <dl>
        <dt>Title</dt>
        <dd>{title}</dd>

        <dt>Body</dt>
        <dd>{body}</dd>
        <button onClick={handleClick}>Delete</button>
      </dl>
      <CommentForm index={index}/>
      <CommentList comments={comments}/>
          
        
     
    </>
  );
};

Post.propTypes = {
  index: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape({
    index: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  }))
};

export default Post;
