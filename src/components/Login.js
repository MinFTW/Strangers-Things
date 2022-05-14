import React, { useState } from 'react';
import { loginUser } from '../api';
import { Logout } from './index';

const Login = ({ setToken, token, localToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div id='loginfield'>
      <h4>Log In</h4>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          const result = await loginUser(username, password);

          setToken(result.data.token);
          localStorage.setItem('token', result.data.token);
          setUsername('');
          setPassword('');
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
        <button id='login' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
