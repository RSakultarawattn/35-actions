import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../../actions/postActions';
import CommentForm from '../comments/CommentForm';
import CommentList from '../comments/CommentList';


const Post = ({ title, body }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deletePost(title));
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
      <CommentForm/>
      <CommentList/>
          
        
     
    </>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

export default Post;
