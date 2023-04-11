import { Avatar, OutlinedInput } from '@mui/material';
import { styled } from '@mui/material/styles';
import { shouldForwardProp } from '@mui/system';

export const OutlineInputStyle = styled(OutlinedInput, { shouldForwardProp })(
  ({ theme }) => ({
    width: 434,
    marginLeft: 16,
    paddingLeft: 16,
    paddingRight: 16,
    '& input': {
      background: 'transparent !important',
      paddingLeft: '4px !important',
    },
    [theme.breakpoints.down('lg')]: {
      width: 250,
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginLeft: 0,
      background: '#fff',
    },
  })
);

export const HeaderAvatarStyle = styled(Avatar, { shouldForwardProp })(
  ({ theme }) => ({
    ...theme.typography.commonAvatar,
    ...theme.typography.mediumAvatar,
    background: theme.palette.secondary.light,
    color: theme.palette.secondary.dark,
    '&:hover': {
      background: theme.palette.secondary.dark,
      color: theme.palette.secondary.light,
    },
  })
);
