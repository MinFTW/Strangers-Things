import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import { fetchProfile, deletePost } from '../api';
import { UpdateDialog } from './index';
import { Button } from '@mui/material';
import '../css/MyPosts.css';

const MyPosts = ({ token, localStorageToken }) => {
  const [activePosts, setActivePosts] = useState([]);
  const [deletedPosts, setDeletedPosts] = useState([]);

  const handleDeletePost = async (userPosts) => {
    const postId = userPosts._id;
    const confirmDelete = confirm('Delete Post?');
    if (confirmDelete) {
      await deletePost(token, postId);
      getActivePosts();
      getDeletedPosts()
    }
  };

  const getActivePosts = async () => {
    const response = await fetchProfile(localStorageToken);
    const activePosts = response.data.posts;

    const filteredPosts = activePosts.filter((post) => post.active === true);

    setActivePosts(filteredPosts);
  };

  const handleActivePosts = () => {
    return (
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 650, overflow: 'hidden' }}
          aria-label='simple table'
        >
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }} align='right'>
                Item for Sale
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold' }} align='right'>
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
                Date Posted
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {activePosts.reverse().map((post) => (
              <TableRow
                key={post._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align='right'>{post.title}</TableCell>
                <TableCell align='right'>{post.description}</TableCell>
                <TableCell align='right'>{post.price}</TableCell>
                <TableCell align='right'>{post.location}</TableCell>
                <TableCell align='right'>
                  {' '}
                  {post.willDeliver ? 'yes' : 'no'}
                </TableCell>
                <TableCell align='right'>
                  {post.createdAt.slice(5, 10) +
                    '-' +
                    post.createdAt.slice(0, 4)}
                </TableCell>
                <TableCell align='right'>
                  {
                    <UpdateDialog
                      post={post}
                      token={token}
                      getActivePosts={getActivePosts}
                    />
                  }
                </TableCell>
                <TableCell align='right'>
                  {
                    <Button
                      id='delete-post-button'
                      type='submit'
                      variant='contained'
                      color='error'
                      onClick={() => {
                        handleDeletePost(post);
                      }}
                    >
                      Delete
                    </Button>
                  }
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  const getDeletedPosts = async () => {
    const response = await fetchProfile(localStorageToken);
    const activePosts = response.data.posts;

    const filteredPosts = activePosts.filter((post) => post.active === false);

    setDeletedPosts(filteredPosts);
  };

  const handleDeletedPosts = () => {
    return (
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 650, overflow: 'hidden' }}
          aria-label='simple table'
        >
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }} align='right'>
                Item for Sale
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold' }} align='right'>
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
                Date Posted
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {deletedPosts.reverse().map((post) => (
              <TableRow
                key={post._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align='right'>{post.title}</TableCell>
                <TableCell align='right'>{post.description}</TableCell>
                <TableCell align='right'>{post.price}</TableCell>
                <TableCell align='right'>{post.location}</TableCell>
                <TableCell align='right'>
                  {' '}
                  {post.willDeliver ? 'yes' : 'no'}
                </TableCell>
                <TableCell align='right'>
                  {post.createdAt.slice(5, 10) +
                    '-' +
                    post.createdAt.slice(0, 4)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  useEffect(() => {
    getActivePosts();
    getDeletedPosts();
  }, []);

  return (
    <div id='mymessages-page'>
      <h2>Active Posts</h2>
      {activePosts.length === 0 ? (
        <p id='no-posts'>You have no posts</p>
      ) : (
        handleActivePosts()
      )}
      <h2>Deleted Posts</h2>
      {deletedPosts.length === 0 ? (
        <p id='no-posts'>You have no posts</p>
      ) : (
        handleDeletedPosts()
      )}
    </div>
  );
};

export default MyPosts;
