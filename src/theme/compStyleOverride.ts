import { matchUpMd } from '@shared/constant';

import { type ThemeOptionType } from './type';

export default function componentStyleOverrides(theme: ThemeOptionType) {
  const bgColor = theme.colors.grey50;
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
          borderRadius: `${String(theme?.customization?.borderRadius)}px`,
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          color: theme.textDark,
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
          color: theme.darkTextPrimary,
          paddingTop: '10px',
          paddingBottom: '10px',
          '&.Mui-selected': {
            color: theme.menuSelected,
            backgroundColor: theme.menuSelectedBack,
            '&:hover': {
              backgroundColor: theme.menuSelectedBack,
            },
            '& .MuiListItemIcon-root': {
              color: theme.menuSelected,
            },
          },
          '&:hover': {
            backgroundColor: theme.menuSelectedBack,
            color: theme.menuSelected,
            '& .MuiListItemIcon-root': {
              color: theme.menuSelected,
            },
            ...(!theme.customization.opened && {
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
          color: theme.darkTextPrimary,
          minWidth: '36px',
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          color: theme.textDark,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: theme.textDark,
          '&::placeholder': {
            color: theme.darkTextSecondary,
            fontSize: '0.875rem',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          background: bgColor,
          borderRadius: `${String(theme?.customization?.borderRadius)}px`,
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.colors.grey400,
          },
          '&:hover $notchedOutline': {
            borderColor: theme.colors.primaryLight,
          },
          '&.MuiInputBase-multiline': {
            padding: 1,
          },
        },
        input: {
          fontWeight: 500,
          background: bgColor,
          padding: '15.5px 14px',
          borderRadius: `${String(theme?.customization?.borderRadius)}px`,
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
          borderRadius: `${String(theme?.customization?.borderRadius)}px`,
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            color: theme.colors.grey300,
          },
        },
        mark: {
          backgroundColor: theme.paper,
          width: '4px',
        },
        valueLabel: {
          color: theme?.colors.primaryLight,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: theme.divider,
          opacity: 1,
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          color: theme.colors.primaryDark,
          background: theme.colors.primary200,
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
          color: theme.paper,
          background: theme.colors.grey700,
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
