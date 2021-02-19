import React from 'react';
import { useSelector } from 'react-redux';
import { getPosts }  from '../../../selectors/postSelectors';
import CommentList from '../comments/CommentList';
import Post from './Post';

const PostList = () => {
  const posts = useSelector(getPosts);

  const postElements = posts.map(post => (
    <li key={post.title}>
      <Post {...post} />
    </li>
  ));

  return (
    <ul>
      {postElements}
    </ul>
  );
};

export default PostList;
