import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Box, Typography } from "@mui/material";

import Button from "../../components/Common/Button";
import FormFieldSearch from "../../components/Common/FormFieldSearch";
import Page from "../../layouts/Page";
import { BUTTON_MODE } from "../../constants/styles";

/**
 * This Page is for unauthenticated user
 * @returns if user is not logged in
 */

const HomeScreen = () => {
  const { isAuthenticated, loginWithRedirect, user } = useAuth0();
  const onSearch = () => {
    // to do search
  };

  if (!isAuthenticated) {
    return (
      <Page>
        <Box className="welcome">
          <Box>
            <Typography variant="h5">
              Welcome to the weather forecast web application. Please login with
              your Github user to use the application and view the weather in
              your city.
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
    );
  }

  return (
    <Page>
      {isAuthenticated && (
        <Box className="home">
          <Box mb={10}>
            <Typography variant="h6" align="center">
              {user?.name}
            </Typography>
            <Typography variant="h6">
              <a
                href={`https://github.com/${user?.nickname}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/{user?.nickname}
              </a>
            </Typography>
          </Box>

          <FormFieldSearch placeholder="City" />
          <Box mt={3}>
            <Button onClick={onSearch} text="Display Weather" />
          </Box>
        </Box>
      )}
    </Page>
  );
};

export default HomeScreen;
