// ** MUI Imports
import type { Theme } from '@mui/material/styles';

import MuiAlerts from './alerts';
import MuiAutocomplete from './autocomplete';
import MuiAvatar from './avatars';
import MuiButton from './button';
// ** Overrides Imports
import MuiCard from './card';
import MuiChip from './chip';
import MuiDialog from './dialog';
import MuiDivider from './divider';
import MuiInput from './input';
import MuiList from './list';
import MuiPaper from './paper';
import MuiSlider from './slider';
import MuiTable from './table';
import MuiTooltip from './tooltip';
import MuiTypography from './typography';

const overrides = (theme: Theme) => {
  const chip = MuiChip(theme);
  const list = MuiList(theme);
  const cards = MuiCard(theme);
  const input = MuiInput(theme);
  const tables = MuiTable(theme);
  const alerts = MuiAlerts(theme);
  const button = MuiButton(theme);
  const avatars = MuiAvatar(theme);
  const divider = MuiDivider(theme);
  const dialog = MuiDialog(theme);
  const tooltip = MuiTooltip(theme);
  const slider = MuiSlider(theme);
  const paper = MuiPaper(theme);
  const typography = MuiTypography(theme);
  const autocomplete = MuiAutocomplete(theme);

  return Object.assign(
    alerts,
    button,
    paper,
    cards,
    list,
    input,
    slider,
    divider,
    avatars,
    chip,
    tooltip,
    tables,
    dialog,
    typography,
    autocomplete
  );
};

export default overrides;
