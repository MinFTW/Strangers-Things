import React from 'react';
import { red } from '@mui/material/colors';
import StoreIcon from '@mui/icons-material/Store';
import { Navbar } from './index';

const Title = ({ isLoggedin, setIsLoggedin }) => {
  return (
    <div id='title'>
      <h1>
        Stranger's Things
        <StoreIcon id='icon-logo' sx={{ fontSize: 60, color: red[500] }} />
      </h1>
      <Navbar isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin} />
    </div>
  );
};

export default Title;
