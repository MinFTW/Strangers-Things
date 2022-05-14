import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import PostAddIcon from '@mui/icons-material/PostAdd';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LogoutIcon from '@mui/icons-material/Logout';

const Navbar = ({ localToken }) => {
  return (
    <div>
      <nav id='navbar-container'>
        <Link className='navbar' to='/home'>
          Home
          <HomeIcon />
        </Link>
        {localToken && (
          <Link className='navbar' to='/posts'>
            Posts
            <PostAddIcon />
          </Link>
        )}
        {localToken && (
          <Link className='navbar' to='/profile'>
            Profile
            <AccountCircleIcon />
          </Link>
        )}
        {!localToken && (
          <Link className='navbar' to='/register'>
            Create Account
            <PersonAddIcon />
          </Link>
        )}
        {localToken && (
          <button
            className='navbar'
            id='logout'
            onClick={() => {
              localStorage.removeItem('token');
              window.location.reload();
            }}
          >
            Logout
            <LogoutIcon />
          </button>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
