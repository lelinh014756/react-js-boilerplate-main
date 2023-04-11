import type { Theme } from '@mui/material/styles';
import { matchUpMd } from '@shared/constant';

export default function componentStyleOverrides(theme: Theme) {
  const bgColor = theme.optionCustom.colors.grey50;
  return {
    /* Alert */
    MuiAlert: {
      styleOverrides: {
        root: {
          '&.MuiDisabledIcon .MuiAlert-icon': {
            display: 'none',
          },
        },
      },
    },
    /* End Alert */
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          borderRadius: '4px',
        },
      },
    },
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
    MuiCardHeader: {
      styleOverrides: {
        root: {
          color: theme.optionCustom.textDark,
          padding: '24px',
        },
        title: {
          fontSize: '20px',
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '24px',
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: '24px',
        },
      },
    },
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
          minWidth: '36px',
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
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: theme.optionCustom.textDark,
          '&::placeholder': {
            color: theme.optionCustom.darkTextSecondary,
            fontSize: '0.875rem',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          background: bgColor,
          borderRadius: `${String(theme.shape.borderRadius)}px`,
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
          borderRadius: `${String(theme.shape.borderRadius)}px`,
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
          borderRadius: `${String(theme.shape.borderRadius)}px`,
        },
      },
    },
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
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: theme.optionCustom.divider,
          opacity: 1,
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          color: theme.optionCustom.colors.primaryDark,
          background: theme.optionCustom.colors.primary200,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          '&.MuiChip-deletable .MuiChip-deleteIcon': {
            color: 'inherit',
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          color: theme.optionCustom.paper,
          background: theme.optionCustom.colors.grey700,
        },
      },
    },
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
    /* Dialog */
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontSize: '1.25rem',
          fontWeight: 500,
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          paddingInline: 24,
        },
      },
    },
    /* End Dialog */
    /* Table */
    MuiTableCell: {
      styleOverrides: {
        root: {
          span: {
            whiteSpace: 'nowrap',
          },
        },
      },
    },
    /* End Table */
  };
}
