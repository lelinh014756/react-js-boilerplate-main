import Logo from '@components/Logo';
import {
  Divider,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import AuthCardWrapper from '@views/pages/athentication/wrapper/AuthCardWrapper';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import RegisterForm from './form/RegisterForm';

function AuthRegister() {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AuthCardWrapper>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item sx={{ mb: 3 }}>
          <Link to="#">
            <Logo />
          </Link>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            direction={matchDownSM ? 'column-reverse' : 'row'}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item>
              <Stack alignItems="center" justifyContent="center" spacing={1}>
                <Typography
                  color={theme.palette.secondary.main}
                  gutterBottom
                  variant={matchDownSM ? 'h3' : 'h2'}
                >
                  Sign up
                </Typography>
                <Typography
                  variant="caption"
                  fontSize="16px"
                  textAlign={matchDownSM ? 'center' : 'inherit'}
                >
                  Enter your credentials to continue
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <RegisterForm />
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <Grid item container direction="column" alignItems="center" xs={12}>
            <Typography
              component={Link}
              to="/auth/login"
              variant="subtitle1"
              sx={{ textDecoration: 'none' }}
            >
              Already have an account?{' '}
              <Typography
                color="secondary"
                variant="subtitle1"
                display="inline-block"
              >
                Sign in
              </Typography>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </AuthCardWrapper>
  );
}

export default memo(AuthRegister);
