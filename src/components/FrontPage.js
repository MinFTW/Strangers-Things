import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function SignInSide() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container component='main' sx={{ height: '79vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={true}
          sm={4}
          md={12}
          sx={{
            backgroundImage:
              'url(https://static.vecteezy.com/system/resources/previews/000/535/920/large_2x/neighborhood-store-building-vector.png)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light'
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </Grid>
    </ThemeProvider>
  );
}
