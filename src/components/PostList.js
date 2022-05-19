import React, { useEffect } from 'react';
import { fetchPosts } from '../api';
import { MessageDialog } from './index';
import '../css/PostList.css';

const PostList = ({ token, posts, setPosts }) => {
  useEffect(() => {
    const renderPosts = async () => {
      const result = await fetchPosts();
      setPosts(result);
    };
    renderPosts();
  }, []);

  const handlePosts = () => {
    return posts.reverse().map((post) => {
      return (
        <div key={post._id} className='posts'>
          <h3>{post.title}</h3>
          <p>Description: {post.description}</p>
          <br />
          <p>Price: {post.price}</p>
          <p>
            Location:{' '}
            {post.location === '[On Request]' ? 'On Request' : post.location}
          </p>
          <p>Delivery: {post.willDeliver ? 'yes' : 'no'}</p>
          <br />
          <p>User: {post.author.username}</p>
          <p>
            Created:{' '}
            {post.createdAt.slice(5, 10) + '-' + post.createdAt.slice(0, 4)}
          </p>
          
          {token && <MessageDialog token={token} post={post}/>}
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
