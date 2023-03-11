import AnimateButton from '@components/Extended/AnimateButton';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
  useTheme,
} from '@mui/material';
import {
  strengthColor,
  strengthIndicator,
  type StrengthStatus,
} from '@shared/utils/password-strength';
import React, { memo, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { type RegisterFormData } from '../type';

function RegisterFormContext() {
  const theme = useTheme();
  const [strength, setStrength] = useState(0);
  const [level, setLevel] = useState<StrengthStatus>();

  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(true);

  // useForm
  const {
    control,
    formState: { errors, isSubmitting },
  } = useFormContext<RegisterFormData>();

  //  handler
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const changePassword = (value: string) => {
    const temp = strengthIndicator(value);
    setStrength(temp);
    setLevel(strengthColor(temp));
  };

  return (
    <>
      <FormControl
        fullWidth
        error={Boolean(errors.fullName?.message)}
        sx={{ ...theme.typography.customInput }}
      >
        <InputLabel htmlFor="outlined-adornment-email-login">
          Full Name
        </InputLabel>
        <Controller
          control={control}
          name="fullName"
          render={({ field }) => (
            <OutlinedInput
              id="outlined-adornment-fullname-login"
              label="Full Name"
              inputProps={{}}
              {...field}
            />
          )}
        />
        {Boolean(errors.fullName?.message) && (
          <FormHelperText error id="standard-weight-helper-text-fullname-login">
            {errors.fullName?.message}
          </FormHelperText>
        )}
      </FormControl>
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
          render={({ field: { onChange, ...field } }) => (
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
              onChange={(e) => {
                const val = e.target.value;

                onChange(e);
                changePassword(val);

                return val;
              }}
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
      {strength !== 0 && (
        <FormControl fullWidth>
          <Box sx={{ mb: 2 }}>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <Box
                  style={{ backgroundColor: level?.color }}
                  sx={{ width: 85, height: 8, borderRadius: '7px' }}
                />
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" fontSize="0.75rem">
                  {level?.label}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </FormControl>
      )}
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item>
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
            label={
              <Typography variant="subtitle1">
                Agree with &nbsp;
                <Typography variant="subtitle1" component={Link} to="#">
                  Terms & Condition.
                </Typography>
              </Typography>
            }
          />
        </Grid>
      </Grid>
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
            Sign up
          </Button>
        </AnimateButton>
      </Box>
    </>
  );
}

export default memo(RegisterFormContext);
