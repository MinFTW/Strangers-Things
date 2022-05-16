import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { fetchProfile, deletePost } from '../api';
import '../css/Profile.css';

const Profile = ({ token, localStorageToken }) => {
  const [posts, setPosts] = useState([]);
  const [messages, setMessages] = useState([]);

  const handleDeletePost = async (post) => {
    const postId = post._id;
    const confirmDelete = confirm('Delete Post?');
    if (confirmDelete) {
      await deletePost(postId, token);
    }
  };

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetchProfile(localStorageToken);
      response.data && setPosts(response.data.posts);
      return posts;
    };
    getPosts();

    const getMessages = async () => {
      const response = await fetchProfile(localStorageToken);
      response.data && setMessages(response.data.messages);
      return messages;
    };
    getMessages();
  }, []);

  return (
    <div id='profile'>
      <h2>Your Posts</h2>
      {posts.map((post, index) => {
        if (post.active) {
          return (
            <div key={index} id='user-posts'>
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
        }
      })}

      <div>
        <h2>Your Messages</h2>
        {messages.length === 0 ? 'You have no messages' : messages}
      </div>
    </div>
  );
};

export default Profile;
