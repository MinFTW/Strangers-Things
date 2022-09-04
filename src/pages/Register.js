import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { registerUser, loginUser } from '../api';
import Button from '@mui/material/Button';
import { Alert } from '@mui/material';
import '../css/Register.css';

const Register = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordToast, setPasswordToast] = useState(false);
  const [usernameToast, setUsernameToast] = useState(false);

  let history = useHistory();

  const checkPassword = async () => {
    if (password !== confirmPassword) {
      return setPasswordToast(true);
    }

    if (username && password === confirmPassword) {
      const result = await registerUser(username, password);

      if (result.data == null) {
        return setUsernameToast(true);
      }

      setToken(result.data.token);
      localStorage.setItem('token', result.data.token);
      alert(`${result.data.message}`);
      await loginUser(username, password);
      history.push('/posts');
    }
  };

  return (
    <div id='register-page'>
      <fieldset id='register-form'>
        <legend>Create New Account</legend>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            checkPassword();
          }}
        >
          <label htmlFor='username'>Username</label>
          <div>
            <input
              type='text'
              name='username'
              placeholder='6 to 20 characters'
              minLength='6'
              maxLength='20'
              required
              value={username}
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            ></input>
          </div>

          <div>
            <div>
              <label htmlFor='password'>Password</label>
            </div>
            <input
              type='password'
              name='password'
              placeholder='6 to 20 characters'
              minLength='6'
              maxLength='20'
              required
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            ></input>
          </div>

          <div>
            <div>
              <label htmlFor='confirmPassword'>Re-enter password</label>
            </div>
            <input
              type='password'
              name='confirmPassword'
              minLength='6'
              maxLength='20'
              required
              value={confirmPassword}
              onChange={(event) => {
                setConfirmPassword(event.target.value);
              }}
            ></input>
          </div>

          <Button
            type='submit'
            id='register-button'
            variant='contained'
            color='success'
          >
            Sign Up
          </Button>
        </form>
      </fieldset>
      {passwordToast && (
        <Alert
          severity='warning'
          variant='filled'
          className='registration-alert'
          onClose={() => {
            setPasswordToast(false);
          }}
        >
          Passwords do not match
        </Alert>
      )}
      {usernameToast && (
        <Alert
          severity='warning'
          variant='filled'
          className='registration-alert'
          onClose={() => {
            setUsernameToast(false);
          }}
        >
          Username already exists, please login instead
        </Alert>
      )}
    </div>
  );
};

export default Register;
