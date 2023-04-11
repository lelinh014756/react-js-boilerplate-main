import { Chip, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const NotificationHead = () => {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-between"
      sx={{ pt: 2, px: 2 }}
    >
      <Grid item>
        <Stack direction="row" spacing={2}>
          <Typography variant="subtitle1">All Notification</Typography>
          <Chip
            size="small"
            label="01"
            sx={(theme) => ({
              color: theme.palette.background.default,
              bgcolor: theme.palette.warning.dark,
            })}
          />
        </Stack>
      </Grid>
      <Grid item>
        <Typography component={Link} to="#" variant="subtitle2" color="primary">
          Mark as all read
        </Typography>
      </Grid>
    </Grid>
  );
};

export default NotificationHead;
