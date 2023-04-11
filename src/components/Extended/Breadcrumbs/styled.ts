import type { Theme } from '@mui/material/styles';
import { gridSpacing, mobileSpacing } from '@shared/constant';

import type { BreadcrumbsProps } from '../type';

export const itemSX = {
  fontSize: {
    xs: '0.75rem',
    md: '0.875rem',
  },
};

export const linkSX = {
  display: 'flex',
  color: 'grey.900',
  textDecoration: 'none',
  alignContent: 'center',
  alignItems: 'center',
  ...itemSX,
};

export const iconStyle = (theme: Theme) => ({
  marginRight: theme.spacing(0.75),
  width: '0.875rem',
  height: '0.875rem',
  color: theme.palette.secondary.main,
  [theme.breakpoints.up('md')]: {
    width: '1rem',
    height: '1rem',
  },
});

export const breadcrumbCardSX = ({
  theme,
  card = true,
  border = false,
}: { theme: Theme } & Pick<BreadcrumbsProps, 'card' | 'border'>) => ({
  marginBottom: !card ? 0 : theme.spacing(gridSpacing),
  border: card && border ? '1px solid' : 'none',
  borderColor: theme.palette.primary['200'] + String(75),
  ...(card && {
    background: theme.palette.background.default,
    mb: {
      xs: `${mobileSpacing}px`,
      sm: 2,
      md: theme.spacing(gridSpacing),
    },
  }),
});
