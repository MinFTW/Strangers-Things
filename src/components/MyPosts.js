import React, { useEffect, useState } from 'react';
import { fetchProfile, deletePost } from '../api';
import { Button } from '@mui/material';
import '../css/MyPosts.css';

const MyPosts = ({ token, localStorageToken }) => {
  const [userPosts, setUserPosts] = useState([]);

  const fetchUserPosts = async () => {
    const response = await fetchProfile(localStorageToken);
    setUserPosts(response.data.posts);
  };

  const handleDeletePost = async (userPosts) => {
    const postId = userPosts._id;
    const confirmDelete = confirm('Delete Post?');
    if (confirmDelete) {
      await deletePost(token, postId);
      fetchUserPosts();
    }
  };

  useEffect(() => {
    fetchUserPosts();
  }, []);

  return (
    <div id='myposts-page'>
      <h2 id='myposts-title'>My Posts</h2>
      <div id='myposts-container'>
        {userPosts.map((post, index) => {
          if (post.active) {
            return (
              <div key={index} id='user-posts-active'>
                <h2>Active Post</h2>
                <p>Title: {post.title}</p>
                <p>Description: {post.description}</p>
                <br />
                <p>Price: {post.price}</p>
                <p>
                  Location:{' '}
                  {post.location === '[On Request]'
                    ? 'On Request'
                    : post.location}
                </p>
                <p>Delivery: {post.willDeliver ? 'yes' : 'no'}</p>
                <p>Created: {post.createdAt.slice(0, 10)}</p>

                <Button
                  id='delete-post-button'
                  type='submit'
                  variant='contained'
                  color='error'
                  onClick={() => {
                    handleDeletePost(post);
                  }}
                >
                  Delete Post
                </Button>
              </div>
            );
          } else {
            return (
              <div key={index} id='user-posts-deleted'>
                <h2>Deleted Post</h2>
                <p>Title: {post.title}</p>
                <p>Description: {post.description}</p>
                <br></br>
                <p>Price: {post.price}</p>
                <p>
                  Location:{' '}
                  {post.location === '[On Request]'
                    ? 'On Request'
                    : post.location}
                </p>
                <p>Delivery: {post.willDeliver ? 'yes' : 'no'}</p>
                <p>Created: {post.createdAt.slice(0, 10)}</p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default MyPosts;
