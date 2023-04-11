import { Autocomplete, Box, Divider, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';

// notification status options
const status = [
  {
    value: 'all',
    label: 'All Notification',
  },
  {
    value: 'new',
    label: 'New',
  },
  {
    value: 'unread',
    label: 'Unread',
  },
  {
    value: 'other',
    label: 'Other',
  },
];

const NotificationOptions = () => {
  const [value, setValue] = useState(status[0]);

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item xs={12}>
        <Box sx={{ px: 2, pt: 0.25 }}>
          <Autocomplete
            id="outlined-select-currency-native"
            options={status}
            value={value}
            getOptionLabel={(option) => option.label}
            disableClearable
            onChange={(_e, obj) => {
              if (obj !== null) {
                setValue(obj);
              }
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </Box>
      </Grid>
      <Grid item xs={12} p={0}>
        <Divider sx={{ my: 0 }} />
      </Grid>
    </Grid>
  );
};

export default NotificationOptions;
