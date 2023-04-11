import IconChevronRight from '@assets/svg/IconChevronRight';
import Breadcrumbs from '@components/Extended/Breadcrumbs';
import Header from '@components/general/Header';
import Sidebar from '@components/general/Sidebar';
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
import { drawerWidth, navItemDrawerCloseSize } from '@shared/constant';
// import { setMenu } from '@redux/slice/customizationSlice';
import { Outlet } from 'react-router-dom';

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
    }),
  })
);

// ==============================|| MAIN LAYOUT ||============================== //

function MainLayout() {
  const themeData = useTheme();

  const dispatch = useAppDispatch();

  // matchDownMd check kích thước màn hình mobile và tablet mini
  const matchDownMd = useMediaQuery(themeData.breakpoints.down('md'));

  const leftDrawerOpened = useAppSelector(opened);

  const handleLeftDrawerToggle = () => {
    dispatch(setMenu(!leftDrawerOpened));
  };

  console.log('run layout');

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
