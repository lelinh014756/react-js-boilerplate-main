import { type SxProps, type Theme } from '@mui/material';

export type PromiseStatus = 'pending' | 'active' | 'reject';

export type ChipStatus = PromiseStatus;

export type ChipData = {
  [key in ChipStatus]: SxProps<Theme>;
};

const chipSX = {
  height: 24,
  padding: '0 6px',
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

const chipStatus = (status: ChipStatus, theme: Theme) => {
  const data: ChipData = {
    pending: chipWarningSX(theme),
    active: chipSuccessSX(theme),
    reject: chipErrorSX(theme),
  };

  return data[status];
};

export default chipStatus;
