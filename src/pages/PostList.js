import * as React from 'react';
import { useState, useEffect } from 'react';
import { fetchPosts } from '../api';
import { Search, Posts } from '../components';
import { Alert } from '@mui/material';
import '../css/PostList.css';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const PostList = ({ token, posts, setPosts, username }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [toast, setToast] = useState(false);

  const handleSearch = () => {
    return (
      <Search
        token={token}
        username={username}
        posts={posts}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setToast={setToast}
      />
    );
  };

  const handlePosts = () => {
    return (
      <Posts
        token={token}
        username={username}
        posts={posts}
        setToast={setToast}
      />
    );
  };

  useEffect(() => {
    const renderPosts = async () => {
      const result = await fetchPosts();
      setPosts(result);
    };
    renderPosts();
  }, []);

  return (
    <div id='postlist-container'>
      <div>
        <Box
          id='search-box'
          component='form'
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete='off'
        >
          <TextField
            label='Search Posts'
            variant='outlined'
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
          {toast && (
            <Alert
              severity='success'
              variant='filled'
              onClose={() => {
                setToast(false);
              }}
            >
              Message Sent
            </Alert>
          )}
        </Box>
      </div>
      {searchTerm ? handleSearch() : handlePosts()}
    </div>
  );
};

export default PostList;
