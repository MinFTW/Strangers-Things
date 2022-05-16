import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { registerUser, loginUser } from '../api';
import '../css/Register.css';
import { Snackbar } from './index';

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
        return alert('User already registered, please login instead');
      }

      setToken(result.data.token);
      localStorage.setItem('token', result.data.token);
      setUsername('');
      setPassword('');
      setConfirmPassword('');
      alert('Thanks for signing up!');
      await loginUser(username, password);
      history.push('/home');
    }
  };

  return (
    <div>
      <Snackbar />
      <fieldset id='register'>
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

          <button type='submit' id='registerButton'>
            Sign Up
          </button>
        </form>
      </fieldset>
    </div>
  );
};

export default Register;
