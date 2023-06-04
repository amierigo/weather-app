import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Box, Hidden, Typography } from "@mui/material";

import AppTable from "../../components/Common/AppTable";
import axios from "../../utils/axios";
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
  const [keyword, setKeyword] = useState("");
  const [error, setError] = useState("");
  const [data, setData] = useState([]);

  const onSearch = async () => {
    // to fix the cors issue, Enable Cors to bypass to different ports problem with API requests
    // see forum here:
    // https://forum.quasar-framework.org/topic/6704/enable-cors-to-bypass-to-different-ports-problem-with-api-requests
    try {
      const response = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://openweathermap.org/data/2.5/find?q=${keyword}&appid=439d4b804bc8187953eb36d2a8c26a02&_=1685898481701`
      );
      const { data } = response;
      setData(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setData(null);
    }
  };

  const onChange = (e) => {
    const { value } = e.target;
    setKeyword(value);
  };

  const onReset = () => {
    setData([]);
    setError(null);
    setKeyword("");
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
          {data && data.list ? (
            <Box>
              <AppTable data={data.list} />
              <Box mt={2} display="flex" justifyContent="flex-end">
                <Button
                  btnMode={BUTTON_MODE.CONTAINED}
                  text="Back"
                  onClick={() => onReset()}
                />
              </Box>
            </Box>
          ) : (
            <>
              <Hidden smDown>
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
              </Hidden>

              <FormFieldSearch
                placeholder="City"
                onChange={onChange}
                value={keyword}
              />
              {error && (
                <Box>
                  <Typography
                    variant="subtitle1"
                    align="center"
                    className="search-error"
                  >
                    {error}
                  </Typography>
                </Box>
              )}
              <Box mt={3}>
                <Button
                  btnMode={BUTTON_MODE.CONTAINED}
                  onClick={onSearch}
                  text="Display Weather"
                />
              </Box>
            </>
          )}
        </Box>
      )}
    </Page>
  );
};

export default HomeScreen;
