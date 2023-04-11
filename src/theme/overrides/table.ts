// ** MUI Imports
import type { Theme } from '@mui/material/styles';

const Table = (_theme: Theme) => {
  return {
    MuiTableSortLabel: {
      styleOverrides: {
        root: {
          '.MuiTableSortLabel-icon': {
            display: 'none',
          },
          '&.Mui-active .MuiTableSortLabel-icon': {
            display: 'block',
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          span: {
            whiteSpace: 'nowrap',
          },
        },
      },
    },
  };
};

export default Table;
