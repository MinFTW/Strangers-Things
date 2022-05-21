import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { registerUser, loginUser } from '../api';
import Button from '@mui/material/Button';
import '../css/Register.css';

const Register = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  let history = useHistory();

  const checkPassword = async () => {
    if (password !== confirmPassword) {
      return alert('Passwords do not match');
    }

    if (username && password === confirmPassword) {
      const result = await registerUser(username, password);

      if (result.data == null) {
        return alert(`${result.error.message}`);
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
    </div>
  );
};

export default Register;
