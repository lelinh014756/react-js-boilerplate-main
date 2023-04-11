// ** MUI Imports
import type { Theme } from '@mui/material/styles';

const Card = (theme: Theme) => {
  return {
    MuiCardHeader: {
      styleOverrides: {
        root: {
          color: theme.optionCustom.textDark,
        },
      },
    },
  };
};

export default Card;
