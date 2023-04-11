// ** MUI Imports
import type { Theme } from '@mui/material/styles';

const Avatar = (theme: Theme) => {
  return {
    MuiAvatar: {
      styleOverrides: {
        root: {
          color: theme.optionCustom.colors.primaryDark,
          background: theme.optionCustom.colors.primary200,
        },
      },
    },
  };
};

export default Avatar;
