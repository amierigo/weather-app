import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

import cloud from "../../assets/images/cloud.png";

const NavBar = () => {
  const { isAuthenticated, logout } = useAuth0();

  return (
    <AppBar
      component="nav"
      style={{
        background: "#68C4C1",
        display: "flex",
        justifyContent: "center",
        padding: "0px 2rem",
      }}
    >
      <Toolbar>
        <Box mr={1}>
          <img alt="Weather App" src={cloud} height={65} width={75} />
        </Box>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          Weather Forecast
        </Typography>
        {isAuthenticated && (
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button
              onClick={() => {
                logout({
                  logoutParams: {
                    returnTo: window.location.origin,
                  },
                });
              }}
              sx={{ color: "#fff" }}
            >
              Logout
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
