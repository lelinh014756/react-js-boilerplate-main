// ** MUI Imports
import type { Theme } from '@mui/material/styles';

// ** Util Import
import { hexToRGBA } from '@shared/utils/hex-to-rgba';

const Backdrop = (theme: Theme) => {
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor:
            theme.palette.mode === 'light'
              ? `rgba(${theme.palette.common.main}, 0.7)`
              : hexToRGBA(theme.palette.background.default, 0.7),
        },
        invisible: {
          backgroundColor: 'transparent',
        },
      },
    },
  };
};

export default Backdrop;
