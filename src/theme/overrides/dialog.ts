// ** MUI Imports
import type { Theme } from '@mui/material/styles';
// ** Util Import

const Dialog = (_theme: Theme) => {
  return {
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontSize: '1.25rem',
          fontWeight: 500,
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          paddingInline: 24,
        },
      },
    },
  };
};

export default Dialog;
