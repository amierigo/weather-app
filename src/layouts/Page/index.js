import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button } from '@mui/material';

import { DIRECTION } from '../../constants/direction';

const Page = ({
  btnAction,
  children,
}) => {
  return (
    <Box>
      <Box>{children}</Box>
      <Box>
        {btnAction === DIRECTION.BACK && (
          <Button />
        )}
      </Box>
    </Box>
  )
}

Page.propTypes = {
	btnAction: PropTypes.string,
  children: PropTypes.node.isRequired,
};
export default Page;