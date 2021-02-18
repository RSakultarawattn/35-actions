import React from 'react';
import PostList from './posts/PostList';
import PostForm from './form/PostForm';
import '../../components/App.css';

function App() {
  return (
    <>
      <PostForm />
      <PostList />
    </>
  );
}
export default App;
