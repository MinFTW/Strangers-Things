import React from 'react';
import { Navbar } from './index';
import { CurrencyExchangeIcon } from '../icons';
import '../css/Title.css';

const Title = ({ token, setToken }) => {
  return (
    <div id='title'>
      <h1>
        Stranger's Things
        <CurrencyExchangeIcon id='icon-logo' sx={{ fontSize: 60 }} />
      </h1>
      <Navbar token={token} setToken={setToken} />
    </div>
  );
};

export default Title;
