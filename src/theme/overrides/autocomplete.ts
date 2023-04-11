// ** MUI Imports
import type { Theme } from '@mui/material/styles';

// ** Util Import

const autocomplete = (_theme: Theme) => {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        root: {},
        paper: {
          boxShadow:
            '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        },
      },
    },
  };
};

export default autocomplete;
