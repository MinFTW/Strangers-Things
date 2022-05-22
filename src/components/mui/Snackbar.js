import * as React from 'react';
import { useHistory } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';

export default function SimpleSnackbar() {
  const [open, setOpen] = React.useState(true);
  let history = useHistory();
    
  const handleClose = (reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    history.push('/posts');
  };

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={1500}
        onClose={handleClose}
        message="Post created successfully"
      />
    </div>
  );
}
