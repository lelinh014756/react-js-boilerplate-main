/* eslint-disable @typescript-eslint/no-misused-promises */
import Google from '@assets/images/icons/social-google.svg';
import AnimateButton from '@components/Extended/AnimateButton';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box,
  Button,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useAppSelector } from '@redux/hook';
import { borderRadius } from '@redux/selector/customizationSelector';
import React, { memo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { type RegisterFormData } from '../type';
import RegisterFormContext from './RegisterFormContext';

// schema
const schema = yup
  .object({
    fullName: yup.string().trim().required('fullName is required'),
    userName: yup.string().trim().required('Email or UserName is required'),
    password: yup.string().trim().required('Password is required'),
  })
  .required();

// ==============================|| REGISTER FORM ||============================== //

function RegisterForm() {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
  const borderRadiusStore = useAppSelector(borderRadius);

  // useForm
  const method = useForm<RegisterFormData>({
    resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues: {
      fullName: '',
      userName: '',
      password: '',
    },
  });

  const { handleSubmit } = method;

  //  handler
  const onSubmit = async (data: RegisterFormData) => {
    console.log(data);

    return (e?: React.BaseSyntheticEvent) => {
      e?.preventDefault();
    };
  };

  const googleHandler = async () => {
    console.error('Login');

    return true;
  };

  return (
    <>
      <Grid container direction="column" justifyContent="center" spacing={2}>
        <Grid item xs={12}>
          <AnimateButton>
            <Button
              disableElevation
              fullWidth
              onClick={googleHandler}
              size="large"
              variant="outlined"
              sx={{
                color: 'grey.700',
                backgroundColor: theme.palette.grey[50],
                borderColor: theme.palette.grey[100],
              }}
            >
              <Box sx={{ mr: { xs: 1, sm: 2, width: 20 } }}>
                <img
                  src={Google}
                  alt="google"
                  width={16}
                  height={16}
                  style={{ marginRight: matchDownSM ? 8 : 16 }}
                />
              </Box>
              Sign up with Google
            </Button>
          </AnimateButton>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
            }}
          >
            <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />

            <Button
              variant="outlined"
              sx={{
                cursor: 'unset',
                m: 2,
                py: 0.5,
                px: 7,
                borderColor: `${theme.palette.grey[100]} !important`,
                color: `${theme.palette.grey[900]}!important`,
                fontWeight: 500,
                borderRadius: `${borderRadiusStore}px`,
              }}
              disableRipple
              disabled
            >
              OR
            </Button>

            <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          container
          alignItems="center"
          justifyContent="center"
        >
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1">
              Sign up with User name or Email address
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <FormProvider {...method}>
        <form
          autoComplete="off"
          id="auth-register-form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <RegisterFormContext />
        </form>
      </FormProvider>
    </>
  );
}

export default memo(RegisterForm);
