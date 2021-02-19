import React from 'react';
import { useSelector } from 'react-redux';
import { getPosts }  from '../../../selectors/postSelectors';
import { getComments } from '../../../selectors/commentSelector';
import Post from './Post';

const PostList = () => {
  const posts = useSelector(getPosts);
  const allComments = useSelector(getComments);

  const postElements = posts.map(post => {
    const comments = allComments
      .filter(comment => comment.index === post.index);

    return (
      <li key={post.index}>
        <Post {...post} comments={comments}/>
      </li>
    );
  });

  return (
    <ul>
      {postElements}
    </ul>
  );
};

export default PostList;
