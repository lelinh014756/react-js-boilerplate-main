/* eslint-disable tailwindcss/no-custom-classname */
import { Delete } from '@mui/icons-material';
import {
  Box,
  CardMedia,
  type CardMediaProps,
  CircularProgress,
  IconButton,
  Stack,
} from '@mui/material';
import { useAppSelector } from '@redux/hook';
import { borderRadius } from '@redux/selector/customizationSelector';
import validFunction from '@shared/utils/validFunction';
import { memo } from 'react';

interface ImgCardProps extends CardMediaProps {
  progressNum?: number | null;
  onDelete?: (id: string) => void;
}

function ImgCard({ progressNum, onDelete, id, ...props }: ImgCardProps) {
  const radiusStore = useAppSelector(borderRadius);

  return (
    <Box
      sx={{
        position: 'relative',
        borderRadius: `${radiusStore}px`,
        overflow: 'hidden',
        '&:hover .imgCardOptions': {
          visibility: 'visible',
          opacity: 1,
        },
      }}
    >
      {/* Img Preview */}
      <CardMedia
        sx={(theme) => ({
          backgroundColor: theme.palette.grey[100],
          pt: '100%',
        })}
        id={id}
        {...props}
      />
      {/* End Img Preview */}

      {/* Progress Bar */}
      {progressNum !== undefined && progressNum !== null && (
        <CircularProgress
          sx={(theme) => ({
            backgroundColor: theme.palette.hightLight.white[800],
            position: 'absolute',
            left: '0',
            top: '0',
            width: '100% !important',
            height: '100% !important',
            p: '16px',
          })}
          variant="determinate"
          value={75}
        />
      )}
      {/* End Progress Bar */}

      {/* Options */}
      <Stack
        direction="row"
        sx={(theme) => ({
          backgroundColor: theme.palette.hightLight.black[450],
        })}
        spacing={1}
        className="imgCardOptions invisible absolute inset-0 items-center justify-center opacity-0 transition-all"
      >
        <IconButton
          size="small"
          color="error"
          onClick={() => {
            if (validFunction(onDelete)) {
              onDelete(id);
            }
          }}
        >
          <Delete
            fontSize="small"
            sx={{
              color: 'white',
            }}
          />
        </IconButton>
      </Stack>
      {/* End Options */}
    </Box>
  );
}

export default memo(ImgCard);
