// material-ui
import { Box, Drawer, useMediaQuery } from '@mui/material';
import { type CSSObject, type Theme, useTheme } from '@mui/material/styles';
import {
  drawerWidth,
  navItemDrawerCloseSize,
  topSpacing1,
  topSpacing2,
} from '@shared/constant';
import { memo } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
// third-party
import PerfectScrollbar from 'react-perfect-scrollbar';

import LogoSection from '../Header/LogoSection';
import MenuCard from './MenuCard';
import MenuList from './MenuList';

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
      <BrowserView>
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
      </BrowserView>
      <MobileView>
        <Box sx={{ px: 2 }}>
          <MenuList />
          {!upMdDrawerClose && <MenuCard />}
        </Box>
      </MobileView>
    </>
  );

  const openedMixin = (themeMixin: Theme): CSSObject => ({
    width: drawerWidth,
    transition: themeMixin.transitions.create('width', {
      easing: themeMixin.transitions.easing.sharp,
      duration: themeMixin.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
    // background: theme.palette.background.default,
    // color: theme.palette.text.primary,
    // borderRight: 'none',
    // [theme.breakpoints.up('md')]: {
    //   top: '88px',
    // },
  });

  const closedMixin = (themeMixin: Theme): CSSObject => ({
    transition: themeMixin.transitions.create('width', {
      easing: themeMixin.transitions.easing.sharp,
      duration: themeMixin.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${navItemDrawerCloseSize}px + 10px * 2)`,
    [themeMixin.breakpoints.down('md')]: {
      width: drawerWidth,
    },
  });

  const drawerStyles = {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    '& .MuiDrawer-paper': {
      background: theme.palette.background.default,
      color: theme.palette.text.primary,
      borderRight: 'none',
      [theme.breakpoints.up('md')]: {
        top: '88px',
      },

      ...(drawerOpen && {
        ...openedMixin(theme),
      }),
      ...(!drawerOpen && {
        ...closedMixin(theme),
      }),
    },
  };

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
        sx={{ ...drawerStyles }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

export default memo(Sidebar);
