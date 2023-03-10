import IconChevronRight from '@assets/svg/IconChevronRight';
import Breadcrumbs from '@components/Extended/Breadcrumbs';
import Customization from '@layouts/Customization';
// import Header from '@components/Header';
import menuItems from '@modules/menu-items';
import {
  AppBar,
  Box,
  CssBaseline,
  styled,
  type Theme,
  Toolbar,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from '@redux/hook';
import { opened } from '@redux/selector/customizationSelector';
import { setMenu } from '@redux/slice/customizationSlice';
import {
  drawerWidth,
  mobilePadding,
  navItemDrawerCloseSize,
  tabletPadding,
} from '@shared/constant';
// import { setMenu } from '@redux/slice/customizationSlice';
import { Outlet } from 'react-router-dom';

import Header from './Header';
import Sidebar from './Sidebar';

// styles
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }: { theme: Theme; open: boolean }) => ({
    ...theme.typography.mainContent,
    ...(!open && {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      [theme.breakpoints.up('md')]: {
        marginLeft: -(drawerWidth - (navItemDrawerCloseSize + 20)),
        // width: `calc(100% - ${drawerWidth}px)`,
      },
      [theme.breakpoints.down('md')]: {
        marginInline: `${tabletPadding}px`,
        // width: `calc(100% - ${drawerWidth}px)`,
        width: '100%',
        padding: `${tabletPadding}px`,
      },
      [theme.breakpoints.down('sm')]: {
        marginInline: `${mobilePadding}px`,
        // width: `calc(100% - ${drawerWidth}px)`,
        padding: `${tabletPadding}px`,
      },
    }),
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      marginLeft: 0,
      width: `calc(100% - ${drawerWidth}px)`,
      [theme.breakpoints.down('md')]: {
        width: `100%`,
        marginInline: `${tabletPadding}px`,
        padding: `${tabletPadding}px`,
      },
      [theme.breakpoints.down('sm')]: {
        marginInline: `${mobilePadding}px`,
      },
    }),
  })
);

// ==============================|| MAIN LAYOUT ||============================== //

function MainLayout() {
  const themeData = useTheme();

  const dispatch = useAppDispatch();

  // matchDownMd check k??ch th?????c m??n h??nh mobile v?? tablet mini
  const matchDownMd = useMediaQuery(themeData.breakpoints.down('md'));

  const leftDrawerOpened = useAppSelector(opened);

  const handleLeftDrawerToggle = () => {
    dispatch(setMenu(!leftDrawerOpened));
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* header */}
      <AppBar
        enableColorOnDark
        position="fixed"
        color="inherit"
        elevation={0}
        sx={{
          bgcolor: themeData.palette.background.default,
          transition: leftDrawerOpened
            ? themeData.transitions.create('width')
            : 'none',
        }}
      >
        <Toolbar>
          <Header handleLeftDrawerToggle={handleLeftDrawerToggle} />
        </Toolbar>
      </AppBar>

      {/* drawer */}
      <Sidebar
        drawerOpen={!matchDownMd ? leftDrawerOpened : !leftDrawerOpened}
        drawerToggle={handleLeftDrawerToggle}
      />

      {/* main content */}

      <Main theme={themeData} open={leftDrawerOpened}>
        <Breadcrumbs
          separator={IconChevronRight}
          navigation={menuItems}
          icon
          title
          rightAlign
        />
        <Outlet />
      </Main>
      <Customization />
    </Box>
  );
}

export default MainLayout;
