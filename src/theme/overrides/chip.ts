// ** MUI Imports
import type { Theme } from '@mui/material/styles';

const Chip = (_theme: Theme) => {
  return {
    MuiChip: {
      styleOverrides: {
        root: {
          '&.MuiChip-deletable .MuiChip-deleteIcon': {
            color: 'inherit',
          },
        },
      },
    },
  };
};

export default Chip;
