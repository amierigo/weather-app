import React from "react";
import { Box, Typography } from "@mui/material";

import AppButton from "../../components/Common/AppButton";
import Page from "../../layouts/Page";
import { BUTTON_MODE } from "../../constants/styles";

/**
 * This Page is for unauthenticated user
 * @returns if user is not logged in
 */

const LandingScreen = () => {
  const onLogin = () => {
    // to do
  };

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
            <AppButton
              btnMode={BUTTON_MODE.CONTAINED}
              onClick={() => onLogin()}
              text="Login"
            />
          </Box>
        </Box>
      </Box>
    </Page>
  );
};

export default LandingScreen;
