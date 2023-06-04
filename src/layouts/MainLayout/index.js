import * as React from 'react';
import PropTypes from 'prop-types';
import { Box, CssBaseline, Toolbar } from '@mui/material';

import NavBar from '../NavBar';

const MainLayout = ({ children }) => {
  return (
    <Box>
      <CssBaseline />
      <NavBar />
      <Box component='main' sx={{ p: 3 }}>
        <Toolbar />
        <main>{children}</main>
      </Box>
    </Box>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
