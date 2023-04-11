import { Box, type BoxProps } from '@mui/material';
import React, { memo } from 'react';

export interface ImgListWallProps extends BoxProps {}

const ImgListWall = ({ children, className, sx, ...props }: BoxProps) => {
  return (
    <Box
      className={'grid ' + (className ?? '')}
      sx={{
        gridTemplateColumns: `repeat(auto-fill,minmax(100px, 1fr))`,
        ...sx,
      }}
      gap={1}
      {...props}
    >
      {children}
    </Box>
  );
};

export default memo(ImgListWall);
