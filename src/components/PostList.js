import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useState, useEffect } from 'react';
import { fetchPosts } from '../api';
import { MessageDialog } from './index';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import '../css/PostList.css';

const PostList = ({ token, posts, setPosts, username }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    const filteredPosts = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm) ||
        post.description.toLowerCase().includes(searchTerm) ||
        post.location.toLowerCase().includes(searchTerm) ||
        post.author.username.toLowerCase().includes(searchTerm)
    );
    return filteredPosts.map((post, index) => {
      return (
        <div id='searched-posts' key={index}>
          <p>Item: {post.title}</p>
          <p>Description: {post.description}</p>
          <p>Price: {post.price}</p>
          <p>
            Location:{' '}
            {post.location === '[On Request]' ? 'On Request' : post.location}
          </p>
          <p>Username: {post.author.username}</p>
          <MessageDialog />
        </div>
      );
    });
  };

  const renderAllPosts = () => {
    return (
      <Paper sx={{ width: '100%', height: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: '100%' }}>
          <Table stickyHeader aria-label='sticky table'>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>Item for Sale</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align='left'>
                  Description
                </TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align='right'>
                  Price
                </TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align='right'>
                  Location
                </TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align='right'>
                  Delivery
                </TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align='right'>
                  Posted by
                </TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align='right'>
                  Date Posted
                </TableCell>
                {token && (
                  <TableCell sx={{ fontWeight: 'bold' }} align='right'>
                    Send a Message
                  </TableCell>
                )}
              </TableRow>
            </TableHead>

            <TableBody>
              {posts.reverse().map((post) => (
                <TableRow
                  key={post._id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component='th' scope='row'>
                    {post.title}
                  </TableCell>
                  <TableCell align='left'>{post.description}</TableCell>
                  <TableCell align='right'>{post.price}</TableCell>
                  <TableCell align='right'>
                    {post.location === '[On Request]'
                      ? 'On Request'
                      : post.location}
                  </TableCell>
                  <TableCell align='right'>
                    {post.willDeliver ? 'yes' : 'no'}
                  </TableCell>
                  <TableCell align='right'>{post.author.username}</TableCell>
                  <TableCell align='right'>
                    {post.createdAt.slice(5, 10) +
                      '-' +
                      post.createdAt.slice(0, 4)}
                  </TableCell>
                  <TableCell align='right'>
                    {token && post.author.username !== username && (
                      <MessageDialog token={token} post={post} />
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
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
    <div id='post-list-container'>
      <span id='search-container'>
        <Box
          component='form'
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete='off'
          id='search-box'
        >
          <TextField
            id='outlined-basic'
            label='Search Posts'
            variant='outlined'
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </Box>
      </span>
      {searchTerm ? handleSearch() : renderAllPosts()}
    </div>
  );
};

export default PostList;
