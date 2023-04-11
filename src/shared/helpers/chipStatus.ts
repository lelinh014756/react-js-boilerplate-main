import { type SxProps, type Theme } from '@mui/material';

export type PromiseStatus = 'pending' | 'fulfilled' | 'reject';
export type UserStatus = 'online' | 'offline';
export type ActivityStatus = 'activated' | 'disabled';

export type ChipStatus = PromiseStatus | UserStatus | ActivityStatus;

export type ChipData = {
  [key in ChipStatus]: SxProps<Theme>;
};

const chipSX = {
  height: 24,
  padding: '0 6px',
  textTransform: 'capitalize',
  fontWeight: 500,
};

const chipErrorSX = (theme: Theme): SxProps<Theme> => ({
  ...chipSX,
  color: theme.palette.orange.dark,
  backgroundColor: theme.palette.orange.light,
  marginRight: '5px',
});

const chipWarningSX = (theme: Theme): SxProps<Theme> => ({
  ...chipSX,
  color: theme.palette.warning.dark,
  backgroundColor: theme.palette.warning.light,
});

const chipSuccessSX = (theme: Theme): SxProps<Theme> => ({
  ...chipSX,
  color: theme.palette.success.dark,
  backgroundColor: theme.palette.success.light,
  height: 28,
});

const chipSecondary = (theme: Theme): SxProps<Theme> => ({
  ...chipSX,
  color: theme.palette.grey[900],
  backgroundColor: theme.palette.grey[100],
  height: 28,
});

const chipStatus = (status: ChipStatus, theme: Theme) => {
  switch (status) {
    case 'pending':
      return chipWarningSX(theme);
    case 'activated':
    case 'online':
    case 'fulfilled':
      return chipSuccessSX(theme);
    case 'reject':
      return chipErrorSX(theme);

    default:
      return chipSecondary(theme);
  }
};

export default chipStatus;
