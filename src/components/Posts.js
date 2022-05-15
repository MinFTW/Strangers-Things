import React, { Fragment } from 'react';

const PostList = ({ posts }) => {
  return (
    <div id='post-list'>
      <h2>Items</h2>
      {posts.map((post) => {
        return (
          <div key={post._id} className='posts'>
            <h3>{post.title}</h3>
            <div>Description: {post.description}</div>
            <br />
            <div>Price: {post.price}</div>
            <div>Location: {post.location === '[On Request]' ? 'On Request' : post.location}</div>
            <div>Delivery: {post.willDeliver ? 'yes' : 'no'}</div>
            <div>User: {post.author.username}</div>
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
