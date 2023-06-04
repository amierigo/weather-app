import React from 'react';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';

import cloud from '../../assets/images/cloud.png';

const NavBar = () => {
  return (
    <AppBar
      component='nav'
      style={{
        background: '#68C4C1',
        height: '100px',
        display: 'flex',
        justifyContent: 'center',
        padding: '0px 2rem',
      }}
    >
      <Toolbar>
        <Box mr={1}>
          <img src={cloud} height={65} width={75} />
        </Box>
        <Typography
          variant='h6'
          component='div'
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
          Weather Forecast
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Button sx={{ color: '#fff' }}>Logout</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
