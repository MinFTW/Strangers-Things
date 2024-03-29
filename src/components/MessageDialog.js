import { useState } from 'react';
import { fetchMessages } from '../api';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function MessageDialog({ token, post, setToast }) {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSendMessage = async () => {
    const result = await fetchMessages(token, post._id, content);
    result && setToast(true);

    handleClose();
  };

  return (
    <>
      <Button variant='contained' onClick={handleClickOpen}>
        Message
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Send a message</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin='dense'
            id='name'
            type='text'
            fullWidth
            multiline
            variant='outlined'
            minLength='1'
            maxLength='200'
            onChange={(event) => {
              setContent(event.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={() => {
              handleSendMessage();
            }}
          >
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
