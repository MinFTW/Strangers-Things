import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button } from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import PostAddIcon from '@mui/icons-material/PostAdd';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

const Navbar = ({ isLoggedin, setIsLoggedin }) => {
  return (
    <nav>
      <Link className='navbar' to='/home'>
        Home
        <HomeIcon />
      </Link>
      {!isLoggedin && (
        <Link className='navbar' to='/login'>
          Login
          <LoginIcon />
        </Link>
      )}
      {isLoggedin && (
        <Link className='navbar' to='/newpost'>
          Posts
          <PostAddIcon />
        </Link>
      )}
      {isLoggedin && (
        <Link className='navbar' to='/profile'>
          Profile
          <AccountCircleIcon />
        </Link>
      )}
      {!isLoggedin && (
        <Link className='navbar' to='/register'>
          Create Account
          <PersonAddIcon />
        </Link>
      )}
      {isLoggedin && (
        <Button
          className='navbar'
          id='logout'
          onClick={() => {
            setIsLoggedin('');
            localStorage.removeItem('token');
            <Redirect to='/' />;
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
