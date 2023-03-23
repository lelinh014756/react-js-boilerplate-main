import { CircularProgress, Stack } from '@mui/material';
import { gridSpacing } from '@shared/constant';

function ProgressCircleBase() {
  return (
    <Stack direction="row" justifyContent="center" spacing={gridSpacing}>
      <CircularProgress color="primary" />
      <CircularProgress color="secondary" />
      <CircularProgress color="success" />
    </Stack>
  );
}

export default ProgressCircleBase;
