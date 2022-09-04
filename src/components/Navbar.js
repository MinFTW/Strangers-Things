import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button } from '@mui/material';
import { CurrencyExchangeIcon } from '../icons';
import '../css/Navbar.css';
import {
  HomeIcon,
  FormatListBulletedIcon,
  PostAddIcon,
  FaceIcon,
  MailIcon,
  LoginIcon,
  LogoutIcon,
} from '../icons';

const Navbar = ({ token, setToken, setUsername, setPassword }) => {
  let history = useHistory();

  return (
    <nav>
      <Link to='/home' className='title'>
        <h1>
          <CurrencyExchangeIcon
            id='icon-logo'
            sx={{ fontSize: 60, position: 'relative', top: '15px' }}
          />
          tranger's Things
        </h1>
      </Link>

      <div>
        <Link className='nav-link' to='/home'>
          Home
          <HomeIcon className='link-icons' />
        </Link>

        <Link className='nav-link' to='/posts'>
          Posts
          <FormatListBulletedIcon className='link-icons' />
        </Link>

        {!token && (
          <Link className='nav-link' to='/login'>
            Login
            <LoginIcon className='link-icons' />
          </Link>
        )}

        {token && (
          <Link className='nav-link' to='/newpost'>
            Add New Post
            <PostAddIcon className='link-icons' />
          </Link>
        )}

        {token && (
          <Link className='nav-link' to='/myposts'>
            My Posts
            <FaceIcon className='link-icons' />
          </Link>
        )}

        {token && (
          <Link className='nav-link' to='/mymessages'>
            My Messages
            <MailIcon className='link-icons' />
          </Link>
        )}

        {!token && (
          <Link id='link-register' className='nav-link' to='/register'>
            Create Account
          </Link>
        )}

        {token && (
          <Button
            id='logout-button'
            className='nav-link'
            onClick={() => {
              setToken('');
              localStorage.removeItem('token');
              localStorage.removeItem('username');
              setUsername('');
              setPassword('');
              history.push('/home');
            }}
          >
            Logout
            <LogoutIcon sx={{ marginLeft: '5px' }} />
          </Button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
