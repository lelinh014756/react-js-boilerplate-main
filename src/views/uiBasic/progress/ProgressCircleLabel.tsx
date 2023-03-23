import {
  Box,
  CircularProgress,
  type CircularProgressProps,
  Stack,
  Typography,
} from '@mui/material';
import { gridSpacing } from '@shared/constant';
import React from 'react';

export interface ProgressCircleLabelProps extends CircularProgressProps {
  value: number;
}

const ProgressCircleLabel = ({ value, ...props }: ProgressCircleLabelProps) => {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" value={value} {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
        >{`${Math.round(value)}%`}</Typography>
      </Box>
    </Box>
  );
};

export default ProgressCircleLabel;

export const ProgressCircleWithLabelView = () => {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Stack direction="row" justifyContent="center" spacing={gridSpacing}>
      <ProgressCircleLabel value={25} />
      <ProgressCircleLabel value={50} />
      <ProgressCircleLabel value={75} />
      <ProgressCircleLabel value={progress} />
    </Stack>
  );
};
