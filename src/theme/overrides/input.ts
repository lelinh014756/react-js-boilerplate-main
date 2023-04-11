// ** MUI Imports
import type { Theme } from '@mui/material/styles';

const input = (theme: Theme) => {
  const bgColor = theme.optionCustom.colors.grey50;

  return {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          background: bgColor,
          borderRadius: `${String(
            theme.optionCustom.customization.borderRadius
          )}px`,
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.optionCustom.colors.grey400,
          },
          '&:hover $notchedOutline': {
            borderColor: theme.optionCustom.colors.primaryLight,
          },
          '&.MuiInputBase-multiline': {
            padding: 1,
          },
        },
        input: {
          fontWeight: 500,
          background: bgColor,
          padding: '15.5px 14px',
          borderRadius: `${String(
            theme.optionCustom.customization.borderRadius
          )}px`,
          '&.MuiInputBase-inputSizeSmall': {
            padding: '10px 14px',
            '&.MuiInputBase-inputAdornedStart': {
              paddingLeft: 0,
            },
          },
        },
        inputAdornedStart: {
          paddingLeft: 4,
        },
        notchedOutline: {
          borderRadius: `${String(
            theme.optionCustom.customization.borderRadius
          )}px`,
        },
      },
    },
  };
};

export default input;
