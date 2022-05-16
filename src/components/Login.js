import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { loginUser } from '../api';
import '../css/Login.css';

const Login = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  let history = useHistory();

  return (
    <fieldset id='loginfield'>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          const result = await loginUser(username, password);

          if (result.data != null) {
            setToken(result.data.token);
            localStorage.setItem('token', result.data.token);
            alert('Login successful');
            history.push('/home');
          } else {
            alert(`Username or password is incorrect, please try again`);
          }
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
        <button id='login-button' type='submit'>
          Login
        </button>
      </form>
    </fieldset>
  );
};

export default Login;
