import { PropTypes } from "prop-types";

import { FormControl, IconButton } from "@mui/material";
import CustomFormField from "./styles";
import SearchIcon from '../../../assets/images/search.png';

const FormFieldSearch = ({
  onChange,
  placeholder,
  value,
}) => {
  return (
    <FormControl variant="standard" className="search-input">
      <IconButton className="search-input-icon" sx={{ p: '10px' }} aria-label="menu">
        <img alt='search' src={SearchIcon} width={18} height={18} />
      </IconButton>
      <CustomFormField onChange={onChange} id="search-input" placeholder={placeholder} value={value} />
    </FormControl>
  );
};


FormFieldSearch.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default FormFieldSearch;
