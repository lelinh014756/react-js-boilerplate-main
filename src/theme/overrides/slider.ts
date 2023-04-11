// ** MUI Imports
import type { Theme } from '@mui/material/styles';

const slider = (theme: Theme) => {
  return {
    MuiSlider: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            color: theme.optionCustom.colors.grey300,
          },
        },
        mark: {
          backgroundColor: theme.optionCustom.paper,
          width: '4px',
        },
        valueLabel: {
          color: theme.optionCustom.colors.primaryLight,
        },
      },
    },
  };
};

export default slider;
