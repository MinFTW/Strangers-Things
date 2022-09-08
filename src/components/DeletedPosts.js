import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const DeletedPosts = ({ deletedPosts }) => {
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
                {post.createdAt.slice(5, 10) + '-' + post.createdAt.slice(0, 4)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DeletedPosts;
