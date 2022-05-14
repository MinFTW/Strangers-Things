import React from 'react';

const PostList = ({ posts }) => {
  return (
    <div id='posts'>
      <h2>Posts</h2>
      {posts.map((post) => {
        return (
          <div key={post._id} className='posts'>
            <h3>{post.title}</h3>
            <div>Price: {post.price}</div>
            <div>User: {post.author.username}</div>
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
