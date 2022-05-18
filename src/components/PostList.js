import React, { useEffect } from 'react';
import { fetchPosts } from '../api';
import '../css/PostList.css';

const PostList = ({ posts, setPosts }) => {
  useEffect(() => {
    const renderPosts = async () => {
      const result = await fetchPosts();
      setPosts(result);
    };
    renderPosts();
  }, []);

  const handlePosts = () => {
    return posts.map((post) => {
      return (
        <div key={post._id} className='posts'>
          <h3>{post.title}</h3>
          <div>Description: {post.description}</div>
          <br />
          <div>Price: {post.price}</div>
          <div>
            Location:{' '}
            {post.location === '[On Request]' ? 'On Request' : post.location}
          </div>
          <div>Delivery: {post.willDeliver ? 'yes' : 'no'}</div>
          <br />
          <div>User: {post.author.username}</div>
          <div>Created: {post.createdAt.slice(0, 10)}</div>
        </div>
      );
    });
  };

  return (
    <div id='post-list'>
      <h2>Items for sale</h2>
      {handlePosts()}
    </div>
  );
};

export default PostList;
