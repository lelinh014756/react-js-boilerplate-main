// ** MUI Imports
import type { Theme } from '@mui/material/styles';

// ** Util Import

const Alert = (_theme: Theme) => {
  return {
    MuiAlert: {
      styleOverrides: {
        root: {
          '&.MuiDisabledIcon .MuiAlert-icon': {
            display: 'none',
          },
        },
      },
    },
  };
};

export default Alert;
