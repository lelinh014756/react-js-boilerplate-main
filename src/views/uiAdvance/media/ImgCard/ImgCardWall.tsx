/* eslint-disable tailwindcss/no-custom-classname */
import { Delete } from '@mui/icons-material';
import {
  Box,
  CardMedia,
  type CardMediaProps,
  CircularProgress,
  IconButton,
} from '@mui/material';
import { Stack } from '@mui/system';
import { useAppSelector } from '@redux/hook';
import { borderRadius } from '@redux/selector/customizationSelector';
import validFunction from '@shared/utils/validFunction';
import React from 'react';

interface ImgCardWallProps extends CardMediaProps {
  progressNum?: number | null;
  onDelete?: (id: string) => void;
}

const ImgCardWall = ({
  progressNum,
  onDelete,
  id,
  ...props
}: ImgCardWallProps) => {
  const radiusStore = useAppSelector(borderRadius);

  return (
    <Box
      className="border-[1px] border-solid border-[var(--grey400)] p-2"
      sx={{ borderRadius: `${radiusStore}px`, overflow: 'hidden' }}
    >
      <Box
        sx={{
          position: 'relative',

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
    </Box>
  );
};

export default ImgCardWall;
