import type { CSSObject, SxProps, Theme } from '@mui/material/styles';
import themeConfig from '@shared/configs/themeConfig';
import { drawerWidth, navItemDrawerCloseSize } from '@shared/constant';

export const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

export const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${navItemDrawerCloseSize}px + 10px * 2)`,
  [theme.breakpoints.down('md')]: {
    width: drawerWidth,
  },
});

export const drawerStyles = (
  theme: Theme,
  drawerOpen: boolean
): SxProps<Theme> => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  '& .MuiDrawer-paper': {
    background: theme.palette.background.default,
    color: theme.palette.text.primary,
    borderRight: 'none',
    [theme.breakpoints.up('md')]: {
      top: `${themeConfig.toolbarHeightLg + 4}px`,
    },

    ...(drawerOpen && {
      ...openedMixin(theme),
    }),
    ...(!drawerOpen && {
      ...closedMixin(theme),
    }),
  },
});
