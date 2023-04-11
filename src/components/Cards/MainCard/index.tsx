/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { type MainCardProps } from '@components/Cards/types';
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from '@mui/material';
// material-ui
import { useTheme } from '@mui/material/styles';
// import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

// constant
const headerSXData = {
  '& .MuiCardHeader-action': { mr: 0 },
};

// ==============================|| CUSTOM MAIN CARD ||============================== //

const MainCard = forwardRef(
  (
    {
      border = false,
      boxShadow = false,
      children,
      content = true,
      contentClass = '',
      headerSX = {},
      contentSX = {},
      customTitle = false,
      customTitleSx = {},
      customTitleVariant = 'h3',
      secondary,
      shadow,
      sx = {},
      title,
      ...props
    }: MainCardProps,
    ref: any
  ) => {
    const theme = useTheme();

    return (
      <Card
        ref={ref}
        {...props}
        sx={{
          border: border ? '1px solid' : 'none',
          borderColor: Number(theme.palette.primary[200]) + 25,
          ':hover': {
            boxShadow: boxShadow
              ? shadow ?? '0 2px 14px 0 rgb(32 40 45 / 8%)'
              : 'inherit',
          },
          '& .MuiCardHeader-root, & .MuiCardContent-root': {
            [theme.breakpoints.up('lg')]: {
              p: theme.spacing(3),
            },
          },
          ...sx,
        }}
      >
        {/* card header and action */}
        {title !== undefined && (
          <CardHeader
            sx={{ ...headerSXData, ...headerSX }}
            titleTypographyProps={{
              sx: {
                fontSize: {
                  sm: '1rem',
                  md: '1.125rem',
                  lg: '1.25rem',
                },
              },
            }}
            title={
              customTitle ? (
                <Typography variant={customTitleVariant} sx={customTitleSx}>
                  {title}
                </Typography>
              ) : (
                title
              )
            }
            action={secondary}
          />
        )}

        {/* content & header divider */}
        {title !== undefined && <Divider />}

        {/* card content */}
        {content && (
          <CardContent sx={contentSX} className={contentClass}>
            {children}
          </CardContent>
        )}
        {!content && children}
      </Card>
    );
  }
);

MainCard.displayName = 'MainCard';

export default MainCard;
