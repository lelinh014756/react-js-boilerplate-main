// project imports
import AnimateButton from '@components/Extended/AnimateButton';
import { Button, CardContent, Grid, Stack, Typography } from '@mui/material';

import { CardStyle } from './styled';

// ==============================|| PROFILE MENU - UPGRADE PLAN CARD ||============================== //

const UpgradePlanCard = () => (
  <CardStyle>
    <CardContent>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Typography variant="h4">Upgrade your plan</Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="subtitle2"
            color="grey.900"
            sx={{ opacity: 0.6 }}
          >
            70% discount for 1 years <br />
            subscriptions.
          </Typography>
        </Grid>
        <Grid item>
          <Stack direction="row">
            <AnimateButton>
              <Button
                variant="contained"
                color="warning"
                sx={{ boxShadow: 'none' }}
              >
                Go Premium
              </Button>
            </AnimateButton>
          </Stack>
        </Grid>
      </Grid>
    </CardContent>
  </CardStyle>
);

export default UpgradePlanCard;
