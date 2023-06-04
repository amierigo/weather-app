import { PropTypes } from "prop-types";

import { FormControl, IconButton } from "@mui/material";
import CustomFormField from "./styles";
import SearchIcon from '../../../assets/images/search.png';

const FormFieldSearch = ({
  placeholder,
}) => {
  return (
    <FormControl variant="standard" className="search-input">
      <IconButton className="search-input-icon" sx={{ p: '10px' }} aria-label="menu">
        <img alt='search' src={SearchIcon} width={18} height={18} />
      </IconButton>
      <CustomFormField defaultValue="" id="search-input" placeholder={placeholder} />
    </FormControl>
  );
};


FormFieldSearch.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default FormFieldSearch;
