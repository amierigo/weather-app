import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";

import PageStyle from "./PageStyle";

const Page = ({ children }) => {
  return (
    <PageStyle>
      <Box>{children}</Box>
    </PageStyle>
  );
};

Page.propTypes = {
  btnAction: PropTypes.string,
  children: PropTypes.node.isRequired,
};
export default Page;
