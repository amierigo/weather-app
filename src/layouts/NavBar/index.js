import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

import Button from "../../components/Common/Button";
import CloudIcon from "../../assets/images/cloud.png";
import { BUTTON_MODE } from "../../constants/styles";

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
          <img alt="Weather App" src={CloudIcon} height={65} width={75} />
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
              btnMode={BUTTON_MODE.CONTAINED}
              onClick={() => {
                logout({
                  logoutParams: {
                    returnTo: window.location.origin,
                  },
                });
              }}
              text='Logout'
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
