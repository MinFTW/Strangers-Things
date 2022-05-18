import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { loginUser } from '../api';
import Button from '@mui/material/Button';
import '../css/Login.css';

const Login = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  let history = useHistory();

  const handleLogin = async () => {
    const result = await loginUser(username, password);

    if (result.data != null) {
      setToken(result.data.token);
      localStorage.setItem('token', result.data.token);
      alert('Login successful');
      history.push('/home');
    } else {
      alert(`Username or password is incorrect, please try again`);
    }
  }

  return (
    <div id='login-page'>
      <fieldset id='login-form'>
        <legend>Login</legend>
        <form
          onSubmit={async (event) => {
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
    </div>
  );
};

export default Login;
