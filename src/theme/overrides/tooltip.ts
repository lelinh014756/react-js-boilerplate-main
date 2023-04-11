// ** MUI Imports
import type { Theme } from '@mui/material/styles';
// ** Util Import

const Tooltip = (theme: Theme) => {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          color: theme.optionCustom.paper,
          background: theme.optionCustom.colors.grey700,
        },
      },
    },
  };
};

export default Tooltip;
