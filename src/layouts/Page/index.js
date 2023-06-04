import React from "react";
import PropTypes from "prop-types";
import { Box, Button } from "@mui/material";

import { DIRECTION } from "../../constants/direction";
import PageStyle from "./PageStyle";

const Page = ({ btnAction, children }) => {
  return (
    <PageStyle>
      <Box>{children}</Box>
      {btnAction === DIRECTION.BACK && (
        <Box>
          <Button />
        </Box>
      )}
    </PageStyle>
  );
};

Page.propTypes = {
  btnAction: PropTypes.string,
  children: PropTypes.node.isRequired,
};
export default Page;
