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
      <Link to='/home' className='nav-logo'>
        <h1>
          <CurrencyExchangeIcon
            sx={{ fontSize: 60, position: 'relative', top: '15px' }}
          />
          tranger's Things
        </h1>
      </Link>

      <div>
        <Link className='nav-links' to='/home'>
          Home
          <HomeIcon className='nav-icons' />
        </Link>

        <Link className='nav-links' to='/posts'>
          Posts
          <FormatListBulletedIcon className='nav-icons' />
        </Link>

        {!token && (
          <Link className='nav-links' to='/login'>
            Login
            <LoginIcon className='nav-icons' />
          </Link>
        )}

        {token && (
          <Link className='nav-links' to='/createpost'>
            Create Post
            <PostAddIcon className='nav-icons' />
          </Link>
        )}

        {token && (
          <Link className='nav-links' to='/myposts'>
            My Posts
            <FaceIcon className='nav-icons' />
          </Link>
        )}

        {token && (
          <Link className='nav-links' to='/mymessages'>
            My Messages
            <MailIcon className='nav-icons' />
          </Link>
        )}

        {!token && (
          <Link id='nav-register' className='nav-links' to='/register'>
            Create Account
          </Link>
        )}

        {token && (
          <Button
            id='nav-logout'
            className='nav-links'
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
