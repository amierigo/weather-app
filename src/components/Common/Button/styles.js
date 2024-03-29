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
  boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',

  '&:hover': {
    backgroundColor: '#F2685F',
  },
}));

export default CustomButton;
