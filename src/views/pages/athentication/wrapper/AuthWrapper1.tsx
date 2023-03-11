// material-ui
import AuthFooter from '@components/Cards/AuthFooter';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { type HTMLProps, memo } from 'react';

// ==============================|| AUTHENTICATION 1 WRAPPER ||============================== //

const AuthWrapperStyled = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  minHeight: '100vh',
  [theme.breakpoints.up('sm')]: {
    backgroundColor: theme.palette.primary.light,
  },
}));

const AuthWrapper1 = (props: HTMLProps<HTMLElement>) => (
  <AuthWrapperStyled>
    <Grid
      container
      direction="column"
      justifyContent="flex-end"
      sx={{ minHeight: '100vh' }}
    >
      <Grid item xs={12}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{ minHeight: 'calc(100vh - 68px)' }}
        >
          <Grid item sx={{ m: { sm: 3 }, mb: 0 }}>
            {props.children}
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
        <AuthFooter />
      </Grid>
    </Grid>
  </AuthWrapperStyled>
);

export default memo(AuthWrapper1);
