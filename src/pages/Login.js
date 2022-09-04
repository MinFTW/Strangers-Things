import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { loginUser } from '../api';
import Button from '@mui/material/Button';
import { Alert } from '@mui/material';
import '../css/Login.css';

const Login = ({ setToken, username, setUsername, password, setPassword }) => {
  const [toast, setToast] = useState(false);
  let history = useHistory();

  const handleLogin = async () => {
    const result = await loginUser(username, password);

    if (result.data) {
      setToken(result.data.token);
      localStorage.setItem('username', username);
      localStorage.setItem('token', result.data.token);
      history.push('/mymessages');
    } else {
      setToast(true);
    }
  };

  return (
    <div id='login-page'>
      <fieldset id='login-form'>
        <legend>Login</legend>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            handleLogin();
          }}
        >
          <label>Username</label>
          <div>
            <input
              type='text'
              minLength='6'
              maxLength='20'
              required
              value={username}
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            ></input>
          </div>

          <label>Password</label>
          <div>
            <input
              type='password'
              minLength='6'
              maxLength='20'
              required
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            ></input>
          </div>

          <Button
            id='login-button'
            type='submit'
            variant='contained'
            color='success'
          >
            Login
          </Button>
        </form>
      </fieldset>
      {toast && (
        <Alert id='login-alert' severity='warning' variant='filled' onClose={() => {setToast(false)}}>
          Username or password is incorrect, please try again
        </Alert>
      )}
    </div>
  );
};

export default Login;
