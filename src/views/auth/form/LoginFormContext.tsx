import AnimateButton from '@components/Extended/AnimateButton';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import React, { memo, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { type LoginFormData } from '../type';

function LoginFormContext() {
  const theme = useTheme();

  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(true);

  // useForm
  const {
    control,
    formState: { errors, isSubmitting },
  } = useFormContext<LoginFormData>();

  //  handler
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <FormControl
        fullWidth
        error={Boolean(errors.userName?.message)}
        sx={{ ...theme.typography.customInput }}
      >
        <InputLabel htmlFor="outlined-adornment-email-login">
          Email Address / Username
        </InputLabel>
        <Controller
          control={control}
          name="userName"
          render={({ field }) => (
            <OutlinedInput
              id="outlined-adornment-email-login"
              label="Email Address / Username"
              inputProps={{}}
              {...field}
            />
          )}
        />
        {Boolean(errors.userName?.message) && (
          <FormHelperText error id="standard-weight-helper-text-email-login">
            {errors.userName?.message}
          </FormHelperText>
        )}
      </FormControl>
      <FormControl
        fullWidth
        error={Boolean(errors.password?.message)}
        sx={{ ...theme.typography.customInput }}
      >
        <InputLabel htmlFor="outlined-adornment-password-login">
          Password
        </InputLabel>
        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <OutlinedInput
              id="outlined-adornment-password-login"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                    size="large"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
              inputProps={{}}
              {...field}
            />
          )}
        />
        {Boolean(errors.password?.message) && (
          <FormHelperText error id="standard-weight-helper-text-password-login">
            {errors.password?.message}
          </FormHelperText>
        )}
      </FormControl>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing={1}
      >
        <FormControlLabel
          control={
            <Checkbox
              checked={checked}
              onChange={(event) => {
                setChecked(event.target.checked);
              }}
              name="checked"
              color="primary"
            />
          }
          label="Remember me"
        />
        <Typography
          variant="subtitle1"
          color="secondary"
          sx={{ textDecoration: 'none', cursor: 'pointer' }}
        >
          Forgot Password?
        </Typography>
      </Stack>
      <Box sx={{ mt: 2 }}>
        <AnimateButton>
          <Button
            disableElevation
            disabled={isSubmitting}
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            color="secondary"
          >
            Sign in
          </Button>
        </AnimateButton>
      </Box>
    </>
  );
}

export default memo(LoginFormContext);
