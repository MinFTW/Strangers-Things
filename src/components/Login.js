import React, { useState } from 'react';
import { loginUser } from '../api';

const Login = ({ setIsLoggedin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <fieldset id='loginfield'>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          const result = await loginUser(username, password);

          setIsLoggedin(result.data.token);
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
          Login
        </button>
      </form>
    </fieldset>
  );
};

export default Login;
