import { PropTypes } from 'prop-types';

import CustomButton from './styles';

const Button = ({ btnMode, disabled, text, ...rest }) => {
  return (
    <CustomButton disabled={disabled} variant={btnMode} {...rest}>
      {text}
    </CustomButton>
  );
};

Button.propTypes = {
  btnMode: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  text: PropTypes.string.isRequired,
};
export default Button;
