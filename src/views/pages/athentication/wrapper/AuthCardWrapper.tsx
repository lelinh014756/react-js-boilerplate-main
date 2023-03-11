// material-ui
// project import
import MainCard from '@components/Cards/MainCard';
import { type MainCardProps } from '@components/type';
import { Box } from '@mui/material';

// ==============================|| AUTHENTICATION CARD WRAPPER ||============================== //

const AuthCardWrapper = ({ children, ...other }: MainCardProps) => (
  <MainCard
    sx={{
      maxWidth: { xs: '100%', sm: 475 },
      margin: { md: 3 },
      paddingBlock: {
        xs: 2,
        sm: 0,
      },
      '& > *': {
        flexGrow: 1,
        flexBasis: '50%',
      },
    }}
    content={false}
    {...other}
  >
    <Box sx={{ p: { xs: 2, sm: 3, xl: 5 } }}>{children}</Box>
  </MainCard>
);

export default AuthCardWrapper;
