import { useState } from 'react';
import { updatePost } from '../../api';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function FormDialog({ token, post, fetchUserPosts }) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(post.title);
  const [description, setDescription] = useState(post.description);
  const [price, setPrice] = useState(post.price);
  const [location, setLocation] = useState(post.location);
  const [willDeliver, setWillDeliver] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdate = async () => {
    try {
      await updatePost(
        token,
        post._id,
        title,
        description,
        price,
        location,
        willDeliver
      );
    } catch (error) {
      console.error(error);
    }

    alert('Post updated successfully');
    handleClose();
    fetchUserPosts();
  };

  const handleCheckbox = () => {
    willDeliver === false ? setWillDeliver(true) : setWillDeliver(false);
  };

  const CheckboxLabels = () => {
    return (
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked={false}
              onChange={(event) => {
                handleCheckbox(event);
              }}
            />
          }
          label='Will Deliver?'
        />
      </FormGroup>
    );
  };

  return (
    <div>
      <Button
        id='dialog-update-post'
        variant='contained'
        onClick={handleClickOpen}
      >
        Update
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Post</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin='dense'
            id='title'
            label='Title'
            type='text'
            fullWidth
            variant='outlined'
            minLength='1'
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </DialogContent>

        <DialogContent>
          <TextField
            autoFocus
            margin='dense'
            id='description'
            label='Description'
            type='text'
            fullWidth
            variant='outlined'
            minLength='1'
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
        </DialogContent>

        <DialogContent>
          <TextField
            autoFocus
            margin='dense'
            id='price'
            label='Price'
            type='text'
            fullWidth
            variant='outlined'
            minLength='1'
            value={price}
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />
        </DialogContent>

        <DialogContent>
          <TextField
            autoFocus
            margin='dense'
            id='location'
            label='Location'
            type='text'
            fullWidth
            variant='outlined'
            minLength='1'
            value={location}
            onChange={(event) => {
              setLocation(event.target.value);
            }}
          />
        </DialogContent>

        <DialogContent>{CheckboxLabels()}</DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={() => {
              handleUpdate();
            }}
          >
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
