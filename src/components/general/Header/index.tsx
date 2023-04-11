// material-ui
import IconMenu2 from '@assets/svg/IconMenu2';
import { Avatar, Box, ButtonBase, Tooltip } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useAppSelector } from '@redux/hook';
import { borderRadius } from '@redux/selector/customizationSelector';
import { memo } from 'react';

import LogoSection from './LogoSection';
import NotificationSection from './NotificationSection';
import ProfileSection from './ProfileSection';
import SearchSection from './SearchSection';

// ==============================|| MAIN NAVBAR / HEADER ||============================== //

interface HeaderProps {
  handleLeftDrawerToggle: () => void;
}

function Header({ handleLeftDrawerToggle }: HeaderProps) {
  const theme = useTheme();

  const radiusStore = useAppSelector(borderRadius);

  return (
    <>
      {/* logo & toggler button */}
      <Box
        sx={{
          width: 228,
          display: 'flex',
          [theme.breakpoints.down('md')]: {
            width: 'auto',
          },
        }}
      >
        <Box
          component="span"
          sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }}
        >
          <LogoSection />
        </Box>
        <Tooltip title="Menu">
          <ButtonBase
            sx={{
              borderRadius: `${radiusStore}px`,
              overflow: 'hidden',
            }}
          >
            <Avatar
              variant="rounded"
              sx={{
                ...theme.typography.commonAvatar,
                ...theme.typography.mediumAvatar,
                transition: 'all .2s ease-in-out',
                background: theme.palette.secondary.light,
                color: theme.palette.secondary.dark,
                '&:hover': {
                  background: theme.palette.secondary.dark,
                  color: theme.palette.secondary.light,
                },
              }}
              onClick={handleLeftDrawerToggle}
              color="inherit"
            >
              <IconMenu2 strokeWidth={1.5} width="1.3rem" />
            </Avatar>
          </ButtonBase>
        </Tooltip>
      </Box>

      {/* header search */}
      <SearchSection />
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ flexGrow: 1 }} />

      {/* notification & profile */}
      <NotificationSection />
      <ProfileSection />
    </>
  );
}

export default memo(Header);
