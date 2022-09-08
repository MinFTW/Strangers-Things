import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Outbox = ({ outbox }) => {
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 650, overflow: 'hidden' }}
        aria-label='simple table'
      >
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }} align='left'>
              For Item
            </TableCell>
            <TableCell sx={{ fontWeight: 'bold' }} align='left'>
              Message
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {outbox.map((message) => (
            <TableRow
              key={message._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align='left'>{message.post.title}</TableCell>
              <TableCell align='left'>{message.content}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Outbox;
