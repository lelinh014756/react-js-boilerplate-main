import {
  Box,
  CardMedia,
  type CardMediaProps,
  CircularProgress,
} from '@mui/material';
import { useAppSelector } from '@redux/hook';
import { borderRadius } from '@redux/selector/customizationSelector';
import { memo } from 'react';

interface ImgCardProps extends CardMediaProps {
  progressNum?: number | null;
}

function ImgCard({ progressNum, ...props }: ImgCardProps) {
  const radiusStore = useAppSelector(borderRadius);

  return (
    <Box
      sx={{
        position: 'relative',
      }}
    >
      <CardMedia
        sx={(theme) => ({
          borderRadius: `${radiusStore}px`,
          backgroundColor: theme.palette.grey[100],
          pt: '100%',
        })}
        {...props}
      />
      {progressNum !== undefined && progressNum !== null && (
        <CircularProgress
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            position: 'absolute',
            left: '0',
            top: '0',
            width: '100% !important',
            height: '100% !important',
            p: '16px',
          }}
          variant="determinate"
          value={75}
        />
      )}
    </Box>
  );
}

export default memo(ImgCard);
