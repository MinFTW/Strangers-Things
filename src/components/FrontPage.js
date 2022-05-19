import * as React from 'react';
import Grid from '@mui/material/Grid';

export default function SignInSide() {
  return (
    <Grid container component='main' sx={{ height: '79vh' }}>
      <Grid
        item
        xs={true}
        sm={4}
        md={12}
        sx={{
          backgroundImage:
            'url(https://static.vecteezy.com/system/resources/previews/000/535/920/large_2x/neighborhood-store-building-vector.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
    </Grid>
  );
}
