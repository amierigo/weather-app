import React from "react";
import { useAuth0 } from '@auth0/auth0-react';
import { Box, Typography } from "@mui/material";

import Button from "../../components/Common/Button";
import Page from "../../layouts/Page";
import { BUTTON_MODE } from "../../constants/styles";

/**
 * This Page is for unauthenticated user
 * @returns if user is not logged in
 */

const HomeScreen = () => {
  const {
    isAuthenticated,
    loginWithRedirect,
    user,
  } = useAuth0();
  console.log("user", user)

  if (!isAuthenticated) {
    return (
      <Page>
         <Box className="welcome-landing">
          <Box>
            <Typography  variant="h5">
              Welcome to the weather forecast web application. Please login with
              your Github user to use the application and view the weather in your
              city.
            </Typography>
            <Box mt={5}>
              <Button
                btnMode={BUTTON_MODE.CONTAINED}
                onClick={() => loginWithRedirect()}
                text="Login"
              />
            </Box>
          </Box>
        </Box>
      </Page>
    )
  }

  return (
    <Page>
      {isAuthenticated && (
         <Box className="welcome-landing">
          <Box>
            <Typography  variant="h5">
              {user?.name}
            </Typography>
            <Typography  variant="h5">
              https://github.com/{user?.nickname}
            </Typography>
          </Box>
        </Box>
      )}
    </Page>
  );
};

export default HomeScreen;
