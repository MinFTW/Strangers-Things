import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Button } from '@mui/material';
import '../css/Navbar.css';
import {
  HomeIcon,
  PostAddIcon,
  PersonAddIcon,
  FaceIcon,
  MailIcon,
  LoginIcon,
  LogoutIcon,
} from '../icons';

const Navbar = ({ token, setToken }) => {
  let history = useHistory();

  return (
    <nav>
      <Link className='navbar' to='/home'>
        Home
        <HomeIcon id='icon-home' />
      </Link>

      {!token && (
        <Link className='navbar' to='/login'>
          Login
          <LoginIcon id='icon-login' />
        </Link>
      )}

      {token && (
        <Link className='navbar' to='/newpost'>
          Add New Post
          <PostAddIcon id='icon-addpost' />
        </Link>
      )}

      {token && (
        <Link className='navbar' to='/myposts'>
          My Posts
          <FaceIcon id='icon-myposts' />
        </Link>
      )}

      {token && (
        <Link className='navbar' to='/mymessages'>
          My Messages
          <MailIcon id='icon-mymessages' />
        </Link>
      )}

      {!token && (
        <Link className='navbar' to='/register'>
          Create Account
          <PersonAddIcon id='icon-register' />
        </Link>
      )}

      {token && (
        <Button
          className='navbar'
          id='logout'
          onClick={() => {
            setToken('');
            localStorage.removeItem('token');
            history.push('/home');
          }}
        >
          Logout
          <LogoutIcon />
        </Button>
      )}
    </nav>
  );
};

export default Navbar;
