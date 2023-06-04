import { PropTypes } from 'prop-types';
import CustomButton from './styles';

const AppButton = ({ btnMode, disabled, text }) => {
  return (
    <CustomButton disabled={disabled} variant={btnMode}>
      {text}
    </CustomButton>
  );
};

AppButton.propTypes = {
  btnMode: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  text: PropTypes.string.isRequired,
};
export default AppButton;
