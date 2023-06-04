import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';

const CustomButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: '#68C4C1',
  textTransform: 'none',
  borderRadius: '2px',
  padding: theme.spacing(1, 3),
  fontSize: '1rem',
  letterSpacing: '1.2px',

  '&:hover': {
    backgroundColor: '#F2685F',
  },
}));

export default CustomButton;
