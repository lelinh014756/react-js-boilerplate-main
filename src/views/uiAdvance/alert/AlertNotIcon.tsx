/* eslint-disable tailwindcss/no-custom-classname */
import { Alert } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';

const AlertNotIcon = () => {
  return (
    <Stack spacing={2}>
      <Alert className="MuiDisabledIcon" severity="error">
        This is an error alert — check it out!
      </Alert>
      <Alert className="MuiDisabledIcon" severity="warning">
        This is a warning alert — check it out!
      </Alert>
      <Alert className="MuiDisabledIcon" severity="info">
        This is an info alert — check it out!
      </Alert>
      <Alert className="MuiDisabledIcon" severity="success">
        This is a success alert — check it out!
      </Alert>
    </Stack>
  );
};

export default AlertNotIcon;
