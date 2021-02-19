import React from 'react';
import PostList from './posts/PostList';
import PostForm from './form/PostForm';
import '../../components/App.css';

function App() {

  return (
    
    <>
      <h1>Bloggity Bloggity Blog Blog</h1>
      <PostForm />
      <PostList />
    </>
  );
}
export default App;
