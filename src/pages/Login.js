import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { loginUser } from '../api';
import { Alert } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Login = ({ setToken, setUsername }) => {
  const [toast, setToast] = useState(false);
  let history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const input = new FormData(event.currentTarget);
    const username = input.get('username');
    const password = input.get('password');
    const result = await loginUser(username, password);

    if (result.data) {
      setToken(result.data.token);
      setUsername(username);
      localStorage.setItem('username', username);
      localStorage.setItem('token', result.data.token);
      history.push('/mymessages');
    } else {
      setToast(true);
    }
  };

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: '73vh',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin='normal'
            required
            fullWidth
            id='username'
            label='Username'
            name='username'
            autoComplete='username'
            autoFocus
            inputProps={{
              minLength: 6,
              maxLength: 20,
            }}
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
            inputProps={{
              minLength: 6,
              maxLength: 20,
            }}
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to='/register' variant='body2'>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
          {toast && (
            <Alert
              id='login-alert'
              severity='warning'
              variant='filled'
              sx={{ marginTop: '1rem' }}
              onClose={() => {
                setToast(false);
              }}
            >
              Username or password is incorrect, please try again
            </Alert>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
