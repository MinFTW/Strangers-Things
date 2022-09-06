import React from 'react';
import { MessageDialog } from '../components';

const Search = ({ token, username, posts, searchTerm, setToast }) => {
  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm) ||
      post.description.toLowerCase().includes(searchTerm) ||
      post.location.toLowerCase().includes(searchTerm) ||
      post.author.username.toLowerCase().includes(searchTerm)
  );

  return filteredPosts.map((post) => {
    return (
      <div className='search-results' key={post._id}>
        <p>Item: {post.title}</p>
        <p>Description: {post.description}</p>
        <p>Price: {post.price}</p>
        <p>
          Location:
          {post.location === '[On Request]' ? 'On Request' : post.location}
        </p>
        <p>Username: {post.author.username}</p>
        {token && post.author.username !== username && (
          <MessageDialog token={token} post={post} setToast={setToast} />
        )}
      </div>
    );
  });
};

export default Search;
