// ** MUI Imports
import type { Theme } from '@mui/material/styles';

const Divider = (theme: Theme) => {
  return {
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: theme.optionCustom.divider,
          opacity: 1,
        },
      },
    },
  };
};

export default Divider;
