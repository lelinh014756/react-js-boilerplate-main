// ** MUI Imports
import type { Theme } from '@mui/material/styles';
import { matchUpMd } from '@shared/constant';

const List = (theme: Theme) => {
  return {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          color: theme.optionCustom.darkTextPrimary,
          paddingTop: '10px',
          paddingBottom: '10px',
          '&.Mui-selected': {
            color: theme.optionCustom.menuSelected,
            backgroundColor: theme.optionCustom.menuSelectedBack,
            '&:hover': {
              backgroundColor: theme.optionCustom.menuSelectedBack,
            },
            '& .MuiListItemIcon-root': {
              color: theme.optionCustom.menuSelected,
            },
          },
          '&:hover': {
            backgroundColor: theme.optionCustom.menuSelectedBack,
            color: theme.optionCustom.menuSelected,
            '& .MuiListItemIcon-root': {
              color: theme.optionCustom.menuSelected,
            },
            ...(!theme.optionCustom.customization.opened && {
              [`${matchUpMd}`]: {
                backgroundColor: 'transparent',
              },
            }),
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: theme.optionCustom.darkTextPrimary,
          minWidth: theme.spacing(4.5),
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          color: theme.optionCustom.textDark,
        },
      },
    },
  };
};

export default List;
