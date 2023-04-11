import { Card } from '@mui/material';
import { styled } from '@mui/material/styles';

// styles
export const CardStyle = styled(Card)(({ theme }) => ({
  background: theme.palette.warning.light,
  marginBottom: '16px',
  overflow: 'hidden',
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    width: '200px',
    height: '200px',
    border: '19px solid ',
    borderColor: theme.palette.warning.main,
    borderRadius: '50%',
    top: '65px',
    right: '-150px',
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    width: '200px',
    height: '200px',
    border: '3px solid ',
    borderColor: theme.palette.warning.main,
    borderRadius: '50%',
    top: '145px',
    right: '-70px',
  },
}));
