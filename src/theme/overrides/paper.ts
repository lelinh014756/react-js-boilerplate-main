// ** MUI Imports
import type { Theme } from '@mui/material/styles';

const Paper = (theme: Theme) => {
  return {
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          '&.MuiDialog-paper': {
            paddingBlock: 12,
          },
        },
        rounded: {
          borderRadius: `${String(theme.shape.borderRadius)}px`,
        },
      },
    },
  };
};

export default Paper;
