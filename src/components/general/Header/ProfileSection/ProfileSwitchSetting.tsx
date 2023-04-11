import {
  Card,
  CardContent,
  Grid,
  Switch,
  Typography,
  useTheme,
} from '@mui/material';
import React, { memo, useState } from 'react';

const ProfileSwitchSetting = () => {
  const theme = useTheme();

  const [sdm, setSdm] = useState(true);
  const [notification, setNotification] = useState(false);

  return (
    <Card
      sx={{
        bgcolor: theme.palette.primary.light,
        my: 2,
      }}
    >
      <CardContent>
        <Grid container spacing={3} direction="column">
          <Grid item>
            <Grid
              item
              container
              alignItems="center"
              justifyContent="space-between"
            >
              <Grid item>
                <Typography variant="subtitle1">Start DND Mode</Typography>
              </Grid>
              <Grid item>
                <Switch
                  color="primary"
                  checked={sdm}
                  onChange={(e) => {
                    setSdm(e.target.checked);
                  }}
                  name="sdm"
                  size="small"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              item
              container
              alignItems="center"
              justifyContent="space-between"
            >
              <Grid item>
                <Typography variant="subtitle1">Allow Notifications</Typography>
              </Grid>
              <Grid item>
                <Switch
                  checked={notification}
                  onChange={(e) => {
                    setNotification(e.target.checked);
                  }}
                  name="sdm"
                  size="small"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default memo(ProfileSwitchSetting);
