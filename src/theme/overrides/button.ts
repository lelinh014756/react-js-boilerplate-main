// ** MUI Imports
import type { Theme } from '@mui/material/styles';

// ** Theme Config Imports

const Button = (_theme: Theme) => {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          borderRadius: '4px',
        },
      },
    },
  };
};

export default Button;
