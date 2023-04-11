/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/display-name */
// assets
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import {
  Avatar,
  Button,
  Chip,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
} from '@mui/material';
// material-ui
import { useTheme } from '@mui/material/styles';
import { useAppDispatch, useAppSelector } from '@redux/hook';
import {
  borderRadius,
  isOpen,
  opened,
} from '@redux/selector/customizationSelector';
import { menuOpen, setMenu } from '@redux/slice/customizationSlice';
import { forwardRef, memo, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { type ListItemProps, type NavItemProps } from 'types/layoutType';

import {
  changeCssItemIconDrawer,
  changeCssNavItemDrawer,
  cssButtonWrapIcon,
} from '../utils';
// ==============================|| SIDEBAR MENU LIST ITEMS ||============================== //

const NavItem = ({ item, level }: NavItemProps) => {
  const theme = useTheme();
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const isOpenStore = useAppSelector(isOpen);
  const drawerOpen = useAppSelector(opened);
  const borderRadiusStore = useAppSelector(borderRadius);
  const matchesSM = useMediaQuery(theme.breakpoints.down('lg'));
  const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));

  // --- utils constant --- //
  const upMdDrawerClose = matchUpMd && !drawerOpen;
  const navIsActive = isOpenStore.findIndex((id) => id === item.id) > -1;

  const mountByLevel = upMdDrawerClose ? level > 1 : true;
  // --- end utils constant --- //

  const Icon = item.icon;
  const itemIcon =
    Icon !== undefined ? (
      <Icon strokeWidth={1.5} width={upMdDrawerClose ? '24px' : '1.3rem'} />
    ) : (
      <FiberManualRecordIcon
        sx={{
          width: navIsActive ? 8 : 6,
          height: navIsActive ? 8 : 6,
        }}
        fontSize={level > 0 ? 'inherit' : 'medium'}
      />
    );

  let itemTarget = '_self';
  if (item.target !== undefined && item.target) {
    itemTarget = '_blank';
  }

  let listItemProps: ListItemProps = {
    component: forwardRef((props, ref: any) => (
      <Link
        ref={ref}
        {...props}
        to={item.url ?? ''}
        target={itemTarget}
        style={{
          pointerEvents: item.url === undefined ? 'none' : 'auto',
        }}
      />
    )),
  };
  if (item?.external !== undefined && item.external) {
    listItemProps = { component: 'a', href: item.url, target: itemTarget };
  }

  const itemHandler = (id: string) => {
    dispatch(menuOpen(id));
    if (matchesSM) dispatch(setMenu(false));
  };

  // active menu item on page load

  useEffect(() => {
    const currentIndex = pathname
      .toString()
      .split('/')
      .findIndex((id) => id === item.id);
    if (currentIndex > -1 && pathname.includes(item.url ?? 'not_url')) {
      dispatch(menuOpen(item.id));
    }
    // eslint-disable-next-line
  }, [pathname]);

  return (
    <ListItemButton
      {...listItemProps}
      className="BeeItemButtonCustom"
      disabled={item.disabled}
      sx={{
        borderRadius: `${borderRadiusStore}px`,
        mb: 0.5,
        backgroundColor: level > 1 ? 'transparent !important' : 'inherit',

        ...changeCssNavItemDrawer({
          level,
          closed: upMdDrawerClose,
        }),
      }}
      selected={navIsActive && !upMdDrawerClose}
      onClick={(e) => {
        e.stopPropagation();
        itemHandler(item.id);
      }}
      disableTouchRipple={upMdDrawerClose && level < 2}
    >
      <Button
        sx={cssButtonWrapIcon({ theme })}
        disableTouchRipple={upMdDrawerClose ? level > 1 : true}
      >
        <ListItemIcon
          sx={{
            my: 'auto',
            minWidth: item?.icon == null ? 18 : 36,
            borderRadius: `${borderRadiusStore}px`,
            ...changeCssItemIconDrawer({
              closed: upMdDrawerClose && level < 2,
              active: navIsActive,
              theme,
            }),
          }}
        >
          {itemIcon}
        </ListItemIcon>
      </Button>
      {mountByLevel && (
        <ListItemText
          primary={
            <Typography
              variant={
                isOpenStore.findIndex((id) => id === item.id) > -1
                  ? 'h5'
                  : 'body1'
              }
              color="inherit"
            >
              {item.title}
            </Typography>
          }
          secondary={
            item.caption !== undefined && (
              <Typography
                variant="caption"
                sx={{ ...theme.typography.subMenuCaption }}
                display="block"
                gutterBottom
              >
                {item.caption}
              </Typography>
            )
          }
        />
      )}
      {item.chip != null && (
        <Chip
          color={item.chip.color}
          variant={item.chip.variant}
          size={item.chip.size}
          label={item.chip.label}
          avatar={
            item.chip.avatar !== undefined ? (
              <Avatar>{item.chip.avatar}</Avatar>
            ) : undefined
          }
        />
      )}
    </ListItemButton>
  );
};

export default memo(NavItem);
