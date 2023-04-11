// ** MUI Imports
import type { Theme } from '@mui/material/styles';

const Switch = (theme: Theme) => {
  return {
    MuiSwitch: {
      styleOverrides: {
        root: {
          '& .MuiSwitch-track': {
            backgroundColor: `rgb(${theme.palette.common.main})`,
          },
        },
      },
    },
  };
};

export default Switch;
