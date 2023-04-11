// material-ui
import { Box, Drawer, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { drawerWidth, topSpacing1, topSpacing2 } from '@shared/constant';
import { memo } from 'react';
// third-party
import PerfectScrollbar from 'react-perfect-scrollbar';

import LogoSection from '../../../components/general/Header/LogoSection';
import MenuCard from './MenuCard';
import MenuList from './MenuList';
import { drawerStyles } from './styled';

// ==============================|| SIDEBAR DRAWER ||============================== //

interface SidebarProps {
  drawerOpen: boolean;
  drawerToggle: () => void;
  window?: Window & typeof globalThis;
}

function Sidebar({ drawerOpen, drawerToggle, window }: SidebarProps) {
  const theme = useTheme();

  const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));

  // --- utils constant --- //
  const upMdDrawerClose = matchUpMd && !drawerOpen; // Check menu đã đóng với screen > md
  // --- end utils constant --- //

  const drawer = (
    <>
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <Box sx={{ display: 'flex', p: 2, mx: 'auto' }}>
          <LogoSection />
        </Box>
      </Box>

      {matchUpMd ? (
        <PerfectScrollbar
          component="div"
          style={{
            height: !matchUpMd
              ? `calc(100vh - ${topSpacing1}px)`
              : `calc(100vh - ${topSpacing2}px)`,
            paddingInline: upMdDrawerClose ? '0px' : '16px',
          }}
        >
          <MenuList />
          {!upMdDrawerClose && <MenuCard />}
        </PerfectScrollbar>
      ) : (
        <Box sx={{ px: 2 }}>
          <MenuList />
          {!upMdDrawerClose && <MenuCard />}
        </Box>
      )}
    </>
  );

  const container =
    window !== undefined ? () => window.document.body : undefined;

  return (
    <Box
      component="nav"
      sx={{ flexShrink: { md: 0 }, width: matchUpMd ? drawerWidth : 'auto' }}
      aria-label="mailbox folders"
    >
      <Drawer
        container={container}
        variant={matchUpMd ? 'permanent' : 'temporary'}
        // anchor="left"
        open={drawerOpen}
        onClose={drawerToggle}
        ModalProps={{ keepMounted: true }}
        color="inherit"
        sx={{ ...drawerStyles(theme, drawerOpen) }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

export default memo(Sidebar);
