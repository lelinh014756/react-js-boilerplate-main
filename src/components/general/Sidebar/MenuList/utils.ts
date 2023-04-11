import { type Theme } from '@mui/material/styles';
import { mobileSpacing, navItemDrawerCloseSize } from '@shared/constant';

export const changeCssNavItemDrawer = ({
  level,
  closed,
}: {
  level: number;
  closed: boolean;
}) => {
  const isLevelUp = level > 1;
  const closedWithLevelFirst = closed && !isLevelUp;
  const closedWithLevelUp = closed && isLevelUp;

  const paddingY = isLevelUp ? 1 : 1.25;

  return closedWithLevelFirst
    ? {
        px: `${mobileSpacing}px`,
        py: !isLevelUp ? 0 : paddingY,
      }
    : {
        pl: closedWithLevelUp ? `${mobileSpacing + 2}px` : `${level * 24}px`,
        py: paddingY,
      };
};

/* ********************************************************************** */

export const changeCssItemIconDrawer = ({
  closed,
  active,
  theme,
}: {
  theme: Theme;
  closed: boolean;
  active: boolean;
}) =>
  closed && {
    width: `${navItemDrawerCloseSize}px`,
    height: `${navItemDrawerCloseSize}px`,
    alignItems: 'center',
    justifyContent: 'center',
    ...(active && {
      backgroundColor: theme.palette.secondary.light,
    }),
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  };

/* ********************************************************************** */

export const cssButtonWrapIcon = ({ theme }: { theme: Theme }) => ({
  p: 0,
  minWidth: 'unset',
  borderRadius: '8px',
  '&:hover': {
    backgroundColor: 'unset',
  },

  '.MuiTouchRipple-child': {
    backgroundColor: `${theme.palette.secondary.dark} !important`,
  },
});
