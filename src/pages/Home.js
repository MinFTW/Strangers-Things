import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Home = () => {
  return (
    <Container maxWidth={false} className='home-image'>
      <Box
        sx={{
          bgcolor: '#f9f3ee',
          height: '79vh',
          backgroundImage:
            'url(https://static.vecteezy.com/system/resources/previews/000/535/920/large_2x/neighborhood-store-building-vector.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
    </Container>
  );
};

export default Home;
