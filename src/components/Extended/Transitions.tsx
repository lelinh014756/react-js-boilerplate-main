/* eslint-disable @typescript-eslint/no-explicit-any */
import { type TransitionPropsCustom } from '@core/type/componentType';
// material-ui
import { Box, Collapse, Fade, Grow, Slide, Zoom } from '@mui/material';
import React, { forwardRef } from 'react';

// ==============================|| TRANSITIONS ||============================== //

const Transitions = forwardRef(
  (
    {
      position = 'top-left',
      type = 'grow',
      children,
      direction = 'up',
      ...props
    }: TransitionPropsCustom,
    ref: any
  ) => {
    let positionSX = {
      transformOrigin: '0 0 0',
    };

    switch (position) {
      case 'top-right':
        positionSX = {
          transformOrigin: 'top right',
        };
        break;
      case 'top':
        positionSX = {
          transformOrigin: 'top',
        };
        break;
      case 'bottom-left':
        positionSX = {
          transformOrigin: 'bottom left',
        };
        break;
      case 'bottom-right':
        positionSX = {
          transformOrigin: 'bottom right',
        };
        break;
      case 'bottom':
        positionSX = {
          transformOrigin: 'bottom',
        };
        break;
      case 'top-left':
      default:
        positionSX = {
          transformOrigin: '0 0 0',
        };
        break;
    }

    return (
      <Box ref={ref}>
        {type === 'grow' && (
          <Grow {...props}>
            <Box sx={positionSX}>{children}</Box>
          </Grow>
        )}
        {type === 'collapse' && (
          <Collapse {...props} sx={positionSX}>
            {children}
          </Collapse>
        )}
        {type === 'fade' && (
          <Fade
            {...props}
            timeout={{
              appear: 500,
              enter: 600,
              exit: 400,
            }}
          >
            <Box sx={positionSX}>{children}</Box>
          </Fade>
        )}
        {type === 'slide' && (
          <Slide
            {...props}
            timeout={{
              appear: 0,
              enter: 400,
              exit: 200,
            }}
            direction={direction}
          >
            <Box sx={positionSX}>{children}</Box>
          </Slide>
        )}
        {type === 'zoom' && (
          <Zoom {...props}>
            <Box sx={positionSX}>{children}</Box>
          </Zoom>
        )}
      </Box>
    );
  }
);

Transitions.displayName = 'Transitions';

export default Transitions;
