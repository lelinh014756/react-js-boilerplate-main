/* eslint-disable @typescript-eslint/no-explicit-any */
import { type SubCardProps } from '@components/Cards/types';
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  useTheme,
} from '@mui/material';
import React, { forwardRef } from 'react';

const SubCard = forwardRef(
  (
    {
      children,
      content = true,
      contentClass,
      darkTitle = false,
      secondary,
      sx = {},
      contentSX = {},
      title,
      ...others
    }: SubCardProps,
    ref: any
  ) => {
    const theme = useTheme();

    return (
      <Card
        ref={ref}
        sx={{
          border: '1px solid',
          borderColor: theme.palette.primary.light,
          ':hover': {
            boxShadow: '0 2px 14px 0 rgb(32 40 45 / 8%)',
          },
          ...sx,
        }}
        {...others}
      >
        {/* card header and action */}
        {!darkTitle && title !== undefined && (
          <CardHeader
            sx={{ p: 2.5 }}
            title={<Typography variant="h5">{title}</Typography>}
            action={secondary}
          />
        )}
        {darkTitle && title !== undefined && (
          <CardHeader
            sx={{ p: 2.5 }}
            title={<Typography variant="h4">{title}</Typography>}
            action={secondary}
          />
        )}

        {/* content & header divider */}
        {title !== undefined && (
          <Divider
            sx={{
              opacity: 1,
              borderColor: theme.palette.primary.light,
            }}
          />
        )}

        {/* card content */}
        {content && (
          <CardContent
            sx={{ p: 2.5, ...contentSX }}
            className={contentClass ?? ''}
          >
            {children}
          </CardContent>
        )}
        {!content && children}
      </Card>
    );
  }
);

SubCard.displayName = 'SubCard';

export default SubCard;
