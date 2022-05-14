import React from 'react';
import { Navbar } from './index';
import StoreIcon from '@mui/icons-material/Store';
import { red } from '@mui/material/colors';

const Title = ({token, localToken}) => {
  return (
    <div id='title'>
      <h1>Stranger's Things</h1>
      <StoreIcon sx={{fontSize:60, color:red[500]}}/>
      <Navbar token={token} localToken={localToken}/>
    </div>
  );
};

export default Title;
