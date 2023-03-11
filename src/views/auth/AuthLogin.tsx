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
import React from 'react';
import { Link } from 'react-router-dom';

import LoginForm from './form/LoginForm';

function AuthLogin() {
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
                  Hi, Welcome Back
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
          <LoginForm />
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <Grid item container direction="column" alignItems="center" xs={12}>
            <Typography
              component={Link}
              to="/auth/register"
              variant="subtitle1"
              sx={{ textDecoration: 'none' }}
            >
              Don&apos;t have an account?{' '}
              <Typography
                color="secondary"
                variant="subtitle1"
                display="inline-block"
              >
                Sign up
              </Typography>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </AuthCardWrapper>
  );
}

export default AuthLogin;
