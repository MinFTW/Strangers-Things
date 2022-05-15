import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { registerUser } from '../api';

const Register = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const checkPassword = async (event) => {
    event.preventDefault();

    if (username && password === confirmPassword) {
      const result = await registerUser(username, password);

      setToken(result.data.token);
      localStorage.setItem('token', result.data.token);
      alert('thank you for signup for our service!');
    }

    if (password !== confirmPassword) {
      alert('passwords does not match');
    }

    setUsername('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div>
      <fieldset id='register'>
        <form
          onSubmit={(event) => {
            checkPassword(event);
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
      {localStorage.token ? <Redirect to='/home' /> : null}
    </div>
  );
};

export default Register;
